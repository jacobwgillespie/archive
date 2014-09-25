#= require jquery
#= require jquery_ujs
#= require jquery-ui
#= require bootstrap
#= require jquery.raty
#= require spin

$ () ->

  opts =
    lines: 13
    length: 7
    width: 4
    radius: 10
    rotate: 0
    color: "#eee"
    speed: 1
    trail: 60
    shadow: false
    hwaccel: false
    className: "spinner"
    zIndex: 2e9
    top: "auto"
    left: "auto"

  target = document.getElementById("spinner")
  spinner = new Spinner(opts) #.spin(target)

  $(document).ajaxStart () ->
    spinner.spin(target)
  $(document).ajaxStop () ->
    spinner.stop()

  checks = []

  user_id = window.user_id
  role = window.user_role

  checks.push user_id
  checks.push role

  $.each checks, (idx, check) ->
    $('[class*="hide-unless-' + check + '"]').show()
    $('[class*="show-if-' + check + '"]').show()
    $('[class*="hide-if-' + check + '"]').hide()


  $win = $(window)
  $nav = $('.subnav')
  navTop = $('.subnav').length && $('.subnav').offset().top - 54 #40
  isFixed = 0

  # hack sad times - holdover until rewrite for 2.1
  $nav.on 'click', () ->
    if (!isFixed)
      setTimeout () ->
        $win.scrollTop($win.scrollTop() - 47)
      , 10
  processScroll = ->
    scrollTop = $win.scrollTop()
    if scrollTop >= navTop and not isFixed
      isFixed = 1
      $nav.addClass "subnav-fixed"
    else if scrollTop <= navTop and isFixed
      isFixed = 0
      $nav.removeClass "subnav-fixed"
  $win.on 'scroll', processScroll
  processScroll()

  $('#sortable-for-' + user_id).sortable
    update: (event, ui) ->
      $.ajax
        url: '/relations/' + $(ui.item).attr('id')
        type: 'POST'
        data:
          _method: 'PUT'
          relation:
            list_order_position: ui.item.index() #+ 1
        success: (data) ->
          console.log 'position saved'
      console.log event, ui
      window.ui = ui

  $('.review-toggle').on 'click', () ->
    $('#post-review').toggle()
    false

  $('.star-input').each (idx) ->
    $el = $(this)
    target = $($el.attr('data-target'))
    options = {}
    options.score = target.val()
    options.score = $el.attr('data-score') if $el.attr('data-score')
    options.number = 5 #10
    options.click = () ->
      target.val($el.raty('score'))
      $el.parents('form').submit() if $el.attr('data-submit')
    $el.raty options

  $('.changelog').on 'click', () ->
    $('#changelog').toggle()
    false

  $('[rel=datepicker]').datepicker
    dateFormat: 'yy-mm-dd'

  $('a[data-toggle="submit"]').on 'click', () ->
    $('form').submit()
  $('[rel=popover]').popover()

  $('[rel=stars]').each (idx) ->
    $(this).raty
      readOnly : true,
      score    : $(this).attr('data-rating')
      number   : 5 #10

  $('[rel=gamepopover]').each (idx) ->
    $el = $(this)
    popover_content = "<div class=\"rating\"></div>" + $el.attr('data-description')
    $el.popover
      title: $el.attr('data-name'),
      trigger: "manual",
      content: popover_content
    $el.on
      mouseenter: () ->
        $el.popover('show')
        $('.popover .rating').raty
          readOnly : true,
          score    : $el.attr('data-rating')
          number   : 5 #10
      mouseleave: () ->
        $el.popover('hide')