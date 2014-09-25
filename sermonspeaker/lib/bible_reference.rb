class BibleReference

  class << self

    @@bible_data = nil

    def parse t
      self.load_bible_data
      text = t.dup
      text.gsub! /\b(1|I|1st)\b/i, '1'
      text.gsub! /\b(2|II|2nd)\b/i, '2'
      text.gsub! /\b(3|III|3rd)\b/i, '3'
      text.gsub! /(?<=^[1-3]|\s[1-3])\s(?=\w)/, ''
      out = text.scan REGEX
      out.map! { |r|
        {
          book: r[0].downcase,
          reference: r[1]
        }
      }
      out.delete_if { |r| @@bible_data[r[:book]].nil? }
      out.map! { |r|
        {
          book: @@bible_data[r[:book]]['name'],
          reference: self.parse_verse(r[:reference], r[:book])
        }
      }
      out
    end

    def markup t
      self.load_bible_data
      text = t.dup
      text.gsub! /\b(1|I|1st)\b/i, '1'
      text.gsub! /\b(2|II|2nd)\b/i, '2'
      text.gsub! /\b(3|III|3rd)\b/i, '3'
      text.gsub! /(?<=^[1-3]|\s[1-3])\s(?=\w)/, ''

      text.gsub! REGEX do |m|
        match = $~
        hash = {
          book: match[1].downcase,
          reference: match[2]
        }
        unless @@bible_data[hash[:book]].nil?
          hash = {
            book: hash[:book],
            reference: self.parse_verse(hash[:reference], hash[:book])
          }

          markup = ''
          tag = ''

          r = hash[:reference].first
          if r[:valid]
            tag = "<a href='http://ebible.com/esv/#{hash[:book]}/#{r[:start][:chapter]}/#{r[:start][:verse]}/-/#{r[:end][:chapter]}/#{r[:end][:verse]}' data-book='#{hash[:book]}' data-start-chapter='#{r[:start][:chapter]}' data-start-verse='#{r[:start][:verse]}' data-end-chapter='#{r[:end][:chapter]}' data-end-verse='#{r[:end][:verse]}'>#{@@bible_data[hash[:book]]['name']} #{r[:original_text]}</a>"
          else
            tag = "#{@@bible_data[hash[:book]]['name']} #{r[:original_text]}"
          end
          sep = ','
          sep = ';' unless hash[:reference][1].nil? or hash[:reference][1][:original_text].include? ':'
          markup += "#{tag}#{sep} "

          hash[:reference][1..-1].each_index do |i|
            idx = i + 1
            r = hash[:reference][idx]
            if r[:valid]
              tag = "<a target='_blank' href='http://ebible.com/esv/#{hash[:book]}/#{r[:start][:chapter]}/#{r[:start][:verse]}/-/#{r[:end][:chapter]}/#{r[:end][:verse]}' data-book='#{hash[:book]}' data-start-chapter='#{r[:start][:chapter]}' data-start-verse='#{r[:start][:verse]}' data-end-chapter='#{r[:end][:chapter]}' data-end-verse='#{r[:end][:verse]}'>#{r[:original_text]}</a>"
            else
              tag = "#{r[:original_text]}"
            end
            sep = ','
            sep = ';' unless hash[:reference][idx + 1].nil? or hash[:reference][idx + 1][:original_text].include? ':'
            markup += "#{tag}#{sep} "
          end
          markup = markup[0..-3]
          markup

        else
          "#{hash[:book]} #{hash[:reference]}"
        end
      end

      text

    end

    REGEX = /\b([1-3]?\w+)\s(\d+[\s\d,;:-]*\d+|\d)\b/i

    def load_bible_data
      @@bible_data ||= YAML::load_file("#{Rails.root}/lib/bible.yml")
    end

    def parse_verse refs, book

      self.load_bible_data

      refs.gsub! /\s/, ''
      refs.gsub! /(?<=\d),(?=\d+:)/, ';' # fix for using commas in the semicolon's role
      refs = refs.split ';'

      clean_refs = []

      refs.each do |ref|
        ref = ref.split ':'

        if ref.length == 2

          splits = ref.last.split(',')

          v = splits.first
          clean_refs << {
            ref: "#{ref.first}:#{v}",
            text: "#{ref.first}:#{v}"
          }

          splits[1..-1].each do |v|
            clean_refs << {
              ref: "#{ref.first}:#{v}",
              text: "#{v}"
            }
          end
        else
          ref.first.split(',').each do |v|
            clean_refs << {
              ref: "#{v}",
              text: "#{v}"
            }
          end
        end
      end

      refs = clean_refs

      ret = []
      refs.each do |references|

        ref = references[:ref]
        ref = ref.split '-'

        hash = {
          :start => false,
          :end => false,
          :text => '',
          :original_text => '',
          :valid => false
        }

        if ref.length == 2
          ref.map! { |r| r.split ':' }

          if ref.first.length == 2
            hash[:start] = {chapter: ref.first[0], verse: ref.first[1]}
          else
            hash[:start] = {chapter: 1, verse: ref.first[1]}
          end

          if ref.last.length == 2
            hash[:end] = {chapter: ref.last[0], verse: ref.last[1]}
          else
            hash[:end] = {chapter: hash[:start][:chapter], verse: ref.last[0]}
          end
        elsif ref.length == 1
          r = ref[0].split ':'
          if r.length == 2
            hash[:start] = {chapter: r[0], verse: r[1]}
            hash[:end] = {chapter: r[0], verse: r[1]}
          else
            if @@bible_data[book]['chapterless'].to_i == 1 and r[0].to_i > 0 and r[0].to_i <= @@bible_data[book]['chapter_info'][0].to_i
              hash[:start] = {chapter: 1, verse: r[0]}
              hash[:end] = {chapter: 1, verse: r[0]}
            else
              hash[:start] = {chapter: r[0], verse: 1}
              unless @@bible_data[book]['chapter_info'][r[0].to_i - 1].nil?
                hash[:end] = {chapter: r[0], verse: @@bible_data[book]['chapter_info'][r[0].to_i - 1]}
                hash[:text] = "#{hash[:start][:chapter]}"
              end
            end
          end
        end

        if hash[:start] == false or hash[:end] == false
          hash[:valid] = false
          hash[:text] = refs
        else
          if hash[:text] == ''
            hash[:text] = "#{hash[:start][:chapter]}:#{hash[:start][:verse]}-#{hash[:end][:verse]}"
            hash[:text] = "#{hash[:start][:chapter]}:#{hash[:start][:verse]}" if hash[:start][:verse] == hash[:end][:verse]
          end

          hash[:start][:chapter] = hash[:start][:chapter].to_i
          hash[:start][:verse] = hash[:start][:verse].to_i
          hash[:end][:chapter] = hash[:end][:chapter].to_i
          hash[:end][:verse] = hash[:end][:verse].to_i

          if hash[:start][:chapter] <= 0 or hash[:start][:verse] <= 0 or hash[:end][:chapter] <= 0 or hash[:end][:verse] <= 0
            hash[:valid] = false
          elsif @@bible_data[book]['chapter_info'][hash[:start][:chapter].to_i - 1].nil? or @@bible_data[book]['chapter_info'][hash[:end][:chapter].to_i - 1].nil?
            hash[:valid] = false
          elsif hash[:start][:verse] > @@bible_data[book]['chapter_info'][hash[:start][:chapter].to_i - 1] or hash[:end][:verse] > @@bible_data[book]['chapter_info'][hash[:end][:chapter].to_i - 1]
            hash[:valid] = false
          else
            hash[:valid] = true
          end
        end

        hash[:original_text] = references[:text]

        ret << hash

      end
      ret
    end

  end

end