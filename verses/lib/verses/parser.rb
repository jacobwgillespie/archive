module Verses
  class Parser

    class << self

      REGEX = /\b([1-3]?\w+)\s(\d+[\s\d,;:-]*\d+|\d)\b/i

      def parse reference
        text = reference.dup
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
        out.delete_if { |r| Verses::Metadata[r[:book]].nil? }
        out.map! { |r|
          {
            book: Verses::Metadata[r[:book]]['name'],
            reference: self.parse_verse(r[:reference], r[:book])
          }
        }
        out
      end

      def parse_verse refs, book

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

            if ref.first.length == 1 and ref.last.length == 1
              if Verses::Metadata[book]['chapterless']
                hash[:start] = {chapter: 1, verse: ref.first[0]}
                hash[:end] = {chapter: 1, verse: ref.last[0]}
              else
                hash[:start] = {chapter: ref.first[0], verse: 1}
                hash[:end] = {chapter: ref.last[0], verse: Verses::Metadata[book]['chapter_info'][ref.last[0].to_i - 1].to_i}
              end
            else
              if ref.first.length == 2
                hash[:start] = {chapter: ref.first[0], verse: ref.first[1]}
              else
                hash[:start] = {chapter: ref.first[0], verse: 1}
              end

              if ref.last.length == 2
                hash[:end] = {chapter: ref.last[0], verse: ref.last[1]}
              else
                hash[:end] = {chapter: hash[:start][:chapter], verse: ref.last[0]}
              end
            end
          elsif ref.length == 1
            r = ref[0].split ':'
            if r.length == 2
              hash[:start] = {chapter: r[0], verse: r[1]}
              hash[:end] = {chapter: r[0], verse: r[1]}
            else
              if Verses::Metadata[book]['chapterless'] and r[0].to_i > 0 and r[0].to_i <= Verses::Metadata[book]['chapter_info'][0].to_i
                hash[:start] = {chapter: 1, verse: r[0]}
                hash[:end] = {chapter: 1, verse: r[0]}
              else
                hash[:start] = {chapter: r[0], verse: 1}
                unless Verses::Metadata[book]['chapter_info'][r[0].to_i - 1].nil?
                  hash[:end] = {chapter: r[0], verse: Verses::Metadata[book]['chapter_info'][r[0].to_i - 1]}
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

            hash[:start][:code] = '%03d%03d%003d' % [Verses::Metadata[book]['id'], hash[:start][:chapter], hash[:start][:verse]]
            hash[:end][:code] = '%03d%03d%003d' % [Verses::Metadata[book]['id'], hash[:end][:chapter], hash[:end][:verse]]

            if hash[:start][:chapter] <= 0 or hash[:start][:verse] <= 0 or hash[:end][:chapter] <= 0 or hash[:end][:verse] <= 0
              hash[:valid] = false
            elsif Verses::Metadata[book]['chapter_info'][hash[:start][:chapter].to_i - 1].nil? or Verses::Metadata[book]['chapter_info'][hash[:end][:chapter].to_i - 1].nil?
              hash[:valid] = false
            elsif hash[:start][:verse] > Verses::Metadata[book]['chapter_info'][hash[:start][:chapter].to_i - 1] or hash[:end][:verse] > Verses::Metadata[book]['chapter_info'][hash[:end][:chapter].to_i - 1]
              hash[:valid] = false
            elsif hash[:start][:chapter] > hash[:end][:chapter] or hash[:start][:verse] > hash[:end][:verse]
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
end