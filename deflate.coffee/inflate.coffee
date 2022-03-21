(->
  zip_WSIZE = 32768
  zip_STORED_BLOCK = 0
  zip_STATIC_TREES = 1
  zip_DYN_TREES = 2
  zip_lbits = 9
  zip_dbits = 6
  zip_INBUFSIZ = 32768
  zip_INBUF_EXTRA = 64
  zip_slide = undefined
  zip_wp = undefined
  zip_fixed_tl = null
  zip_fixed_td = undefined
  zip_fixed_bl = undefined
  fixed_bd = undefined
  zip_bit_buf = undefined
  zip_bit_len = undefined
  zip_method = undefined
  zip_eof = undefined
  zip_copy_leng = undefined
  zip_copy_dist = undefined
  zip_tl = undefined
  zip_td = undefined
  zip_bl = undefined
  zip_bd = undefined
  zip_inflate_data = undefined
  zip_inflate_pos = undefined
  zip_MASK_BITS = new Array(0x0000, 0x0001, 0x0003, 0x0007, 0x000f, 0x001f, 0x003f, 0x007f, 0x00ff, 0x01ff, 0x03ff, 0x07ff, 0x0fff, 0x1fff, 0x3fff, 0x7fff, 0xffff)
  zip_cplens = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0)
  zip_cplext = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99)
  zip_cpdist = new Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577)
  zip_cpdext = new Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13)
  zip_border = new Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15)
  zip_HuftList = ->
    @next = null
    @list = null

  zip_HuftNode = ->
    @e = 0
    @b = 0
    @n = 0
    @t = null

  zip_HuftBuild = (b, n, s, d, e, mm) ->
    @BMAX = 16
    @N_MAX = 288
    @status = 0
    @root = null
    @m = 0
    a = undefined
    c = new Array(@BMAX + 1)
    el = undefined
    f = undefined
    g = undefined
    h = undefined
    i = undefined
    j = undefined
    k = undefined
    lx = new Array(@BMAX + 1)
    p = undefined
    pidx = undefined
    q = undefined
    r = new zip_HuftNode()
    u = new Array(@BMAX)
    v = new Array(@N_MAX)
    w = undefined
    x = new Array(@BMAX + 1)
    xp = undefined
    y = undefined
    z = undefined
    o = undefined
    tail = undefined
    tail = @root = null
    i = 0
    while i < c.length
      c[i] = 0
      i++
    i = 0
    while i < lx.length
      lx[i] = 0
      i++
    i = 0
    while i < u.length
      u[i] = null
      i++
    i = 0
    while i < v.length
      v[i] = 0
      i++
    i = 0
    while i < x.length
      x[i] = 0
      i++
    el = (if n > 256 then b[256] else @BMAX)
    p = b
    pidx = 0
    i = n
    loop
      c[p[pidx]]++
      pidx++
      break unless --i > 0
    if c[0] is n
      @root = null
      @m = 0
      @status = 0
      return
    j = 1
    while j <= @BMAX
      break  unless c[j] is 0
      j++
    k = j
    mm = j  if mm < j
    i = @BMAX
    while i isnt 0
      break  unless c[i] is 0
      i--
    g = i
    mm = i  if mm > i
    y = 1 << j
    while j < i
      if (y -= c[j]) < 0
        @status = 2
        @m = mm
        return
      j++
      y <<= 1
    if (y -= c[i]) < 0
      @status = 2
      @m = mm
      return
    c[i] += y
    x[1] = j = 0
    p = c
    pidx = 1
    xp = 2
    x[xp++] = (j += p[pidx++])  while --i > 0
    p = b
    pidx = 0
    i = 0
    loop
      v[x[j]++] = i  unless (j = p[pidx++]) is 0
      break unless ++i < n
    n = x[g]
    x[0] = i = 0
    p = v
    pidx = 0
    h = -1
    w = lx[0] = 0
    q = null
    z = 0
    while k <= g
      a = c[k]
      while a-- > 0
        while k > w + lx[1 + h]
          w += lx[1 + h]
          h++
          z = (if (z = g - w) > mm then mm else z)
          if (f = 1 << (j = k - w)) > a + 1
            f -= a + 1
            xp = k
            while ++j < z
              break  if (f <<= 1) <= c[++xp]
              f -= c[xp]
          j = el - w  if w + j > el and w < el
          z = 1 << j
          lx[1 + h] = j
          q = new Array(z)
          o = 0
          while o < z
            q[o] = new zip_HuftNode()
            o++
          unless tail?
            tail = @root = new zip_HuftList()
          else
            tail = tail.next = new zip_HuftList()
          tail.next = null
          tail.list = q
          u[h] = q
          if h > 0
            x[h] = i
            r.b = lx[h]
            r.e = 16 + j
            r.t = q
            j = (i & ((1 << w) - 1)) >> (w - lx[h])
            u[h - 1][j].e = r.e
            u[h - 1][j].b = r.b
            u[h - 1][j].n = r.n
            u[h - 1][j].t = r.t
        r.b = k - w
        if pidx >= n
          r.e = 99
        else if p[pidx] < s
          r.e = (if p[pidx] < 256 then 16 else 15)
          r.n = p[pidx++]
        else
          r.e = e[p[pidx] - s]
          r.n = d[p[pidx++] - s]
        f = 1 << (k - w)
        j = i >> w
        while j < z
          q[j].e = r.e
          q[j].b = r.b
          q[j].n = r.n
          q[j].t = r.t
          j += f
        j = 1 << (k - 1)
        while (i & j) isnt 0
          i ^= j
          j >>= 1
        i ^= j
        until (i & ((1 << w) - 1)) is x[h]
          w -= lx[h]
          h--
      k++
    @m = lx[1]
    @status = (if (y isnt 0 and g isnt 1) then 1 else 0)

  zip_GET_BYTE = ->
    return -1  if zip_inflate_data.length is zip_inflate_pos
    zip_inflate_data.charCodeAt(zip_inflate_pos++) & 0xff

  zip_NEEDBITS = (n) ->
    while zip_bit_len < n
      zip_bit_buf |= zip_GET_BYTE() << zip_bit_len
      zip_bit_len += 8

  zip_GETBITS = (n) ->
    zip_bit_buf & zip_MASK_BITS[n]

  zip_DUMPBITS = (n) ->
    zip_bit_buf >>= n
    zip_bit_len -= n

  zip_inflate_codes = (buff, off_, size) ->
    e = undefined
    t = undefined
    n = undefined
    return 0  if size is 0
    n = 0
    loop
      zip_NEEDBITS zip_bl
      t = zip_tl.list[zip_GETBITS(zip_bl)]
      e = t.e
      while e > 16
        return -1  if e is 99
        zip_DUMPBITS t.b
        e -= 16
        zip_NEEDBITS e
        t = t.t[zip_GETBITS(e)]
        e = t.e
      zip_DUMPBITS t.b
      if e is 16
        zip_wp &= zip_WSIZE - 1
        buff[off_ + n++] = zip_slide[zip_wp++] = t.n
        return size  if n is size
        continue
      break  if e is 15
      zip_NEEDBITS e
      zip_copy_leng = t.n + zip_GETBITS(e)
      zip_DUMPBITS e
      zip_NEEDBITS zip_bd
      t = zip_td.list[zip_GETBITS(zip_bd)]
      e = t.e
      while e > 16
        return -1  if e is 99
        zip_DUMPBITS t.b
        e -= 16
        zip_NEEDBITS e
        t = t.t[zip_GETBITS(e)]
        e = t.e
      zip_DUMPBITS t.b
      zip_NEEDBITS e
      zip_copy_dist = zip_wp - t.n - zip_GETBITS(e)
      zip_DUMPBITS e
      while zip_copy_leng > 0 and n < size
        zip_copy_leng--
        zip_copy_dist &= zip_WSIZE - 1
        zip_wp &= zip_WSIZE - 1
        buff[off_ + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++]
      return size  if n is size
    zip_method = -1
    n

  zip_inflate_stored = (buff, off_, size) ->
    n = undefined
    n = zip_bit_len & 7
    zip_DUMPBITS n
    zip_NEEDBITS 16
    n = zip_GETBITS(16)
    zip_DUMPBITS 16
    zip_NEEDBITS 16
    return -1  unless n is ((~zip_bit_buf) & 0xffff)
    zip_DUMPBITS 16
    zip_copy_leng = n
    n = 0
    while zip_copy_leng > 0 and n < size
      zip_copy_leng--
      zip_wp &= zip_WSIZE - 1
      zip_NEEDBITS 8
      buff[off_ + n++] = zip_slide[zip_wp++] = zip_GETBITS(8)
      zip_DUMPBITS 8
    zip_method = -1  if zip_copy_leng is 0
    n

  zip_inflate_fixed = (buff, off_, size) ->
    unless zip_fixed_tl?
      i = undefined
      l = new Array(288)
      h = undefined
      i = 0
      while i < 144
        l[i] = 8
        i++
      while i < 256
        l[i] = 9
        i++
      while i < 280
        l[i] = 7
        i++
      while i < 288
        l[i] = 8
        i++
      zip_fixed_bl = 7
      h = new zip_HuftBuild(l, 288, 257, zip_cplens, zip_cplext, zip_fixed_bl)
      unless h.status is 0
        alert "HufBuild error: " + h.status
        return -1
      zip_fixed_tl = h.root
      zip_fixed_bl = h.m
      i = 0
      while i < 30
        l[i] = 5
        i++
      zip_fixed_bd = 5
      h = new zip_HuftBuild(l, 30, 0, zip_cpdist, zip_cpdext, zip_fixed_bd)
      if h.status > 1
        zip_fixed_tl = null
        alert "HufBuild error: " + h.status
        return -1
      zip_fixed_td = h.root
      zip_fixed_bd = h.m
    zip_tl = zip_fixed_tl
    zip_td = zip_fixed_td
    zip_bl = zip_fixed_bl
    zip_bd = zip_fixed_bd
    zip_inflate_codes buff, off_, size

  zip_inflate_dynamic = (buff, off_, size) ->
    i = undefined
    j = undefined
    l = undefined
    n = undefined
    t = undefined
    nb = undefined
    nl = undefined
    nd = undefined
    ll = new Array(286 + 30)
    h = undefined
    i = 0
    while i < ll.length
      ll[i] = 0
      i++
    zip_NEEDBITS 5
    nl = 257 + zip_GETBITS(5)
    zip_DUMPBITS 5
    zip_NEEDBITS 5
    nd = 1 + zip_GETBITS(5)
    zip_DUMPBITS 5
    zip_NEEDBITS 4
    nb = 4 + zip_GETBITS(4)
    zip_DUMPBITS 4
    return -1  if nl > 286 or nd > 30
    j = 0
    while j < nb
      zip_NEEDBITS 3
      ll[zip_border[j]] = zip_GETBITS(3)
      zip_DUMPBITS 3
      j++
    while j < 19
      ll[zip_border[j]] = 0
      j++
    zip_bl = 7
    h = new zip_HuftBuild(ll, 19, 19, null, null, zip_bl)
    return -1  unless h.status is 0
    zip_tl = h.root
    zip_bl = h.m
    n = nl + nd
    i = l = 0
    while i < n
      zip_NEEDBITS zip_bl
      t = zip_tl.list[zip_GETBITS(zip_bl)]
      j = t.b
      zip_DUMPBITS j
      j = t.n
      if j < 16
        ll[i++] = l = j
      else if j is 16
        zip_NEEDBITS 2
        j = 3 + zip_GETBITS(2)
        zip_DUMPBITS 2
        return -1  if i + j > n
        ll[i++] = l  while j-- > 0
      else if j is 17
        zip_NEEDBITS 3
        j = 3 + zip_GETBITS(3)
        zip_DUMPBITS 3
        return -1  if i + j > n
        ll[i++] = 0  while j-- > 0
        l = 0
      else
        zip_NEEDBITS 7
        j = 11 + zip_GETBITS(7)
        zip_DUMPBITS 7
        return -1  if i + j > n
        ll[i++] = 0  while j-- > 0
        l = 0
    zip_bl = zip_lbits
    h = new zip_HuftBuild(ll, nl, 257, zip_cplens, zip_cplext, zip_bl)
    h.status = 1  if zip_bl is 0
    unless h.status is 0
      # if h.status is 1, incomplete literal tree
      return -1
    zip_tl = h.root
    zip_bl = h.m
    i = 0
    while i < nd
      ll[i] = ll[i + nl]
      i++
    zip_bd = zip_dbits
    h = new zip_HuftBuild(ll, nd, 0, zip_cpdist, zip_cpdext, zip_bd)
    zip_td = h.root
    zip_bd = h.m
    return -1  if zip_bd is 0 and nl > 257
    # if h.status is 1 incomplete distance tree
    return -1  unless h.status is 0
    zip_inflate_codes buff, off_, size

  zip_inflate_start = ->
    i = undefined
    zip_slide = new Array(2 * zip_WSIZE)  unless zip_slide?
    zip_wp = 0
    zip_bit_buf = 0
    zip_bit_len = 0
    zip_method = -1
    zip_eof = false
    zip_copy_leng = zip_copy_dist = 0
    zip_tl = null

  zip_inflate_internal = (buff, off_, size) ->
    n = undefined
    i = undefined
    n = 0
    while n < size
      return n  if zip_eof and zip_method is -1
      if zip_copy_leng > 0
        unless zip_method is zip_STORED_BLOCK
          while zip_copy_leng > 0 and n < size
            zip_copy_leng--
            zip_copy_dist &= zip_WSIZE - 1
            zip_wp &= zip_WSIZE - 1
            buff[off_ + n++] = zip_slide[zip_wp++] = zip_slide[zip_copy_dist++]
        else
          while zip_copy_leng > 0 and n < size
            zip_copy_leng--
            zip_wp &= zip_WSIZE - 1
            zip_NEEDBITS 8
            buff[off_ + n++] = zip_slide[zip_wp++] = zip_GETBITS(8)
            zip_DUMPBITS 8
          zip_method = -1  if zip_copy_leng is 0
        return n  if n is size
      if zip_method is -1
        break  if zip_eof
        zip_NEEDBITS 1
        zip_eof = true  unless zip_GETBITS(1) is 0
        zip_DUMPBITS 1
        zip_NEEDBITS 2
        zip_method = zip_GETBITS(2)
        zip_DUMPBITS 2
        zip_tl = null
        zip_copy_leng = 0
      switch zip_method
        when 0
          i = zip_inflate_stored(buff, off_ + n, size - n)
        when 1
          if zip_tl?
            i = zip_inflate_codes(buff, off_ + n, size - n)
          else
            i = zip_inflate_fixed(buff, off_ + n, size - n)
        when 2
          if zip_tl?
            i = zip_inflate_codes(buff, off_ + n, size - n)
          else
            i = zip_inflate_dynamic(buff, off_ + n, size - n)
        else
          i = -1
      if i is -1
        return 0  if zip_eof
        return -1
      n += i
    n

  zip_inflate = (str) ->
    i = undefined
    j = undefined
    zip_inflate_start()
    zip_inflate_data = str
    zip_inflate_pos = 0
    buff = new Array(1024)
    aout = []
    while (i = zip_inflate_internal(buff, 0, buff.length)) > 0
      cbuf = new Array(i)
      j = 0
      while j < i
        cbuf[j] = String.fromCharCode(buff[j])
        j++
      aout[aout.length] = cbuf.join("")
    zip_inflate_data = null
    aout.join ""

  window.RawDeflate = {}  unless window.RawDeflate
  window.RawDeflate.inflate = zip_inflate
)()