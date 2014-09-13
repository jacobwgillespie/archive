module Pressor
  # We're doing this because we might write tests that deal
  # with other versions of Pressor and we are unsure how to
  # handle this better.
  VERSION = "1.2.0.rc" unless defined?(::Pressor::VERSION)
end