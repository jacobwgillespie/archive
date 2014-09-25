class VerseMention < ActiveRecord::Base

  ## Relations ##

  has_and_belongs_to_many :sermons


  ## Automatic Loading of Verse Text from ESVAPI ##

  before_save :load_verse, :if => Proc.new { |vm| vm.verse_text.nil? }
  def load_verse
    esv = ESV::Bible.new
    self.verse_text = esv.passage_query verse_reference,    :'output-format' => 'plain-text',
                                                            :'include-passage-references' => false,
                                                            :'include-first-verse-numbers' => false,
                                                            :'include-verse-numbers' => false,
                                                            :'include-footnotes' => false,
                                                            :'include-passage-horizontal-lines' => false,
                                                            :'include-heading-horizontal-lines' => false,
                                                            :'include-headings' => false,
                                                            :'include-subheadings' => false,
                                                            :'include-short-copyright' => false,
                                                            :'line-length' => 0
    self.verse_text = verse_text.strip
  end

end
