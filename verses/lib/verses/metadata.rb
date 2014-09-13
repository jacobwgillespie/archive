require 'yaml'

module Verses

  # This class holds metadata about Bible book names, chapter counts, and verse counts
  class Metadata
    class << self

      # The metadata contents loaded from the yaml file.
      attr_reader :metadata

      # Access metadata for a specified book
      #
      # Examples:
      #     Metadata['Genesis']
      #     Metadata['1peter']
      #
      # If found, the book info is returned as a hash
      #
      # If not found, 'nil' is returned
      def [](book)
        index = book.to_s.downcase.gsub(/\s*\.*/, '')
        metadata[index]
      end
    end

    # Load the metadata from bible.yml
    @metadata = YAML::load_file(File.dirname(__FILE__) + '/bible.yml')

  end
end