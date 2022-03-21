#!/usr/bin/env ruby

require 'rubygems'
require 'pp'
require 'json'
require 'open-uri'
require 'mongoid'

if ARGV[0].nil?
  puts "Usage: travis.rb fb_access_key"
  exit
end

access = ARGV[0]

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
  begin
    return JSON.parse open(uri).read
  rescue
    debug "Got an error... retrying"
    return parse_json_uri(uri)
  end
end

def graph(object, limit=25)
  parse_json_uri "https://graph.facebook.com/#{object}?access_token=#{access}&limit=#{limit}"
end

puts "Welcome to the Travis Scraper"

page = graph('PunchTimeExplosion/feed', 10000)

while not page['data'].empty? or not page['paging'].nil?
  
  data = page['data']
  
  data.each do |post|
    graph_id = post['id']
    post = graph graph_id
    if Post.where(graph_id: graph_id).length == 0
      new_post = Post.new
      new_post.graph_id = graph_id
      new_post.message = post['message']
      new_post.data = post
      new_post.save
      debug "Saved post with message #{new_post.message} and id #{graph_id}"
    end
    
    comments = post['comments']
    
    if comments['count'] > 0
      comments = graph "#{graph_id}/comments", 10000
      comments = comments['data']
      comments.each do |comment|
        comment_graph_id = comment['id'].to_i
        if Comment.where(graph_id: comment_graph_id).length == 0
          new_comment = Comment.new
          new_comment.graph_id = comment_graph_id
          new_comment.from_name = comment['from']['name']
          new_comment.from_id = comment['from']['id'].to_i
          new_comment.message = comment['message']
          new_comment.posted_time = DateTime.parse comment['created_time']
          new_comment.data = comment
          new_comment.save
          debug "Saved comment from #{new_comment.from_name} with id #{comment_graph_id}"
        end
      end
    end
    
  end
  
  if not page['paging'].nil?
    next_uri = page['paging']['next']
    page = parse_json_uri next_uri
  end
  
end
