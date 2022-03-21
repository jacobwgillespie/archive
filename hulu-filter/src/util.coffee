class Util

  @byteArrayToString: (array) ->
    result = ""
    i = 0

    while i < array.length
      result += String.fromCharCode(array[i])
      i++
    result
  @stringXor: (str1, str2) ->
    string = ""
    i = 0

    while i < str1.length
      string += String.fromCharCode(str1.charCodeAt(i) ^ str2.charCodeAt(i))
      i++
    string

  @B0: (x) ->
    x & 255
  @B1: (x) ->
    (x >> 8) & 255
  @B2: (x) ->
    (x >> 16) & 255
  @B3: (x) ->
    (x >> 24) & 255
  @packBytes: (octets) ->
    i = undefined
    j = undefined
    len = octets.length
    b = new Array(len / 4)
    return  if not octets or len % 4
    i = 0
    j = 0

    while j < len
      b[i++] = octets[j] | (octets[j + 1] << 8) | (octets[j + 2] << 16) | (octets[j + 3] << 24)
      j += 4
    b
  @unpackBytes: (packed) ->
    j = undefined
    i = 0
    l = packed.length
    r = new Array(l * 4)
    j = 0
    while j < l
      r[i++] = @B0(packed[j])
      r[i++] = @B1(packed[j])
      r[i++] = @B2(packed[j])
      r[i++] = @B3(packed[j])
      j++
    r
  @packHStar: (argument) ->
    result = ""
    i = 0

    while i < argument.length
      word = argument[i]
      if ((i + 1) >= argument.length) or typeof (argument[i + 1]) is "undefined"
        word += "0"
      else
        word += argument[i + 1]
      result += String.fromCharCode(parseInt(word, 16))
      i += 2
    result

  @getXML: (url, callback) ->
    yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + url + '"') + '&format=json&callback=?'
    @ajax yql, (data) ->
      callback(data.query.results) if data.query

  @getJSON: (url, callback) ->
    yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + url + '"') + '&format=json&callback=?'
    @ajax yql, (data) ->
      callback(data.query.results) if data.query

  @ajax: (url, callback) ->
    ajax = new jXHR
    ajax.onreadystatechange = (data) ->
      callback(data) if ajax.readyState is 4
    ajax.open('GET', url)
    ajax.send()

window.Util = Util