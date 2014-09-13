require 'closure-compiler'

module Shrink
  class Compressor

    def compress(files)
      compress_js(files)
    end

    private

    def compress_js(files)
      js_compressor.compile(files.map do |file|
        File.read(file)
      end.join("\n"))
    end

    def js_compressor
      @js_compressor ||= Closure::Compiler.new
    end

  end
end