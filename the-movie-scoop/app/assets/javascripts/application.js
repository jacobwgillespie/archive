// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require toastr
//= require turbolinks
//= require angular
//= require lodash
//= require angular-resource
//= require restangular
//= require bootstrap-sprockets
//= require app
//= require movie
//= require pages

Turbolinks.enableProgressBar();
toastr.options.progressBar = true;
toastr.options.positionClass = 'toast-bottom-left';

var showAjaxIndicator = function() {
  $('.ajax-indicator').show();
};

var hideAjaxIndicator = function() {
  $('.ajax-indicator').hide();
};

$(document).delegate('[data-submit-form]', 'click', function(e) {
  e.preventDefault();
  var $el = $(this);
  $el.tooltip('destroy');
  $($el.attr('data-submit-form')).submit();
});

$(document).delegate('a[data-toggle="modal"]', 'click', function (e) {
  e.preventDefault();
});
$(document).delegate('#cast-crew .nav a', 'click', function (e) {
  e.preventDefault();
  $(this).tab('show');
});

$(document).delegate('form', 'ajax:send', function(event, jqXHR) {
  showAjaxIndicator();
});

$(document).delegate('form', 'ajax:complete', function(event, jqXHR) {
  hideAjaxIndicator();
});

$(document).delegate('ul.dropdown-menu a.list', 'click', function(e) {
  e.stopPropagation();
});

var initBootstrap = function() {
  $('[data-toggle="tooltip"]').tooltip({container: 'body', delay: { show: 100, hide: 100 }});
  $('[data-toggle="popover"]').popover({container: 'body', delay: { show: 100, hide: 100 }});
};

window.initBootstrap = initBootstrap;

$(document).on('page:load', function() {
  $('[ng-app]').each(function() {
    var module = $(this).attr('ng-app');
    angular.bootstrap(this, [module]);
  });
});

$(document).on("ready page:load", function() {
  hideAjaxIndicator();
  initBootstrap();

  $('[data-toggle="remote-load"]').each(function() {
    var $el = $(this);
    var src = $el.attr('data-src');
    $.ajax({
      url: src
    }).done(function(data) {
      $el.html(data);
      initBootstrap();
    });
  })
});
