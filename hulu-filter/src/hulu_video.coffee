class HuluVideo
  constructor: ->
    @is_video = false
    @has_cid = false
    @has_subtitles = false
    @subs_loaded = false
    @subtitles = []
    @blocklist = []
    @events = {}
    @filter = new Filter
    @xml_decrypt_keys = [ [ "4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21", "WA7hap7AGUkevuth" ], [ "246DB3463FC56FDBAD60148057CB9055A647C13C02C64A5ED4A68F81AE991BF5", "vyf8PvpfXZPjc7B1" ], [ "8CE8829F908C2DFAB8B3407A551CB58EBC19B07F535651A37EBC30DEC33F76A2", "O3r9EAcyEeWlm5yV" ], [ "852AEA267B737642F4AE37F5ADDF7BD93921B65FE0209E47217987468602F337", "qZRiIfTjIGi3MuJA" ], [ "76A9FDA209D4C9DCDFDDD909623D1937F665D0270F4D3F5CA81AD2731996792F", "d9af949851afde8c" ], [ "1F0FF021B7A04B96B4AB84CCFD7480DFA7A972C120554A25970F49B6BADD2F4F", "tqo8cxuvpqc7irjw" ], [ "3484509D6B0B4816A6CFACB117A7F3C842268DF89FCC414F821B291B84B0CA71", "SUxSFjNUavzKIWSh" ], [ "B7F67F4B985240FAB70FF1911FCBB48170F2C86645C0491F9B45DACFC188113F", "uBFEvpZ00HobdcEo" ], [ "40A757F83B2348A7B5F7F41790FDFFA02F72FC8FFD844BA6B28FD5DFD8CFC82F", "NnemTiVU0UA5jVl0" ] ]
    @decrypt_keys = []
    if document.player
      @is_video = true

      for element in document.getElementsByTagName('meta')
        cid = element.getAttribute('content') if element.getAttribute('property') is 'og:image'

      if cid
        cid = cid.split('/')
        cid = cid[cid.length - 1].split('?')[0]
        @cid = unescape(cid)
        @has_cid = true
        @load_subtitles()

  bind: (event, callback) ->
    @events[event] ||= []
    @events[event].push(callback)
    this
  unbind: (event, callback) ->
    return unless event in @events
    @events[event].splice(@events[event].indexOf(callback), 1)
    this
  trigger: (event, args...) ->
    return unless @events[event]
    callback.apply(this, args) for callback in @events[event]
    this

  load_subtitles: ->
    return unless @has_cid
    self = this
    Util.getXML 'http://www.hulu.com/captions?content_id=' + @cid, (data) ->
      if data and data.transcripts and data.transcripts.en
        @has_subtitles = true
        @subs_url = data.transcripts.en
        Util.getXML @subs_url, (data) ->
          if data && data.SAMI && data.SAMI.BODY and data.SAMI.BODY.SYNC
            encrypted_subs = data.SAMI.BODY.SYNC
            self.get_keys encrypted_subs[0].content
            i = 0
            while i < encrypted_subs.length - 1
              encrypted_subs[i].end = encrypted_subs[i+1].start
              encrypted_subs[i].content = self.decode_subtitle(encrypted_subs[i].content)
              encrypted_subs[i].content ||= ''
              encrypted_subs[i].content = encrypted_subs[i].content.trim()
              self.subtitles.push encrypted_subs[i]
              i++
            self.trigger 'change:subtitles', self
            self.subs_loaded = true
            self.build_blocklist()
          else
            self.trigger 'no:subtitles'
      else
        self.trigger 'no:subtitles'

  build_blocklist: ->
    return unless @subs_loaded
    @blocklist = []
    for sub in @subtitles
      if @filter.profane sub.content
        @blocklist.push start: parseInt(sub.start), end: parseInt(sub.end)
    @trigger 'change:blocklist', @blocklist

  get_keys: (encrypted_smil) ->
    encrypted_data = Util.packHStar(encrypted_smil)
    for key in @xml_decrypt_keys
      smil = ""
      aes = new AES(Util.packHStar(key[0]))
      unaes = aes.decrypt(encrypted_data)
      unaes = Util.byteArrayToString(unaes)
      xorkey = key[1] + "\u0000"
      xorkey = xorkey.substr(0, 16)
      smil = ""
      i = 0
      while i < Math.ceil(encrypted_smil.length / 32)
        res = Util.stringXor(xorkey, unaes.substr(i * 16, 16))
        xorkey = encrypted_data.substr(i * 16, 16)
        smil = "" + smil + res
        i++
      test = /^<.+>.*<\/.+>/i
      if test.exec(smil)
        @decrypt_keys = [key[0], key[1]]
        @aes = new AES(Util.packHStar(key[0]))

  decode_subtitle: (encrypted_smil) ->
    return unless @aes
    encrypted_data = Util.packHStar(encrypted_smil)
    smil = ""
    unaes = @aes.decrypt(encrypted_data)
    unaes = Util.byteArrayToString(unaes)
    xorkey = @decrypt_keys[1] + "\u0000"
    xorkey = xorkey.substr(0, 16)
    i = 0

    while i < Math.ceil(encrypted_smil.length / 32)
      res = Util.stringXor(xorkey, unaes.substr(i * 16, 16))
      xorkey = encrypted_data.substr(i * 16, 16)
      smil = "" + smil + res
      i++
    test = /^<.+>.*<\/.+>/i
    smil || ''


#window.HuluVideo = HuluVideo
