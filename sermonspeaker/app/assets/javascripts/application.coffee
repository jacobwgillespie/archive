#= require jquery
#= require jquery-ui
#= require jquery_ujs


#= require mediaelement_rails

#= require plupload
#= require plupload.settings
#= require jquery.plupload.queue
#= require plupload.flash
#= require plupload.silverlight
#= require plupload.html4
#= require plupload.html5

#= require jquery.purr
#= require best_in_place

#= require jquery.cookie
#= require flash-alerts
#= require jquery.validate

#= require bootstrap
#= require bootstrap-docs

#= require pjax


$(document).ready ->
  $(".best_in_place").best_in_place()
  $("audio").mediaelementplayer audioWidth: 360
  Flash.transferFromCookies()
  Flash.alert "error", $("#error")
  Flash.alert "notice", $("#notice")