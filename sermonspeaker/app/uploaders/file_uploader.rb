# encoding: utf-8

class FileUploader < CarrierWave::Uploader::Base

  include Rails.application.routes.url_helpers
  #Rails.application.routes.default_url_options = ActionMailer::Base.default_url_options


  # see https://gist.github.com/995663 for examples of how to use per-extension processing rules

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  # include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  #storage :file
  storage :fog

  after :store, :zencode

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/#{model.updated_at.to_i}"
  end


  AUDIO_EXTENSIONS = Settings.allowed_upload_types.audio
  VIDEO_EXTENSIONS = Settings.allowed_upload_types.video
  DOCUMENT_EXTENSIONS = Settings.allowed_upload_types.documents

  def extension_white_list
    AUDIO_EXTENSIONS + DOCUMENT_EXTENSIONS
  end

  def filename
    return unless original_filename
    #return 'video.mp4' if is_type? :video
    #return 'audio.mp3' if is_type? :audio
    original_filename
  end

  def is_type? type
    extension = File.extname(original_filename).downcase
    extension = extension[1..-1] if extension[0,1] == '.'
    extensions = %w()
    extensions = AUDIO_EXTENSIONS if type == :audio
    extensions = VIDEO_EXTENSIONS if type == :video
    extensions = DOCUMENT_EXTENSIONS if type == :document
    extensions.include?(extension)
  end


  def self.process_extensions(*args)
    extensions = args.shift
    args.each do |arg|
      if arg.is_a?(Hash)
        arg.each do |method, args|
          processors.push([:process_trampoline, [extensions, method, args]])
        end
      else
        processors.push([:process_trampoline, [extensions, arg, []]])
      end
    end
  end

  def process_trampoline(extensions, method, args)
    extension = File.extname(original_filename).downcase
    extension = extension[1..-1] if extension[0,1] == '.'
    self.send(method, *args) if extensions.include?(extension)
  end


  private

  def zencode(args)
    return unless is_type? :audio # or is_type? :video

    return unless Settings.use_zencoder

    settings = {
      :input => "s3://#{Settings.s3_bucket}/uploads/media_file/file/#{@model.id}/#{model.updated_at.to_i}/#{filename}",
      :output => [{
        :base_url => "s3://#{Settings.s3_bucket}/uploads/media_file/file/#{@model.id}/#{model.updated_at.to_i}",
        :filename => filename,
        :label => "web",
        :notifications => ['http://sermonspeaker.com/media_files/notify'],
        :public => 1
      }]
    }

    if is_type? :video
      settings[:output][0].merge!({
        :video_codec => "h264",
        :audio_codec => "aac",
        :quality => 3,
        :width => 854,
        :height => 480,
        :format => "mp4",
        :aspect_mode => "preserve",
      })
    elsif is_type? :audio
      settings[:output][0].merge!({
        :audio_codec => "mp3",
        :audio_quality => 3,
        :format => "mp3",
      })
    end

    zencoder_response = Zencoder::Job.create(settings)

    # Rails.logger.info zencoder_response.to_json

    zencoder_response.body["outputs"].each do |output|
      if output["label"] == "web"
        @model.job_id = output["id"]
        @model.save(:validate => false)
      end
    end
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  # def default_url
  #   "/images/fallback/" + [version_name, "default.png"].compact.join('_')
  # end

  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  # end

  # Create different versions of your uploaded files:
  # version :thumb do
  #   process :scale => [50, 50]
  # end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  # def extension_white_list
  #   %w(jpg jpeg gif png)
  # end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  # def filename
  #   "something.jpg" if original_filename
  # end

end
