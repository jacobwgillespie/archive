Flash = new Object()
Flash.data = {}
Flash.transferFromCookies = ->
  data = JSON.parse(unescape($.cookie("flash")))
  data = {}  unless data
  Flash.data = data
  $.cookie "flash", null,
    path: "/"

Flash.writeDataTo = (name, element) ->
  element = $(element)
  content = ""
  if Flash.data[name]
    message = Flash.data[name].toString().replace(/\+/g, " ")
    element.html message
    element.show()

Flash.alert = (name, element) ->
  element = $(element)
  content = ""
  if Flash.data[name]
    message = Flash.data[name].toString().replace(/\+/g, " ")
    element.children("p").html message
    element.show()


window.Flash = Flash
###
Can = ($) ->
  my = {}
  data = null
  my.data = ->
    if data is null
      data = JSON.parse(unescape($.cookie("can")))
      data = {}  unless data
    data

  my.get = (permission, default_value) ->
    (if my.data()[permission] then my.data()[permission] else (if default_value isnt `undefined` then default_value else false))

  my.scan = ->
    $("[data-toggle=ability]").each ->
      if my.get($(this).attr("data-ability"))
        if $(this).attr("data-ability-inverse") is `undefined`
          $(this).show()
        else
          $(this).hide()
      else
        if $(this).attr("data-ability-inverse") is `undefined`
          $(this).hide()
        else
          $(this).show()

  my
(jQuery)
###