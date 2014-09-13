
module Presser
  class Dsl

    def self.evaluate(pressfile)
      builder = new
      builder.eval_pressfile(pressfile)
      builder
    end

    def initialize
      @wordpress = ''
      @plugins = []
    end

    def eval_pressfile(pressfile)
      instance_eval(File.open(pressfile, "rb") { |f| f.read })
    rescue SyntaxError => e
      bt = e.message.split("\n")[1..-1]
      raise PressfileError, ["Pressfile syntax error:", *bt].join("\n")
    end

    def wordpress(version)
      @wordpress = version
    end

    def plugin(plugin)
      @plugins << plugin
    end

    def to_s
      @plugins.to_s
    end

  end
end