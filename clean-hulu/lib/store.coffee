# store.js by Frank Kohlhepp
# Copyright (c) 2011 - 2012 Frank Kohlhepp
# https://github.com/frankkohlhepp/store-js
# License: MIT-license


has = (object, key) ->
  Object::hasOwnProperty.call object, key

objectGetLength = (object) ->
  count = 0
  for key of object
    count++  if has(object, key)
  count

arrayIndexOf = (array, item, from) ->
  length = array.length >>> 0
  i = (if (from < 0) then Math.max(0, length + from) else from or 0)

  while i < length
    return i  if array[i] is item
    i++
  -1

arrayContains = (array, item, from) ->
  arrayIndexOf(array, item, from) isnt -1

arrayInclude = (array, item) ->
  array.push item  unless arrayContains(array, item)
  array

Store = @Store = (name, defaults, watcherSpeed) ->
  @name = name
  @defaults = defaults or {}
  @watcherSpeed = watcherSpeed or 500
  @listeners = {}
  @applyDefaults()

Store.clear = ->
  localStorage.clear()

Store::applyDefaults = ->
  for key of @defaults
    @set key, @defaults[key]  if has(@defaults, key) and @get(key) is `undefined`
  this

Store::watcher = (force) ->
  clearTimeout @watcherTimer  if @watcherTimer
  if objectGetLength(@listeners) or force
    @newObject = @toObject()
    if @oldObject
      for key of @newObject
        @fireEvent key, @newObject[key]  if has(@newObject, key) and @newObject[key] isnt @oldObject[key]
      for key of @oldObject
        @fireEvent key, @newObject[key]  if has(@oldObject, key) and not has(@newObject, key)
    @oldObject = @newObject
    that = this
    @watcherTimer = setTimeout(->
      that.watcher()
    , @watcherSpeed)
  this

Store::get = (name) ->
  value = localStorage.getItem("store." + @name + "." + name)
  return `undefined`  if value is null
  try
    return JSON.parse(value)
  catch e
    return null

Store::set = (name, value) ->
  if value is `undefined`
    @remove name
  else
    value = null  if typeof value is "function"
    try
      value = JSON.stringify(value)
    catch e
      value = null
    localStorage.setItem "store." + @name + "." + name, value
  this

Store::remove = (name) ->
  localStorage.removeItem "store." + @name + "." + name
  @applyDefaults()

Store::reset = ->
  name = "store." + @name + "."
  i = (localStorage.length - 1)

  while i >= 0
    localStorage.removeItem localStorage.key(i)  if localStorage.key(i).substring(0, name.length) is name
    i--
  @applyDefaults()

Store::toObject = ->
  values = {}
  name = "store." + @name + "."
  i = (localStorage.length - 1)

  while i >= 0
    if localStorage.key(i).substring(0, name.length) is name
      key = localStorage.key(i).substring(name.length)
      value = @get(key)
      values[key] = value  if value isnt `undefined`
    i--
  values

Store::fromObject = (values, merge) ->
  @reset()  unless merge
  for key of values
    @set key, values[key]  if has(values, key)
  this

Store::addEvent = (selector, callback) ->
  @watcher true
  @listeners[selector] = []  unless @listeners[selector]
  arrayInclude @listeners[selector], callback
  this

Store::removeEvent = (selector, callback) ->
  i = (@listeners[selector].length - 1)

  while i >= 0
    @listeners[selector].splice i, 1  if @listeners[selector][i] is callback
    i--
  delete @listeners[selector]  unless @listeners[selector].length
  this

Store::fireEvent = (name, value) ->
  selectors = [ name, "*" ]
  i = 0

  while i < selectors.length
    selector = selectors[i]
    if @listeners[selector]
      j = 0

      while j < @listeners[selector].length
        @listeners[selector][j] value, name, @name
        j++
    i++
  this
