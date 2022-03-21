#!/usr/bin/env ruby
require 'rubygems'
require 'pp'
require 'json'
require 'open-uri'
require 'mongoid'

Mongoid.configure do |config|
  config.master = Mongo::Connection.new.db("travis")
end

class Post
  include Mongoid::Document
  field :graph_id, type: String
  
  field :message, type: String
  
  field :data, type: Hash
  index :graph_id
  has_many :comments
end

class Comment
  include Mongoid::Document
  field :graph_id, type: String
  
  field :from_name, type: String
  field :from_id, type: Integer
  field :message, type: String
  field :posted_time, type: DateTime
  
  field :data, type: Hash
  index :graph_id
  belongs_to :post
end

DEBUG = true

def debug(msg)
  puts "DEBUG: #{msg}" if DEBUG
end

def parse_json_uri(uri)
  debug "Reading #{uri}"
  JSON.parse open(uri).read
end

puts "Stats Info:"

while true
  puts "There have been #{Comment.all.length} comments total, #{Comment.where(from_id: 100000303818167).length} from Travis (#{"%.2f" % (Comment.where(from_id: 100000303818167).length.to_f / Comment.all.length.to_f * 100)}% of all comments from #{Post.all.length} posts)"
  sleep 1
end