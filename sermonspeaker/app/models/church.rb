class Church < ActiveRecord::Base

  ## Scopes ##

  default_scope order('name ASC')
  scope :with_relations, includes(:speakers, :sermons)


  # Include for State Machine Library
  include AASM


  ## Attached Logo File ##

  mount_uploader :photo, PhotoUploader


  ## Relations ##

  has_one :user
  has_many :speakers
  has_many :sermons

  has_many :followings, :as => :entity
  has_many :followers, :class_name => 'User', :source => :user, :through => :followings


  ## Validations ##

  validates :name, :city, :state, :pay_token, :presence => true


  ## Search (Solr/Sunspot) ##

  searchable do
    text :name, :info
    text :speakers do
      speakers.map { |speaker| speaker.name }
    end
  end

  class << self
    def search_with_solr query, page=nil
      search = Church.search do
        fulltext query
        paginate :page => page, :per_page => 20
      end
      search.results
    end
  end

  ## Geocoding ##

  geocoded_by :full_street_address
  after_validation :geocode

  def full_street_address
    "#{street}, #{city}, #{state} #{zip}"
  end

  def general_location
    return "#{city}, #{state}" unless city.nil? or state.nil?
    return state if city.nil?
    return nil
  end

  def address_html
    html = '<address>'
    html += street
    html += '<br/>' unless street.nil? or "#{city}#{state}#{zip}".empty?
    html += "#{general_location}"
    html += " #{zip}" unless zip.nil?
    html += '</address>'
    html
  end


  ## Church Payment Status State Machine ##

  aasm :column => :status do
    state :unfunded, :initial => true
    state :customered
    state :funded
    state :canceled

    event :customer_it do
      transitions :to => :customered, :from => [:unfunded]
    end

    event :fund_it do
      transitions :to => :funded, :from => [:customered]
    end

    event :cancel_it do
      transitions :to => :canceled, :from => [:funded]
    end

    event :fund_it_again do
      transitions :to => :funded, :from => [:canceled]
    end
  end


  ## Church Info Processing ##

  SANITIZE =  {:elements=>["a", "abbr", "b", "bdo", "blockquote", "br", "caption", "cite", "code", "col", "colgroup", "dd", "del", "dfn", "dl", "dt", "em", "figcaption", "figure", "h1", "h2", "h3", "h4", "h5", "h6", "hgroup", "i", "img", "ins", "kbd", "li", "mark", "ol", "p", "pre", "q", "rp", "rt", "ruby", "s", "samp", "small", "strike", "strong", "sub", "sup", "table", "tbody", "td", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "wbr"], :attributes=>{:all=>["dir", "lang", "title"], "a"=>["href"], "blockquote"=>["cite"], "col"=>["span", "width"], "colgroup"=>["span", "width"], "del"=>["cite", "datetime"], "img"=>["align", "alt", "height", "src", "width"], "ins"=>["cite", "datetime"], "ol"=>["start", "reversed", "type"], "q"=>["cite"], "table"=>["summary", "width"], "td"=>["abbr", "axis", "colspan", "rowspan", "width"], "th"=>["abbr", "axis", "colspan", "rowspan", "scope", "width"], "time"=>["datetime", "pubdate"], "ul"=>["type"]}, :protocols=>{"a"=>{"href"=>["ftp", "http", "https", "mailto", :relative]}, "blockquote"=>{"cite"=>["http", "https", :relative]}, "del"=>{"cite"=>["http", "https", :relative]}, "img"=>{"src"=>["http", "https", :relative]}, "ins"=>{"cite"=>["http", "https", :relative]}, "q"=>{"cite"=>["http", "https", :relative]}}, :add_attributes => {'a' => {'rel' => 'nofollow', 'target' => '_blank'}}}

  before_save :process_info, :if => Proc.new { |c| c.info_changed? }
  def process_info
    text = Sanitize.clean(self.info, SANITIZE)
    text = BibleReference.markup text
    self.info_processed = RDiscount.new(text, :smart).to_html
  end


  ## Automatic Loading of Customer Data from Stripe ##

  # TODO: rescue from the state of created with pay token without customer token
  before_save :load_customer_info, :if => Proc.new { |c| c.customer_token.nil? and c.pay_token.nil? }
  def load_customer_info
    begin
      customer = Stripe::Customer.create(
        :card => self.pay_token,
        :plan => "church_basic",
        :email => "payinguser@example.com"
      )
      self.customer_token = customer.id
      self.card_type = customer.active_card.type
      self.card_digits = customer.active_card.last4
      self.subscription_status = customer.subscription.status
      self.customer_it!
      self.fund_it! if customer.subscription.status == 'active'
    rescue Exception => e
      self.subscription_status = e.message
    end
  end


  ## Automatic Assignment of Owner User ##

  before_save :set_owner_user
  def set_owner_user
    self.user ||= User.current
  end


  ## Permalinks ##

  extend FriendlyId
  friendly_id :name, :use => :slugged


  ## will_paginate Gem Emulation ##
  def self.paginate(options = {})
    page(options[:page]).per(options[:per_page])
  end

end
