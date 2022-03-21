# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$(document).on 'ready page:load', ->
  height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  window.scrollTo(0, 3/7 * height)

  $('.movie-carousel').carousel
    interval: false




Pinterest =
  load: ->
    delete window["PIN_"+~~((new Date).getTime()/864e5)]
    $.getScript("//assets.pinterest.com/js/pinit.js")

$ ->
  Pinterest.load()

# if you're using jquery.turbolinks, you don't need this binding
$(document).on 'page:load', ->
  Pinterest.load()

twttr_events_bound = false

$ ->
  loadTwitterSDK()
  bindTwitterEventHandlers() unless twttr_events_bound

bindTwitterEventHandlers = ->
  $(document).on 'page:load', renderTweetButtons
  twttr_events_bound = true

renderTweetButtons = ->
  $('.twitter-share-button').each ->
    button = $(this)
    button.attr('data-url', document.location.href) unless button.data('url')?
    button.attr('data-text', document.title) unless button.data('text')?
  twttr.widgets.load()

loadTwitterSDK = ->
  $.getScript("//platform.twitter.com/widgets.js")

###
<div id="fb-root"></div>



$ ->
  loadFacebookSDK()
  bindFacebookEvents() unless window.fbEventsBound

bindFacebookEvents = ->
  $(document)
    .on('page:fetch', saveFacebookRoot)
    .on('page:change', restoreFacebookRoot)
    .on('page:load', ->
      FB?.XFBML.parse()
    )
  @fbEventsBound = true

saveFacebookRoot = ->
  if $('#fb-root').length
    @fbRoot = $('#fb-root').detach()

restoreFacebookRoot = ->
  if @fbRoot?
    if $('#fb-root').length
      $('#fb-root').replaceWith @fbRoot
    else
      $('body').append @fbRoot

loadFacebookSDK = ->
  window.fbAsyncInit = initializeFacebookSDK
  $.getScript("//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=827725217255711")

initializeFacebookSDK = ->
  FB.init
    appId  : '827725217255711'
    status : true
    cookie : true
    xfbml  : true
###
