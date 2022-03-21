module Renamer
  class Files

    COMMON_RATIO = 0.70 # if a string is in 70% of filenames, it is common

    attr_accessor :directory, :files, :parts, :duplicate_parts, :common_duplicate_parts, :known_episodes, :use_alternate_naming

    def initialize directory
      @directory = directory
      @files = @parts = @duplicate_parts = @common_duplicate_parts = @known_episodes = []
      @use_alternate_naming = false
    end

    def load
      files = []
      EXTS.each do |ext|
        new_files = Dir.glob("#{@directory}/*.#{ext}")
        next if new_files.empty?
        files += new_files
      end

      files.sort!
    end

    def process
      @files = load

      @files.map! do |f|
        name = f.gsub("#{@directory}/", '')
        {
          :name => name,
          :parts => name.split(/[ ,\-\.\(\)]/).compact.reject(&:empty?).reject do |p|
            QUALITIES.include?(p.downcase) or FORMATS.include?(p.downcase) or EXTS.include?(p.downcase)
          end
        }
      end

      @files.each_index do |idx|
        @files[idx][:parts].map! do |part|
          RomanNumerals.is_roman_numeral?(part) ? RomanNumerals.to_integer(part).to_s : part
        end
      end

      @parts = Hash.new(0)
      @files.each do |file|
        file[:parts].each do |part|
          @parts[part.downcase] += 1
        end
      end

      @duplicate_parts = @parts.reject do |part, count|
        count < 2
      end

      threshhold = @files.count.to_f * COMMON_RATIO
      @common_duplicate_parts = @parts.reject { |part, count| count < threshhold }

      @files.each_index do |idx|
        @files[idx][:search_title] = @files[idx][:parts].reject do |p|
          @common_duplicate_parts.include? p.downcase
        end.join ' '
      end

      @files.each_index do |index|
        parts_plus_numbers = []
        @files[index][:parts].each_index do |idx|
          guess_one, guess_two, guess_three, guess_four = find_numbers @files[index][:parts][idx]
          guess_episode = nil
          guess_part = nil
          guess_finder = -1

          unless guess_four.empty?
            guess_episode = guess_four.first[0].to_i
            guess_part = guess_four.first[1]
            guess_finder = 4
          end

          unless guess_three.empty?
            guess_episode = -1
            guess_finder = 3
          end

          unless guess_two.empty?
            guess_episode = guess_two.first[1]
            guess_part = guess_two.first[2]
            guess_finder = 2
          end

          unless guess_one.empty?
            guess_episode = guess_one.first[1]
            guess_part = guess_one.first[2]
            guess_finder = 1
          end

          parts_plus_numbers << {
            :idx => idx,
            :guess_finder => guess_finder,
            :guess_episode => guess_episode.to_i,
            :guess_part => guess_part
          }
        end

        parts_plus_numbers.sort! { |a,b| b[:guess_finder] <=> a[:guess_finder] }

        if parts_plus_numbers.first[:guess_episode].to_i <= @known_episodes.length
          @files[index][:guessed_filename_episode] = parts_plus_numbers.first[:guess_episode].to_i
          @files[index][:guessed_filename_part] = parts_plus_numbers.first[:guess_part].try(:downcase)
        else
          @files[index][:guessed_filename_episode] = -1
          @files[index][:guessed_filename_part] = nil
        end

        @use_alternate_naming = true unless @files[index][:guessed_filename_part].nil?

      end

    end

    protected

    def find_numbers string

      # Format S01E01
      guess_one = string.scan /S(\d{1,2})E(\d{1,2})([a-z])?/i

      # Format: 001x001
      guess_two = string.scan /(\d{1,3})x(\d{1,3})([a-z])?/i

      # Format: S001
      guess_three = string.scan /S(\d{1,2})/i

      # Format: 001
      guess_four = string.scan /(\d{2,3})([a-e])?/i

      [guess_one, guess_two, guess_three, guess_four]

    end

  end
end