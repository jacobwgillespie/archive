require 'rubygems'
#require 'aws/s3'
#require 'stalker'
#require 'open-uri'
#require 'RMagick'
#require 'active_support/core_ext'
#require "bundler/setup"
#Bundler.require(:default)


include AWS::S3

aws_config = YAML.load_file("./config/aws.yaml")

Base.establish_connection!(
  :access_key_id     => aws_config['access'],
  :secret_access_key => aws_config['secret']
)




class AppIcon

  def initialize(options)
    @id = options[:id]
    @size = options[:size]
    @size = 'medium' if @size.nil?
    @filename = "#{@id}-#{@size}.png"

    print options.inspect

    @loaded = false
  end

  def get_uri
    if not exists_on_s3?
      schedule_generate
      "http://s3.amazonaws.com/formattr/processing.png"
    else
      schedule_generate if needs_refresh?
      "http://s3.amazonaws.com/formattr/#{@filename}"
    end
  end

  def process
    generate if not exists_on_s3?

    if needs_refresh?
      #S3Object.delete @filename, 'formattr'
      generate
    end
  end




  def generate
    print "\ngot to generate with http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup?id=#{@id}\n"

    app = JSON.parse open("http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup?id=#{@id}").read

    print app['resultCount']
    return if app['resultCount'] == 0

    print "got to here"

    app = app['results'][0]
    app_icon_uri = app['artworkUrl60']
    app_icon_uri = app['artworkUrl100'] if @size == 'medium'
    app_icon_uri = app['artworkUrl512'] if @size == 'large'
    img = Magick::Image.from_blob(open(app_icon_uri).read).first
    img.format = 'png'

    size = '60x60'
    size = '100x100' if @size == 'medium'
    size = '512x512' if @size == 'large'

    radius = 10
    radius = 12 if @size == 'medium'
    radius = 46 if @size == 'large'

    img.change_geometry!(size) { |cols, rows, img|
      img.resize!(cols, rows)
    }

    mask = Magick::Image.new(img.columns, img.rows) {self.background_color = 'black'}
    gc = Magick::Draw.new
    gc.stroke('white').fill('white')
    gc.roundrectangle(0, 0, img.columns-1, img.rows-1, img.columns/5, img.columns/5)
    gc.draw(mask)
    mask.matte = false
    img.matte = true
    final = img.composite(mask, Magick::CenterGravity, Magick::CopyOpacityCompositeOp)

    S3Object.store(
      @filename,
      final.to_blob,
      'formattr',
      :content_type => 'image/png',
      :access => :public_read
    )

  end

  def schedule_generate
    Stalker.enqueue('app_icon.process', :id => @id, :size => @size)
  end

  def exists_on_s3?
    S3Object.exists? @filename, 'formattr'
  end

  def needs_refresh?
    s3_last_modified < 5.minutes.ago
    true
  end

  def loaded?
    @loaded
  end

  def load_from_s3
    return if loaded?
    return nil if not exists_on_s3?

    @s3 = S3Object.find @filename, 'formattr'
    @loaded = true
  end

  def s3_last_modified
    return nil if load_from_s3.nil?
    Time.parse @s3.last_modified.to_s
  end

  def get_s3_uri
    "http://s3.amazonaws.com/formattr/#{@filename}"
  end

end
