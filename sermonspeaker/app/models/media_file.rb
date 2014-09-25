class MediaFile < ActiveRecord::Base

  # Include for State Machine Library
  include AASM


  ## Relations ##

  belongs_to :sermon, :counter_cache => true, :touch => true


  ## Attached File Upload ##

  mount_uploader :file, FileUploader


  ## Automatically Set Default Name ##

  before_validation :set_default_name, :if => Proc.new { |mf| mf.name.nil? }
  def set_default_name
    case get_type
    when :audio
      self.name = "Audio File"
    when :video
      self.name = "Video File"
    when :document
      self.name = "Document Download"
    end
  end


  ## Capture Zencoder Notification ##

  def capture_notification(output)
    self.make_it_processed! if output[:state] == 'finished'
    self.save
  end


  ## Validations ##

  validates :sermon, :file, :name, :presence => true


  ## Automatically Save File Content Type ##

  before_save :update_content_type # TODO: add condition in a proc
  def update_content_type
    if file.present? && file_changed?
      self.content_type = file.file.content_type
    end
  end


  ## Helper for Retrieving File Size ##

  def file_size
    1000 # temporarily disable file size calculation
    # TODO: fix this in production env (perhaps zencoder is not replacing target file?)
    # self.file.size
  end


  ## Auto-load File Type from Extension ##

  before_save :set_type, :if => Proc.new { |mf| mf.file_changed? }
  def set_type
    self.asset_type ||= get_type.to_s
  end


  ## Media File Transcoding Status State Machine ##

  aasm :column => :status do
    state :unprocessed, :initial => true
    state :processed
    state :error

    event :make_it_processed do
      transitions :to => :processed, :from => [:unprocessed]
    end

    event :give_it_an_error do
      transitions :to => :error, :from => [:unprocessed]
    end
  end


  ## Automatically Make Documents Processed ##

  before_save :process_documents
  def process_documents
    return unless self.unprocessed?
    make_it_processed! if get_type == :document
  end


  ## TODO: make this a view helper
  def type_img
    "/assets/file-types/#{self.asset_type}.png"
  end


  ## File Type Tester ##

  def is? type
    self.asset_type == type.to_s
  end


  ## Helper Methods for Extensions, Types, and Status ##

  protected

  def extension
    extension = File.extname(self.file.path).downcase
    extension = extension[1..-1] if extension[0,1] == '.'
    extension
  end

  def get_type
    return :document if Settings.allowed_upload_types.documents.include? extension
    return :audio if Settings.allowed_upload_types.audio.include? extension
    return :video if Settings.allowed_upload_types.video.include? extension
    return :other
  end

end
