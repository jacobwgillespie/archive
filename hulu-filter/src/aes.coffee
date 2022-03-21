keyExpansion = (key) ->
  kc = undefined
  i = undefined
  j = undefined
  r = undefined
  t = undefined
  rounds = undefined
  keySched = new Array(maxrk + 1)
  keylen = key.length
  k = new Array(maxkc)
  tk = new Array(maxkc)
  rconpointer = 0
  rounds = 14
  kc = 8
  i = 0
  while i < maxrk + 1
    keySched[i] = new Array(4)
    i++
  i = 0
  j = 0

  while j < keylen
    k[j] = key.charCodeAt(i) | (key.charCodeAt(i + 1) << 8) | (key.charCodeAt(i + 2) << 16) | (key.charCodeAt(i + 3) << 24)
    j++
    i += 4
  j = kc - 1
  while j >= 0
    tk[j] = k[j]
    j--
  r = 0
  t = 0
  j = 0
  while (j < kc) and (r < rounds + 1)
    while (j < kc) and (t < 4)
      keySched[r][t] = tk[j]
      j++
      t++
    if t is 4
      r++
      t = 0
  while r < rounds + 1
    temp = tk[kc - 1]
    tk[0] ^= AESData.S[Util.B1(temp)] | (AESData.S[Util.B2(temp)] << 8) | (AESData.S[Util.B3(temp)] << 16) | (AESData.S[Util.B0(temp)] << 24)
    tk[0] ^= AESData.Rcon[rconpointer++]
    unless kc is 8
      j = 1
      while j < kc
        tk[j] ^= tk[j - 1]
        j++
    else
      j = 1
      while j < kc / 2
        tk[j] ^= tk[j - 1]
        j++
      temp = tk[kc / 2 - 1]
      tk[kc / 2] ^= AESData.S[Util.B0(temp)] | (AESData.S[Util.B1(temp)] << 8) | (AESData.S[Util.B2(temp)] << 16) | (AESData.S[Util.B3(temp)] << 24)
      j = kc / 2 + 1
      while j < kc
        tk[j] ^= tk[j - 1]
        j++
    j = 0
    while (j < kc) and (r < rounds + 1)
      while (j < kc) and (t < 4)
        keySched[r][t] = tk[j]
        j++
        t++
      if t is 4
        r++
        t = 0
  @rounds = rounds
  @rk = keySched
  this
maxkc = 8
maxrk = 14



prepare_decryption = (key) ->
  r = undefined
  w = undefined
  rk2 = new Array(maxrk + 1)
  ctx = new keyExpansion(key)
  rounds = ctx.rounds
  r = 0
  while r < maxrk + 1
    rk2[r] = new Array(4)
    rk2[r][0] = ctx.rk[r][0]
    rk2[r][1] = ctx.rk[r][1]
    rk2[r][2] = ctx.rk[r][2]
    rk2[r][3] = ctx.rk[r][3]
    r++
  r = 1
  while r < rounds
    w = rk2[r][0]
    rk2[r][0] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)]
    w = rk2[r][1]
    rk2[r][1] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)]
    w = rk2[r][2]
    rk2[r][2] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)]
    w = rk2[r][3]
    rk2[r][3] = AESData.U1[Util.B0(w)] ^ AESData.U2[Util.B1(w)] ^ AESData.U3[Util.B2(w)] ^ AESData.U4[Util.B3(w)]
    r++
  @rk = rk2
  @rounds = rounds
  this

AESdecrypt = (block, ctx) ->
  r = undefined
  t0 = undefined
  t1 = undefined
  t2 = undefined
  t3 = undefined
  rounds = ctx.rounds
  b = Util.packBytes(block)
  r = rounds
  while r > 1
    t0 = b[0] ^ ctx.rk[r][0]
    t1 = b[1] ^ ctx.rk[r][1]
    t2 = b[2] ^ ctx.rk[r][2]
    t3 = b[3] ^ ctx.rk[r][3]
    b[0] = AESData.T5[Util.B0(t0)] ^ AESData.T6[Util.B1(t3)] ^ AESData.T7[Util.B2(t2)] ^ AESData.T8[Util.B3(t1)]
    b[1] = AESData.T5[Util.B0(t1)] ^ AESData.T6[Util.B1(t0)] ^ AESData.T7[Util.B2(t3)] ^ AESData.T8[Util.B3(t2)]
    b[2] = AESData.T5[Util.B0(t2)] ^ AESData.T6[Util.B1(t1)] ^ AESData.T7[Util.B2(t0)] ^ AESData.T8[Util.B3(t3)]
    b[3] = AESData.T5[Util.B0(t3)] ^ AESData.T6[Util.B1(t2)] ^ AESData.T7[Util.B2(t1)] ^ AESData.T8[Util.B3(t0)]
    r--
  t0 = b[0] ^ ctx.rk[1][0]
  t1 = b[1] ^ ctx.rk[1][1]
  t2 = b[2] ^ ctx.rk[1][2]
  t3 = b[3] ^ ctx.rk[1][3]
  b[0] = AESData.S5[Util.B0(t0)] | (AESData.S5[Util.B1(t3)] << 8) | (AESData.S5[Util.B2(t2)] << 16) | (AESData.S5[Util.B3(t1)] << 24)
  b[1] = AESData.S5[Util.B0(t1)] | (AESData.S5[Util.B1(t0)] << 8) | (AESData.S5[Util.B2(t3)] << 16) | (AESData.S5[Util.B3(t2)] << 24)
  b[2] = AESData.S5[Util.B0(t2)] | (AESData.S5[Util.B1(t1)] << 8) | (AESData.S5[Util.B2(t0)] << 16) | (AESData.S5[Util.B3(t3)] << 24)
  b[3] = AESData.S5[Util.B0(t3)] | (AESData.S5[Util.B1(t2)] << 8) | (AESData.S5[Util.B2(t1)] << 16) | (AESData.S5[Util.B3(t0)] << 24)
  b[0] ^= ctx.rk[0][0]
  b[1] ^= ctx.rk[0][1]
  b[2] ^= ctx.rk[0][2]
  b[3] ^= ctx.rk[0][3]
  Util.unpackBytes b

class AES
  constructor: (@key) ->
    @expandedKey = new prepare_decryption(key)

  decrypt: (ciphertext) ->
    blockSizeInBits = 128
    bpb = blockSizeInBits / 8
    pt = []

    if typeof ciphertext is "string"
      ciphertext = ciphertext.split("")
      i = 0
      while i < ciphertext.length
        ciphertext[i] = ciphertext[i].charCodeAt(0) & 0xFF
        i++

    block = (ciphertext.length / bpb) - 1
    while block > 0
      aBlock = AESdecrypt(ciphertext.slice(block * bpb, (block + 1) * bpb), @expandedKey)
      pt = aBlock.concat(pt)
      block--
    pt = AESdecrypt(ciphertext.slice(0, bpb), @expandedKey).concat(pt)
    pt

window.AES = AES