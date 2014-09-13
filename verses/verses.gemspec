# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "verses/version"

Gem::Specification.new do |s|
  s.name        = "verses"
  s.version     = Verses::VERSION
  s.authors     = ["Jacob Gillespie"]
  s.email       = ["me@jacobwg.com"]
  s.homepage    = "https://github.com/jacobwg/verses"
  s.summary     = %q{Parses Bible Verse References}
  s.description = %q{Bible verse reference parser}

  #s.rubyforge_project = "verses"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  # specify any dependencies here; for example:
  s.add_development_dependency "rspec"
  # s.add_runtime_dependency "rest-client"
end
