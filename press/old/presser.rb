
require 'rbconfig'
require 'fileutils'
require 'pathname'
require 'presser/version'

module Presser

  autoload :Dsl, 'presser/dsl'
  autoload :UI, 'presser/ui'

  class PresserError < StandardError
    def self.status_code(code)
      define_method(:status_code) { code }
    end
  end

  class PressfileNotFound   < PresserError; status_code(10) ; end
  class PluginNotFound      < PresserError; status_code(7)  ; end
  class PressfileError      < PresserError; status_code(4)  ; end
  class InstallError        < PresserError; status_code(5)  ; end
  class InstallHookError    < PresserError; status_code(6)  ; end
  class PathError           < PresserError; status_code(13) ; end
  class GitError            < PresserError; status_code(11) ; end
  class DeprecatedError     < PresserError; status_code(12) ; end
  class PluginspecError     < PresserError; status_code(14) ; end
  class DslError            < PresserError; status_code(15) ; end
  class ProductionError     < PresserError; status_code(16) ; end
  class InvalidOption       < DslError                      ; end
  class HTTPError           < PresserError; status_code(17) ; end
  class RubyVersionMismatch < PresserError; status_code(18) ; end

  WINDOWS = RbConfig::CONFIG["host_os"] =~ %r!(msdos|mswin|djgpp|mingw)!
  FREEBSD = RbConfig::CONFIG["host_os"] =~ /bsd/
  NULL    = WINDOWS ? "NUL" : "/dev/null"

  # Internal errors, should be rescued
  class VersionConflict  < PresserError
    attr_reader :conflicts

    def initialize(conflicts, msg = nil)
      super(msg)
      @conflicts = conflicts
    end

    status_code(6)
  end

  class InvalidSpecSet < StandardError; end

  class << self
    attr_writer :ui, :press_path

    def ui
      @ui ||= UI.new
    end
  end

end