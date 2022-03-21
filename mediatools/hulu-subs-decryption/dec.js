/*
 * AES Cipher function: encrypt 'input' with Rijndael algorithm
 *
 *   takes   byte-array 'input' (16 bytes)
 *           2D byte-array key schedule 'w' (Nr+1 x Nb bytes)
 *
 *   applies Nr rounds (10/12/14) using key schedule w for 'add round key' stage
 *
 *   returns byte-array encrypted value (16 bytes)
 */

AES = {

    /** Sbox is pre-computed multiplicative inverse in GF(2^8) used in SubBytes and KeyExpansion [Â§5.1.1] */
    Sbox : [
        0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
        0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
        0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
        0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
        0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
        0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
        0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
        0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
        0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
        0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
        0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
        0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
        0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
        0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
        0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
        0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16
    ],

    /** Rcon is Round Constant used for the Key Expansion [1st col is 2^(r-1) in GF(2^8)] [Â§5.2] */
    Rcon : [
        [0x00, 0x00, 0x00, 0x00],
        [0x01, 0x00, 0x00, 0x00],
        [0x02, 0x00, 0x00, 0x00],
        [0x04, 0x00, 0x00, 0x00],
        [0x08, 0x00, 0x00, 0x00],
        [0x10, 0x00, 0x00, 0x00],
        [0x20, 0x00, 0x00, 0x00],
        [0x40, 0x00, 0x00, 0x00],
        [0x80, 0x00, 0x00, 0x00],
        [0x1b, 0x00, 0x00, 0x00],
        [0x36, 0x00, 0x00, 0x00]
    ],

    /** main Cipher function [Â§5.1] */
    Cipher : function(input, w) {
        var Nb = 4;               // block size (in words): no of columns in state (fixed at 4 for AES)
        var Nr = w.length/Nb - 1; // no of rounds: 10/12/14 for 128/192/256-bit keys

        var state = [[],[],[],[]];  // initialise 4xNb byte-array 'state' with input [Â§3.4]
        for (var i=0; i<4*Nb; i++) state[i%4][Math.floor(i/4)] = input[i];

        state = this.AddRoundKey(state, w, 0, Nb);

        for (var round=1; round<Nr; round++) {
            state = this.SubBytes(state, Nb);
            state = this.ShiftRows(state, Nb);
            state = this.MixColumns(state, Nb);
            state = this.AddRoundKey(state, w, round, Nb);
        }

        state = this.SubBytes(state, Nb);
        state = this.ShiftRows(state, Nb);
        state = this.AddRoundKey(state, w, Nr, Nb);

        var output = new Array(4*Nb);  // convert state to 1-d array before returning [Â§3.4]
        for (var i=0; i<4*Nb; i++) output[i] = state[i%4][Math.floor(i/4)];
        return output;
    },

    /** apply SBox to state S [Â§5.1.1] */
    SubBytes : function(s, Nb) {
        for (var r=0; r<4; r++) {
            for (var c=0; c<Nb; c++) s[r][c] = this.Sbox[s[r][c]];
        }
        return s;
    },

    /** shift row r of state S left by r bytes [Â§5.1.2] */
    ShiftRows : function(s, Nb) {
        var t = new Array(4);
        for (var r=1; r<4; r++) {
            for (var c=0; c<4; c++) t[c] = s[r][(c+r)%Nb];  // shift into temp copy
            for (var c=0; c<4; c++) s[r][c] = t[c];         // and copy back
        }          // note that this will work for Nb=4,5,6, but not 7,8 (always 4 for AES):
        return s;  // see fp.gladman.plus.com/cryptography_technology/rijndael/aes.spec.311.pdf
    },

    /** combine bytes of each col of state S [Â§5.1.3] */
    MixColumns : function(s, Nb) {
        for (var c=0; c<4; c++) {
            var a = new Array(4);  // 'a' is a copy of the current column from 's'
            var b = new Array(4);  // 'b' is aâ€¢{02} in GF(2^8)
            for (var i=0; i<4; i++) {
                a[i] = s[i][c];
                b[i] = s[i][c]&0x80 ? s[i][c]<<1 ^ 0x011b : s[i][c]<<1;
            }
            // a[n] ^ b[n] is aâ€¢{03} in GF(2^8)
            s[0][c] = b[0] ^ a[1] ^ b[1] ^ a[2] ^ a[3]; // 2*a0 + 3*a1 + a2 + a3
            s[1][c] = a[0] ^ b[1] ^ a[2] ^ b[2] ^ a[3]; // a0 * 2*a1 + 3*a2 + a3
            s[2][c] = a[0] ^ a[1] ^ b[2] ^ a[3] ^ b[3]; // a0 + a1 + 2*a2 + 3*a3
            s[3][c] = a[0] ^ b[0] ^ a[1] ^ a[2] ^ b[3]; // 3*a0 + a1 + a2 + 2*a3
        }
        return s;
    },

    /** xor Round Key into state S [Â§5.1.4] */
    AddRoundKey : function(state, w, rnd, Nb) {
        for (var r=0; r<4; r++) {
            for (var c=0; c<Nb; c++) state[r][c] ^= w[rnd*4+c][r];
        }
        return state;
    },

    /** generate Key Schedule (byte-array Nr+1 x Nb) from Key [Â§5.2] */
    KeyExpansion : function(key) {
        var Nb = 4;            // block size (in words): no of columns in state (fixed at 4 for AES)
        var Nk = key.length/4  // key length (in words): 4/6/8 for 128/192/256-bit keys
        var Nr = Nk + 6;       // no of rounds: 10/12/14 for 128/192/256-bit keys

        var w = new Array(Nb*(Nr+1));
        var temp = new Array(4);

        for (var i=0; i<Nk; i++) {
            var r = [key[4*i], key[4*i+1], key[4*i+2], key[4*i+3]];
            w[i] = r;
        }

        for (var i=Nk; i<(Nb*(Nr+1)); i++) {
            w[i] = new Array(4);
            for (var t=0; t<4; t++) temp[t] = w[i-1][t];
            if (i % Nk == 0) {
                temp = this.SubWord(this.RotWord(temp));
                for (var t=0; t<4; t++) temp[t] ^= this.Rcon[i/Nk][t];
            } else if (Nk > 6 && i%Nk == 4) {
                temp = this.SubWord(temp);
            }
            for (var t=0; t<4; t++) w[i][t] = w[i-Nk][t] ^ temp[t];
        }

        return w;
    },

    /** apply SBox to 4-byte word w */
    SubWord : function(w) {
        for (var i=0; i<4; i++) w[i] = this.Sbox[w[i]];
        return w;
    },

    /** rotate 4-byte word w left by one byte */
    RotWord : function(w) {
        var tmp = w[0];
        for (var i=0; i<3; i++) w[i] = w[i+1];
        w[3] = tmp;
        return w;
    },
    
    /**
     * Encrypt a text using AES encryption in Counter mode of operation
     *  - see http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
     *
     * Unicode multi-byte character safe
     *
     * @param plaintext source text to be encrypted
     * @param password  the password to use to generate a key
     * @param nBits     number of bits to be used in the key (128, 192, or 256)
     * @return          encrypted text
     */
    encrypt : function(plaintext, password, nBits) {
        var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
        if (!(nBits==128 || nBits==192 || nBits==256)) return '';  // standard allows 128/192/256 bit keys
        plaintext = plaintext.encodeUTF8();
        password = password.encodeUTF8();
        //var t = new Date();  // timer

        // use AES itself to encrypt password to get cipher key (using plain password as source for key
        // expansion) - gives us well encrypted key
        var nBytes = nBits/8;  // no bytes in key
        var pwBytes = new Array(nBytes);
        for (var i=0; i<nBytes; i++) {
            pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        var key = this.Cipher(pwBytes, this.KeyExpansion(pwBytes));  // gives us 16-byte key
        key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

        // initialise counter block (NIST SP800-38A Â§B.2): millisecond time-stamp for nonce in 1st 8 bytes,
        // block counter in 2nd 8 bytes
        var counterBlock = new Array(blockSize);
        var nonce = (new Date()).getTime();  // timestamp: milliseconds since 1-Jan-1970
        var nonceSec = Math.floor(nonce/1000);
        var nonceMs = nonce%1000;
        // encode nonce with seconds in 1st 4 bytes, and (repeated) ms part filling 2nd 4 bytes
        for (var i=0; i<4; i++) counterBlock[i] = (nonceSec >>> i*8) & 0xff;
        for (var i=0; i<4; i++) counterBlock[i+4] = nonceMs & 0xff;
        // and convert it to a string to go on the front of the ciphertext
        var ctrTxt = '';
        for (var i=0; i<8; i++) ctrTxt += String.fromCharCode(counterBlock[i]);

        // generate key schedule - an expansion of the key into distinct Key Rounds for each round
        var keySchedule = this.KeyExpansion(key);

        var blockCount = Math.ceil(plaintext.length/blockSize);
        var ciphertxt = new Array(blockCount);  // ciphertext as array of strings

        for (var b=0; b<blockCount; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            // done in two stages for 32-bit ops: using two words allows us to go past 2^32 blocks (68GB)
            for (var c=0; c<4; c++) counterBlock[15-c] = (b >>> c*8) & 0xff;
            for (var c=0; c<4; c++) counterBlock[15-c-4] = (b/0x100000000 >>> c*8)

            var cipherCntr = this.Cipher(counterBlock, keySchedule);  // -- encrypt counter block --

            // block size is reduced on final block
            var blockLength = b<blockCount-1 ? blockSize : (plaintext.length-1)%blockSize+1;
            var cipherChar = new Array(blockLength);

            for (var i=0; i<blockLength; i++) {  // -- xor plaintext with ciphered counter char-by-char --
                cipherChar[i] = cipherCntr[i] ^ plaintext.charCodeAt(b*blockSize+i);
                cipherChar[i] = String.fromCharCode(cipherChar[i]);
            }
            ciphertxt[b] = cipherChar.join('');
        }

        // Array.join is more efficient than repeated string concatenation
        var ciphertext = ctrTxt + ciphertxt.join('');
        ciphertext = ciphertext.encodeBase64();  // encode in base64

        //alert((new Date()) - t);
        return ciphertext;
    },

    /**
     * Decrypt a text encrypted by AES in counter mode of operation
     *
     * @param ciphertext source text to be encrypted
     * @param password   the password to use to generate a key
     * @param nBits      number of bits to be used in the key (128, 192, or 256)
     * @return           decrypted text
     */
    decrypt : function(ciphertext, password, nBits) {
        var blockSize = 16;  // block size fixed at 16 bytes / 128 bits (Nb=4) for AES
        if (!(nBits==128 || nBits==192 || nBits==256)) return '';  // standard allows 128/192/256 bit keys
        ciphertext = ciphertext.decodeBase64();
        password = password.encodeUTF8();
        //var t = new Date();  // timer

        // use AES to encrypt password (mirroring encrypt routine)
        var nBytes = nBits/8;  // no bytes in key
        var pwBytes = new Array(nBytes);
        for (var i=0; i<nBytes; i++) {
            pwBytes[i] = isNaN(password.charCodeAt(i)) ? 0 : password.charCodeAt(i);
        }
        var key = this.Cipher(pwBytes, this.KeyExpansion(pwBytes));
        key = key.concat(key.slice(0, nBytes-16));  // expand key to 16/24/32 bytes long

        // recover nonce from 1st 8 bytes of ciphertext
        var counterBlock = new Array(8);
        var ctrTxt = ciphertext.slice(0, 8);
        for (var i=0; i<8; i++) counterBlock[i] = ctrTxt.charCodeAt(i);

        // generate key schedule
        var keySchedule = this.KeyExpansion(key);

        // separate ciphertext into blocks (skipping past initial 8 bytes)
        var nBlocks = Math.ceil((ciphertext.length-8) / blockSize);
        var ct = new Array(nBlocks);
        for (var b=0; b<nBlocks; b++) ct[b] = ciphertext.slice(8+b*blockSize, 8+b*blockSize+blockSize);
        ciphertext = ct;  // ciphertext is now array of block-length strings

        // plaintext will get generated block-by-block into array of block-length strings
        var plaintxt = new Array(ciphertext.length);

        for (var b=0; b<nBlocks; b++) {
            // set counter (block #) in last 8 bytes of counter block (leaving nonce in 1st 8 bytes)
            for (var c=0; c<4; c++) counterBlock[15-c] = ((b) >>> c*8) & 0xff;
            for (var c=0; c<4; c++) counterBlock[15-c-4] = (((b+1)/0x100000000-1) >>> c*8) & 0xff;

            var cipherCntr = this.Cipher(counterBlock, keySchedule);  // encrypt counter block

            var plaintxtByte = new Array(ciphertext[b].length);
            for (var i=0; i<ciphertext[b].length; i++) {
                // -- xor plaintxt with ciphered counter byte-by-byte --
                plaintxtByte[i] = cipherCntr[i] ^ ciphertext[b].charCodeAt(i);
                plaintxtByte[i] = String.fromCharCode(plaintxtByte[i]);
            }
            plaintxt[b] = plaintxtByte.join('');
        }

        // join array of blocks into single plaintext string
        var plaintext = plaintxt.join('');
        plaintext = plaintext.decodeUTF8();  // decode from UTF8 back to Unicode multi-byte chars

        //alert((new Date()) - t);
        return plaintext;
    }
    
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/**
 * Encode string into Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
 * (instance method extending String object). As per RFC 4648, no newlines are added.
 *
 * @param utf8encode optional parameter, if set to true Unicode string is encoded to UTF8 before 
 *                   conversion to base64; otherwise string is assumed to be 8-bit characters
 * @return           base64-encoded string
 */ 
var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

String.prototype.encodeBase64 = function(utf8encode) {  // http://tools.ietf.org/html/rfc4648
    utf8encode =  (typeof utf8encode == 'undefined') ? false : utf8encode;
    var o1, o2, o3, bits, h1, h2, h3, h4, e=[], pad = '', c, plain, coded;
   
    plain = utf8encode ? this.encodeUTF8() : this;
  
    c = plain.length % 3;  // pad string to length of multiple of 3
    if (c > 0) {
        while (c++ < 3) {
            pad += '='; plain += '\0';
        }
    }
    // note: doing padding here saves us doing special-case packing for trailing 1 or 2 chars
  
    for (c=0; c<plain.length; c+=3) {  // pack three octets into four hexets
        o1 = plain.charCodeAt(c);
        o2 = plain.charCodeAt(c+1);
        o3 = plain.charCodeAt(c+2);
      
        bits = o1<<16 | o2<<8 | o3;
      
        h1 = bits>>18 & 0x3f;
        h2 = bits>>12 & 0x3f;
        h3 = bits>>6 & 0x3f;
        h4 = bits & 0x3f;

        // use hextets to index into b64 string
        e[c/3] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
    }
    coded = e.join('');  // join() is far faster than repeated string concatenation
  
    // replace 'A's from padded nulls with '='s
    coded = coded.slice(0, coded.length-pad.length) + pad;
   
    return coded;
}

/**
 * Decode string from Base64, as defined by RFC 4648 [http://tools.ietf.org/html/rfc4648]
 * (instance method extending String object). As per RFC 4648, newlines are not catered for.
 *
 * @param utf8decode optional parameter, if set to true UTF8 string is decoded back to Unicode  
 *                   after conversion from base64
 * @return           decoded string
 */ 
String.prototype.decodeBase64 = function(utf8decode) {
    utf8decode =  (typeof utf8decode == 'undefined') ? false : utf8decode;
    var o1, o2, o3, h1, h2, h3, h4, bits, d=[], plain, coded;

    coded = utf8decode ? this.decodeUTF8() : this;
  
    for (var c=0; c<coded.length; c+=4) {  // unpack four hexets into three octets
        h1 = b64.indexOf(coded.charAt(c));
        h2 = b64.indexOf(coded.charAt(c+1));
        h3 = b64.indexOf(coded.charAt(c+2));
        h4 = b64.indexOf(coded.charAt(c+3));
      
        bits = h1<<18 | h2<<12 | h3<<6 | h4;
      
        o1 = bits>>>16 & 0xff;
        o2 = bits>>>8 & 0xff;
        o3 = bits & 0xff;
    
        d[c/4] = String.fromCharCode(o1, o2, o3);
        // check for padding
        if (h4 == 0x40) d[c/4] = String.fromCharCode(o1, o2);
        if (h3 == 0x40) d[c/4] = String.fromCharCode(o1);
    }
    plain = d.join('');  // join() is far faster than repeated string concatenation
   
    return utf8decode ? plain.decodeUTF8() : plain;
}

/**
 * Encode multi-byte Unicode string into utf-8 multiple single-byte characters 
 * (BMP / basic multilingual plane only) (instance method extending String object).
 *
 * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
 *
 * @return encoded string
 */
String.prototype.encodeUTF8 = function() {
    // use regular expressions & String.replace callback function for better efficiency
    // than procedural approaches
    var str = this.replace(
        /[\u0080-\u07ff]/g,  // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
        function(c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f);
        }
        );
    str = str.replace(
        /[\u0800-\uffff]/g,  // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
        function(c) {
            var cc = c.charCodeAt(0);
            return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f);
        }
        );
    return str;
}

/**
 * Decode utf-8 encoded string back into multi-byte Unicode characters
 * (instance method extending String object).
 *
 * @return decoded string
 */
String.prototype.decodeUTF8 = function() {
    var str = this.replace(
        /[\u00c0-\u00df][\u0080-\u00bf]/g,                 // 2-byte chars
        function(c) {  // (note parentheses for precence)
            var cc = (c.charCodeAt(0)&0x1f)<<6 | c.charCodeAt(1)&0x3f;
            return String.fromCharCode(cc);
        }
        );
    str = str.replace(
        /[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,  // 3-byte chars
        function(c) {  // (note parentheses for precence)
            var cc = ((c.charCodeAt(0)&0x0f)<<12) | ((c.charCodeAt(1)&0x3f)<<6) | ( c.charCodeAt(2)&0x3f);
            return String.fromCharCode(cc);
        }
        );
    return str;
}



/* rijndael.js      Rijndael Reference Implementation
   Copyright (c) 2001 Fritz Schneider

 This software is provided as-is, without express or implied warranty.
 Permission to use, copy, modify, distribute or sell this software, with or
 without fee, for any purpose and by any individual or organization, is hereby
 granted, provided that the above copyright notice and this paragraph appear
 in all copies. Distribution as a part of an application or binary must
 include the above copyright notice in the documentation and/or other materials
 provided with the application or distribution.

 Note that the following code is a compressed version of Fritz's code
 and is only about one third the size of his original
 compressed version courtesy of Stephen Chapman http://javascript.about.com/
 */

var BS=128;var BB=128;var RA=[,,,,[,,,,10,,12,,14],,[,,,,12,,12,,14],,[,,,,14,,14,,14]];var SO=[,,,,[,1,2,3],,[,1,2,3],,[,1,3,4]];var RC=[0x01,0x02,0x04, 0x08,0x10,0x20,0x40,0x80,0x1b,0x36,0x6c,0xd8,0xab,0x4d,0x9a,0x2f,0x5e,0xbc,0x63,0xc6,0x97,0x35,0x6a,0xd4,0xb3,0x7d,0xfa,0xef,0xc5,0x91];var SB=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22];var SBI=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125];function cSL(TA,PO){var T=TA.slice(0,PO);TA=TA.slice(PO).concat(T);return TA;}var Nk=BS/32;var Nb=BB/32;var Nr=RA[Nk][Nb];function XT(P){P<<=1;return((P&0x100)?(P^0x11B):(P));}function GF(x,y){var B,R=0;for(B=1;B<256;B*=2,y=XT(y)){if(x&B)R^=y;}return R;}function bS(SE,DR){var S;if(DR=="e")S=SB;else S=SBI;for(var i=0;i<4;i++)for(var j=0;j<Nb;j++)SE[i][j]=S[SE[i][j]];}function sR(SE,DR){for(var i=1;i<4;i++)if(DR=="e")SE[i]=cSL(SE[i],SO[Nb][i]);else SE[i]=cSL(SE[i],Nb-SO[Nb][i]);}function mC(SE,DR){var b=[];for(var j=0;j<Nb;j++){for(var i=0;i<4;i++){if(DR=="e")b[i]=GF(SE[i][j],2)^GF(SE[(i+1)%4][j],3)^SE[(i+2)%4][j]^SE[(i+3)%4][j];else b[i]=GF(SE[i][j],0xE)^GF(SE[(i+1)%4][j],0xB)^GF(SE[(i+2)%4][j],0xD)^GF(SE[(i+3)%4][j],9);}for(var i=0;i<4;i++)SE[i][j]=b[i];}}function aRK(SE,RK){for(var j=0;j<Nb;j++){SE[0][j]^=(RK[j]&0xFF);SE[1][j]^=((RK[j]>>8)&0xFF);SE[2][j]^=((RK[j]>>16)&0xFF);SE[3][j]^=((RK[j]>>24) & 0xFF);}}function YE(Y){var EY=[];var T;Nk=BS/32;Nb=BB/32;Nr=RA[Nk][Nb];for(var j=0;j<Nk;j++)EY[j]=(Y[4*j])|(Y[4*j+1]<<8)|(Y[4*j+2]<<16)|(Y[4*j+3]<<24);for(j=Nk;j<Nb*(Nr+1);j++){T=EY[j-1];if(j%Nk==0)T=((SB[(T>>8)&0xFF])|(SB[(T>>16)&0xFF]<<8)|(SB[(T>>24)&0xFF]<<16)|(SB[T&0xFF]<<24))^RC[Math.floor(j/Nk)-1];else if(Nk>6&&j%Nk==4)T=(SB[(T>>24)&0xFF]<<24)|(SB[(T>>16)&0xFF]<<16)|(SB[(T>>8)&0xFF]<<8)|(SB[T&0xFF]);EY[j]=EY[j-Nk]^T;}return EY;}function Rd(SE,RK){bS(SE,"e");sR(SE,"e");mC(SE,"e");aRK(SE,RK);}function iRd(SE,RK){aRK(SE,RK);mC(SE,"d");sR(SE,"d");bS(SE, "d");}function FRd(SE,RK){bS(SE,"e");sR(SE,"e");aRK(SE,RK);}function iFRd(SE,RK){aRK(SE,RK);sR(SE,"d");bS(SE,"d");}function encrypt(bk,EY){var i;if(!bk||bk.length*8!=BB)return;if(!EY)return;bk=pB(bk);aRK(bk,EY);for(i=1;i<Nr;i++)Rd(bk,EY.slice(Nb*i,Nb*(i+1)));FRd(bk,EY.slice(Nb*Nr));return uPB(bk);}function decrypt(bk,EY){var i;if(!bk||bk.length*8!=BB)return;if(!EY)return;bk=pB(bk);iFRd(bk,EY.slice(Nb*Nr));for(i=Nr-1;i>0;i--)iRd(bk,EY.slice(Nb*i,Nb*(i+1)));aRK(bk,EY);return uPB(bk);}function byteArrayToString(bA){var R="";for(var i=0;i<bA.length; i++)if(bA[i]!=0)R+=String.fromCharCode(bA[i]);return R;}function byteArrayToHex(bA){var R="";if(!bA)return;for(var i=0;i<bA.length;i++)R+=((bA[i]<16)?"0":"")+bA[i].toString(16);return R;}function hexToByteArray(hS){var bA=[];if(hS.length%2)return;if(hS.indexOf("0x")==0||hS.indexOf("0X")==0)hS = hS.substring(2);for (var i=0;i<hS.length;i+=2)bA[Math.floor(i/2)]=parseInt(hS.slice(i,i+2),16);return bA;}function pB(OT){var SE = [];if(!OT||OT.length%4)return;SE[0]=[];SE[1]=[];SE[2]=[];SE[3]=[];for(var j=0;j<OT.length;j+=4){SE[0][j/4]=OT[j];SE[1][j/4]=OT[j+1];SE[2][j/4]=OT[j+2];SE[3][j/4]=OT[j+3];}return SE;}function uPB(PK){var R=[];for(var j=0;j<PK[0].length;j++){R[R.length]=PK[0][j];R[R.length]=PK[1][j];R[R.length]=PK[2][j];R[R.length]=PK[3][j];}return R;}function fPT(PT){var bpb=BB/8;var i;if(typeof PT=="string"||PT.indexOf){PT=PT.split("");for(i=0;i<PT.length;i++)PT[i]=PT[i].charCodeAt(0)&0xFF;}for(i=bpb-(PT.length%bpb);i>0&&i<bpb;i--) PT[PT.length]=0;return PT;}function gRB(hM){var i;var bt=[];for(i=0;i<hM;i++)bt[i]=Math.round(Math.random()*255);return bt;}function rijndaelEncrypt(PT,Y,M){var EY,i,abk;var bpb=BB/8;var ct;if(!PT||!Y)return;if(Y.length*8!=BS)return;if(M=="CBC")ct=gRB(bpb);else {M="ECB";ct=[];}PT=fPT(PT);EY=YE(Y);for (var bk=0; bk<PT.length/bpb;bk++){abk=PT.slice(bk*bpb,(bk+1)*bpb);if(M=="CBC")for (var i=0;i<bpb; i++)abk[i] ^= ct[bk*bpb+i];ct=ct.concat(encrypt(abk,EY));}return ct;}function rijndaelDecrypt(CT,Y,M){var EY;var bpb=BB/8;var pt=[];var abk;var bk;if(!CT||!Y||typeof CT=="string")return;if(Y.length*8!=BS)return;if(!M)M="ECB";EY=YE(Y);for(bk=(CT.length/bpb)-1;bk>0;bk--){abk=decrypt(CT.slice(bk*bpb,(bk+1)*bpb),EY);if(M=="CBC")for(var i=0;i<bpb;i++)pt[(bk-1)*bpb+i]=abk[i]^CT[(bk-1)*bpb+i];else pt=abk.concat(pt);}if(M=="ECB") pt=decrypt(CT.slice(0,bpb),EY).concat(pt);return pt;}function stringToByteArray(st){var bA=[];for(var i=0;i<st.length; i++)bA[i]=st.charCodeAt(i);return bA;}function genkey(){var j="";while(1){var i=Math.random().toString();j+=i.substring(i.lastIndexOf(".")+1);if(j.length>31)return j.substring(0, 32);}}