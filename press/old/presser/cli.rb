require 'thor'
require 'rubygems/user_interaction'
require 'rubygems/config_file'

module Presser
  class CLI < Thor
    include Thor::Actions

    def initialize(*)
      super
      the_shell = (options["no-color"] ? Thor::Shell::Basic.new : shell)
      Presser.ui = UI::Shell.new(the_shell)
      Presser.ui.debug! if options["verbose"]
      #Presser.
    end

    check_unknown_options!(:except => [:config, :exec])

    default_task :install
    class_option "no-color", :type => :boolean, :banner => "Disable colorization in output"
    class_option "verbose",  :type => :boolean, :banner => "Enable verbose output mode", :aliases => "-V"

    def help
      puts "Working!"
    end

    def install
      puts "Installing stuff..."
      definition = Presser.definition
      definition.validate_ruby!
  end
end