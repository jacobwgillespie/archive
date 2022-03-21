class Backdrop

  include Mongoid::Document

  field :image, type: String
  field :original_url, type: String

  embedded_in :title

  mount_uploader :image, BackdropUploader
end
