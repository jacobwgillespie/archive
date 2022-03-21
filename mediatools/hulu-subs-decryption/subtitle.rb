#!/usr/bin/ruby

require 'rubygems'
require 'crypt/rijndael'
require 'fast-aes'

class String
  def packH
    new_str = self.dup.scan(/.{2}/m).map { |i| [i].pack("H*") }
    new_str.join ""
  end
end

def decrypt(encrypted_smil)

  encrypted_data = encrypted_smil.packH

  xml_decrypt_keys = read_keys

  xml_decrypt_keys.each do |key|

    smil = ""
    ecb = Crypt::Rijndael.new(key[0].packH)
    unaes = ecb.decrypt_string(encrypted_data)

    # Ok, do some funny xor
    xorkey = key[1].unpack("Z*")
    xorkey = xorkey[0, 16]

    (0...(encrypted_smil.length / 32.0).ceil).to_a.each do |i|
      test = unaes[i*16, 16]; test = '' if test.nil?
      res = xorkey.first.to_s ^ test
      xorkey = encrypted_data[i*16, 16]
      smil = "#{smil}#{res}"
    end

    # Remove padding
    #lastchar = smil[-1]
    #if (substr($smil, -$lastchar) == chr($lastchar) x $lastchar)
    #  substr($smil, -$lastchar) = "";
    #end

    puts smil

    if smil =~ /^(?:<smil|\s*<.+?>.*<\/.+?>)/i  # Fix for transcripts
      return smil
    end
  end

end

def read_keys
  return  [['4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21', 'WA7hap7AGUkevuth'],
           ['246DB3463FC56FDBAD60148057CB9055A647C13C02C64A5ED4A68F81AE991BF5', 'vyf8PvpfXZPjc7B1'],
           ['8CE8829F908C2DFAB8B3407A551CB58EBC19B07F535651A37EBC30DEC33F76A2', 'O3r9EAcyEeWlm5yV'],
           ['852AEA267B737642F4AE37F5ADDF7BD93921B65FE0209E47217987468602F337', 'qZRiIfTjIGi3MuJA'],
           ['76A9FDA209D4C9DCDFDDD909623D1937F665D0270F4D3F5CA81AD2731996792F', 'd9af949851afde8c'],
           ['1F0FF021B7A04B96B4AB84CCFD7480DFA7A972C120554A25970F49B6BADD2F4F', 'tqo8cxuvpqc7irjw'],
           ['3484509D6B0B4816A6CFACB117A7F3C842268DF89FCC414F821B291B84B0CA71', 'SUxSFjNUavzKIWSh'],
           ['B7F67F4B985240FAB70FF1911FCBB48170F2C86645C0491F9B45DACFC188113F', 'uBFEvpZ00HobdcEo'],
           ['40A757F83B2348A7B5F7F41790FDFFA02F72FC8FFD844BA6B28FD5DFD8CFC82F', 'NnemTiVU0UA5jVl0']]
end

sub = ARGV[0] # like "01c10b77de3795c18c3f38307cb3d7ea5b72ca94b099007d27555dd4076010832215d37e52aca503848cb41eb47c6ffb";

puts "hi"
puts decrypt(sub)

