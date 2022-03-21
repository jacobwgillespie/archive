var cache = require('./cache')();
var moment = require('moment');
var jsdom = require('jsdom');
var querystring = require('querystring');

var crypto = require('crypto');

var cleanParagraph = function(text) {
  if (text && text.trim() !== '')
    return '<p>' + text.trim().replace(/<i>/g, '<em>').replace(/<\/i>/g, '</em>').replace(/<br><br>/g, '</p><p>').replace(/<a href="~\//g, '<a target="_blank" href="http://www.pluggedin.com/movies/intheaters/~/') + '</p>';
  else
    return '';
};

module.exports = {
  review: function(url, callback) {
    cache('pluggedin_review', crypto.createHash('md5').update(url).digest('hex'), callback, function(fetcher) {
      jsdom.env({
        html: url,
        scripts: [
          'http://code.jquery.com/jquery.js'
        ],
        done: function(errors, window) {
          var $ = window.$;
          var data = {};

          // URL
          data.url = url;

          // Title
          data.title = $('#article h1')[0];
          if (data.title) data.title = data.title.innerHTML.trim();

          // Year

          data.year = $('#creditBox dt:contains("In Theaters") + dd').text();
          if (data.year) {
            data.year = data.year.match(/\d{4}$/)[0].trim();
          } else {
            data.year = url.match(/\/videos\/(\d{4})\//)[1];
          }

          // Style
          data.style = window.document.body.innerHTML.replace(/\s/g, '').match(/<b><\/b>/) ? 'old' : 'new';

          // Review

          data.review = {};

          if (data.style === 'new') {
            data.review.introduction = cleanParagraph($('#article p')[0].innerHTML);
            data.review.positive_elements = cleanParagraph($('h3.positiveElements + p').html());
            data.review.spiritual_content = cleanParagraph($('h3.spiritualContent + p').html());
            data.review.sexual_content = cleanParagraph($('h3.sexualContent + p').html());
            data.review.violent_content = cleanParagraph($('h3.violentContent + p').html());
            data.review.crude_language = cleanParagraph($('h3.crudeLanguage + p').html());
            data.review.drug_content = cleanParagraph($('h3.drugContent + p').html());
            data.review.negative_elements = cleanParagraph($('h3.negativeElements + p').html());
            data.review.conclusion = cleanParagraph($('h3.conclusion + p').html());
          } else {
            var currentSection = 'introduction';

            $('#article p').each(function(id, el) {
              var $el = $(el);
              var thisSection = $el.children('b').text();
              $el.children('b').remove();
              var html = cleanParagraph($el.html());

              if (thisSection) {
                if (thisSection.match(/positive/i))
                  currentSection = 'positive_elements';
                else if (thisSection.match(/spiritual/i))
                  currentSection = 'spiritual_content';
                else if (thisSection.match(/sexual/i))
                  currentSection = 'sexual_content';
                else if (thisSection.match(/violent/i))
                  currentSection = 'violent_content';
                else if (thisSection.match(/conduct/i))
                  currentSection = 'violent_content';
                else if (thisSection.match(/violence/i))
                  currentSection = 'violent_content';
                else if (thisSection.match(/crude/i))
                  currentSection = 'crude_language';
                else if (thisSection.match(/drug/i))
                  currentSection = 'drug_content';
                else if (thisSection.match(/negative/i))
                  currentSection = 'negative_elements';
                else if (thisSection.match(/conclusion/i))
                  currentSection = 'conclusion';
                else if (thisSection.match(/summary/i))
                  currentSection = 'conclusion';
              }

              data.review[currentSection] = (data.review[currentSection] || '') + html;
              console.log('sec', thisSection);
          });
        }

        fetcher(data);
      }});
    });
  },
  search: function(movie, callback) {
    cache('pluggedin_search', movie.id, callback, function(fetcher) {
      var searchString = movie.title;
      if (movie.release_date) {
        searchString += ' (' + moment(movie.release_date).year() + ')';
      }

      var url = 'http://search.pluggedin.com/search?q=' + querystring.escape(searchString) + '&btnG=Search&filter=&ntqr=0&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&client=pluggedin_com&filter=&ud=1&oe=UTF-8&ie=UTF-8&site=pluggedin_com&getfields=*';
      console.log(url);
      jsdom.env({
        html: url,
        scripts: [
          'http://code.jquery.com/jquery.js'
        ],
        done: function(errors, window) {
          var $ = window.$;
          var url = $('U').html();
          if (url.match(/https?:\/\/(www.)?pluggedin.com\/(videos|movies)/)) {
            module.exports.review(url, function(data) {
              fetcher(data);
            });
          } else {
            fetcher(false);
          }
        }
      });
    });
  }
};