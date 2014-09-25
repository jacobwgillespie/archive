class Speaker < ActiveRecord::Base


  ## Relations ##

  belongs_to :church, :touch => true
  has_many :sermons, :dependent => :restrict
  has_many :followings, :as => :entity
  has_many :followers, :class_name => 'User', :source => :user, :through => :followings


  ## Attached Speaker Photo Uploader ##

  mount_uploader :photo, PhotoUploader


  ## Scopes ##

  default_scope order('last_name ASC, first_name ASC')


  ## Joined Name Field ##

  def name
    "#{first_name} #{last_name}"
  end


  ## Joined Church Field (TODO: pick better name) ##

  def church_name
    "#{name} - #{church.name}"
  end


  ## Validations ##

  validates :name, :title, :church, :presence => true


  ## Search (Solr/Sunspot) ##

  searchable do
    text :name, :bio
  end

  class << self
    def search_with_solr query, page=nil
      search = Speaker.search do
        fulltext query
        paginate :page => page, :per_page => 20
      end
      search.results
    end
  end


  ## Auto-processing of Bio ##

  before_save :process_bio
  def process_bio
    text = Sanitize.clean(self.bio, Sanitize::Config::RELAXED)
    # TODO: make a markup! method to conserve object creation
    text = BibleReference.markup text
    self.bio_processed = RDiscount.new(text, :smart).to_html
  end


  ## Permalinks ##

  extend FriendlyId
  friendly_id :name, :use => :slugged


  ## will_paginate Gem Emulation ##
  def self.paginate(options = {})
    page(options[:page]).per(options[:per_page])
  end

end
