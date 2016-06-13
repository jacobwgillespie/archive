# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "spree_cms/version"

Gem::Specification.new do |s|
  s.name        = "spree_cms"
  s.version     = SpreeCms::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Gunner Technology, Cody Swann"]
  s.email       = ["developers@gunnertech.com"]
  s.homepage    = ""
  s.summary     = %q{Adds a simple CMS to your Spree Store with Disqus commenting}
  s.description = %q{This gem will add simple Content Management System functionality like blog posts, pages and commenting to your spree store}

  s.rubyforge_project = "spree_cms"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]
  
  s.add_dependency('is_taggable', "~>0.1.0")
  s.add_dependency("RedCloth", "~>4.2.7")
  s.add_dependency("disqus", "~>1.0.4")
end
