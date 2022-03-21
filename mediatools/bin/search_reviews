#!/usr/bin/env ruby

require 'rubygems'
require 'nokogiri'
require 'open-uri'
require 'cgi'
require 'pp'


doc = Nokogiri::HTML(open('http://www.google.com/search?ie=UTF-8&q=site%3Awww.kids-in-mind.com+' + CGI::escape(ARGV[0])))
kim_uri = doc.css('h3.r a').first['href']

doc = Nokogiri::XML(open('http://search.pluggedin.com/search?q=' + CGI::escape(ARGV[0]) + '&btnG=Search&filter=&ntqr=0&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&client=pluggedin_com&filter=&ud=1&oe=UTF-8&ie=UTF-8&site=pluggedin_com&getfields=*'))
pi_uri = doc.css('U').first.content

#doc = Nokogiri::HTML(open(kim_uri))
#t = doc.css('p.t11normal')
#review_html = ''
#t.each { |e| review_html += e.content }

#puts review_html


doc = Nokogiri::HTML(open(kim_uri))
sex = doc.css('img').reject { |i| i['src'].match(/ratings\/s&n/).nil? }
violence = doc.css('img').reject { |i| i['src'].match(/ratings\/v&g/).nil? }
profanity = doc.css('img').reject { |i| i['src'].match(/ratings\/prof/).nil? }

sex = sex.first['src'].match(/images\/ratings\/s&n(\d+).jpg$/)[1]
violence = violence.first['src'].match(/images\/ratings\/v&g(\d+).jpg$/)[1]
profanity = profanity.first['src'].match(/images\/ratings\/prof(\d+).jpg$/)[1]




puts "The review for #{ARGV[0]} on PI is at #{pi_uri}"

puts "The review for #{ARGV[0]} on KIM is at #{kim_uri}"
puts "The KIM numbers are:"
puts "\t Sex - #{sex}"
puts "\t Violence - #{violence}"
puts "\t Language - #{profanity}"

