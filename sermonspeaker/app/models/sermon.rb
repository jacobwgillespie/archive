class Sermon < ActiveRecord::Base


  ## Default Values for Fields ##
  # TODO: see if database can handle this default
  after_initialize :field_defaults
  def field_defaults
    self.published_at ||= Date.today
  end


  ## Relations ##

  belongs_to :speaker, :touch => true
  belongs_to :church, :touch => true
  has_many :media_files, :dependent => :destroy, :autosave => true
  has_and_belongs_to_many :verse_mentions


  ## Users Following This Sermon ##
  def following_user_ids
    Following.where('(entity_type = ? AND entity_id = ?) OR (entity_type = ? AND entity_id = ?)', 'Church', self.church_id, 'Speaker', self.speaker_id).uniq.pluck :user_id
  end


  ## Validations ##

  validates :title, :speaker, :published_at, :presence => true
  # TODO: finish defining validations


  ## Scopes ##

  default_scope order('published_at DESC').includes(:speaker, :church)
  scope :front, where('media_files_count > 0').joins(:media_files).where('"media_files"."status" = \'processed\'')

  ## Auto-assignment of Church ##

  before_save :set_church, :unless => Proc.new { |s| s.speaker.nil? }
  def set_church
    self.church ||= self.speaker.church
  end


  ## Auto-processing of Synopsis ##

  before_save :process_synposis, :if => Proc.new { |s| s.synopsis_changed? }
  def process_synposis
    text = Sanitize.clean(self.synopsis, Sanitize::Config::RELAXED)
    text = BibleReference.markup text
    self.synopsis_processed = RDiscount.new(text, :smart).to_html
  end


  ## Automatic Building of VerseMentions from Synopsis ##

  before_save :build_verse_mentions, :if => Proc.new { |s| s.synopsis_changed? }
  def build_verse_mentions
    verse_mentions.clear

    reference_groups = BibleReference.parse synopsis
    return if reference_groups.empty?

    reference_groups.each do |reference_group|
      reference_group[:reference].each do |reference|
        reference_text = "#{reference_group[:book]} #{reference[:text]}"
        verse_mention = VerseMention.find_or_create_by_verse_reference(reference_text)
        verse_mentions << verse_mention
      end
    end
  end


  ## Search (Solr/Sunspot) ##

  searchable do
    text :title, :synopsis
    integer :speaker_id
    integer :church_id
    time    :published_at

    string  :sort_title do
      title.downcase.gsub(/^(an?|the)/, '')
    end



  end

  class << self
    def search_with_solr query, page=nil
      search = Sermon.search do
        fulltext query
        paginate :page => page, :per_page => 20
        facet :speaker_id
        facet :church_id
      end
      search.results
    end
  end


  ## Permalinks ##

  extend FriendlyId
  friendly_id :title, :use => :slugged


  ## will_paginate Gem Emulation ##
  def self.paginate(options = {})
    page(options[:page]).per(options[:per_page])
  end

end
