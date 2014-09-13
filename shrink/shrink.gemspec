# -*- encoding: utf-8 -*-
$:.push File.expand_path('../lib', __FILE__)
require 'shrink/version'

Gem::Specification.new do |s|
  s.name        = 'shrink'
  s.version     = Shrink::VERSION
  s.authors     = ['Jacob Gillespie']
  s.email       = 'me@jacobwg.com'
  s.homepage    = 'https://github.com/jacobwg/shrink'
  s.summary     = 'A simple command-line interface to the Google closure compiler'
  s.description = 'Shrink is a CLI for minifing assets - shrink currently supports Javascript through the Google Closure Compiler'

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  # s.add_development_dependency 'rspec'
  s.add_runtime_dependency 'closure-compiler'
  s.add_runtime_dependency 'trollop'
end