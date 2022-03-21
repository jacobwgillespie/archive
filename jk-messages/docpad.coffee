docpadConfig = {

  templateData:

    site:
      url: "http://messages.jacobandkathryn.com"

      title: "J&K Messages"

      styles: [
        '/vendor/toast.css'
        '/styles/style.css'
      ]

      scripts: [
        'https://cdn.firebase.com/v0/firebase.js'
        'https://cdn.firebase.com/v0/firebase-simple-login.js'
        '/vendor/vendor.js'
        '/scripts/app.js'
      ]

    getPreparedTitle: ->
      if @document.title
        "#{@document.title} | #{@site.title}"
      else
        @site.title

}

module.exports = docpadConfig
