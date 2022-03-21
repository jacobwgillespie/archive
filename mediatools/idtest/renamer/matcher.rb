module Renamer
  class Matcher

    attr_accessor :files, :season, :file_matches, :episode_slots

    def initialize files, season
      @files_class = files
      @files = @files_class.files
      @season = season
    end

    def match
      @files.each_index do |idx|
        episode, score = most_similar(@files[idx][:search_title], @season.episodes)
        @files[idx][:guessed_title] = episode[:name]

        @files[idx][:guessed_episode] = episode
        @files[idx][:guessed_title_score] = score
      end

      puts "Using alternate naming scheme" if @files_class.use_alternate_naming

      @episode_slots = Hash.new { |hash, key| hash[key] = [] }

      @season.episodes.each do |episode|
        puts episode
        if @files_class.use_alternate_naming
          @episode_slots["S#{episode[:season_number]}E#{episode[:part_number]}#{episode[:part_letter]}"]
        else
          @episode_slots["S#{episode[:season_number]}E#{episode[:number]}"]
        end
      end

      @files.each do |file|
        if @files_class.use_alternate_naming
          @episode_slots["S#{file[:guessed_episode][:season_number]}E#{file[:guessed_episode][:part_number]}#{file[:guessed_episode][:part_letter]}"] << file if file[:guessed_filename_episode] == -1
          # TODO: add season to next line
          #@episode_slots["#{file[:guessed_filename_episode]}#{file[:guessed_filename_part] || 'a'}"] << file unless file[:guessed_filename_episode] == -1
        else
          if file[:guessed_filename_episode] == -1 or true
            @episode_slots["S#{file[:guessed_episode][:season_number]}E#{file[:guessed_episode][:number]}"] << file
          else
            # TODO: add season to next line
            #@episode_slots["#{file[:guessed_filename_episode]}"] << file
          end
        end
      end


    end

    def most_similar filename, episodes
      sim = episodes.first
      sim_score = Renamer::Util.similarity(filename, episodes.first[:search_name])

      episodes.each do |episode|
        score = Renamer::Util.similarity(filename, episode[:search_name])
        if score > sim_score
          sim = episode
          sim_score = score
        end
      end
      [sim, sim_score]
    end

  end
end