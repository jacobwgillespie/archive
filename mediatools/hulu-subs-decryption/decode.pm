#!/usr/bin/perl

use Crypt::Rijndael;
use POSIX qw(ceil);

$debug = 0;

my $input = shift; # like "01c10b77de3795c18c3f38307cb3d7ea5b72ca94b099007d27555dd4076010832215d37e52aca503848cb41eb47c6ffb";

my @subs = split(/:/, $input);

my $return = "";

my @xml_decrypt_keys = (
  ['4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21', 'WA7hap7AGUkevuth'],
  ['246DB3463FC56FDBAD60148057CB9055A647C13C02C64A5ED4A68F81AE991BF5', 'vyf8PvpfXZPjc7B1'],
  ['8CE8829F908C2DFAB8B3407A551CB58EBC19B07F535651A37EBC30DEC33F76A2', 'O3r9EAcyEeWlm5yV'],
  ['852AEA267B737642F4AE37F5ADDF7BD93921B65FE0209E47217987468602F337', 'qZRiIfTjIGi3MuJA'],
  ['76A9FDA209D4C9DCDFDDD909623D1937F665D0270F4D3F5CA81AD2731996792F', 'd9af949851afde8c'],
  ['1F0FF021B7A04B96B4AB84CCFD7480DFA7A972C120554A25970F49B6BADD2F4F', 'tqo8cxuvpqc7irjw'],
  ['3484509D6B0B4816A6CFACB117A7F3C842268DF89FCC414F821B291B84B0CA71', 'SUxSFjNUavzKIWSh'],
  ['B7F67F4B985240FAB70FF1911FCBB48170F2C86645C0491F9B45DACFC188113F', 'uBFEvpZ00HobdcEo'],
  ['40A757F83B2348A7B5F7F41790FDFFA02F72FC8FFD844BA6B28FD5DFD8CFC82F', 'NnemTiVU0UA5jVl0']
);
my $found_key_0 = 0;
my $found_key_0 = "";
my $found_key_1 = "";

foreach my $encrypted_smil (@subs) {
  my $encrypted_data = pack("H*", $encrypted_smil);
  
  if ($found_key == 0) {
    foreach my $key (@xml_decrypt_keys) {

      my $smil = "";
      my $ecb = Crypt::Rijndael->new(pack("H*", @{$key}[0]));
      my $unaes = $ecb->decrypt($encrypted_data);

      # Ok, do some funny xor
      my $xorkey = pack("Z*", @{$key}[1]);
      $xorkey = substr($xorkey, 0, 16);

      for (my $i = 0; $i < ceil(length($encrypted_smil) / 32); $i++) {
        my $res = $xorkey ^ substr($unaes, $i*16, 16);
        $xorkey = substr($encrypted_data, $i*16, 16);
        $smil = "$smil$res";
      }

      # Remove padding
      my $lastchar = ord(substr($smil, -1));
      if (substr($smil, -$lastchar) == chr($lastchar) x $lastchar) {
        substr($smil, -$lastchar) = "";
      }
      
      if ($smil =~ /^(?:<smil|\s*<.+?>.*<\/.+?>)/i) { # Fix for transcripts
        $found_key = 1;
        $found_key_0 = @{$key}[0];
        $found_key_1 = @{$key}[1];
      }
    }
  }
  
  if ($found_key == 1) {
    my $smil = "";
    my $ecb = Crypt::Rijndael->new(pack("H*", $found_key_0));
    my $unaes = $ecb->decrypt($encrypted_data);

    # Ok, do some funny xor
    my $xorkey = pack("Z*", $found_key_1);
    $xorkey = substr($xorkey, 0, 16);

    for (my $i = 0; $i < ceil(length($encrypted_smil) / 32); $i++) {
      my $res = $xorkey ^ substr($unaes, $i*16, 16);
      $xorkey = substr($encrypted_data, $i*16, 16);
      $smil = "$smil$res";
    }

    # Remove padding
    my $lastchar = ord(substr($smil, -1));
    if (substr($smil, -$lastchar) == chr($lastchar) x $lastchar) {
      substr($smil, -$lastchar) = "";
    }
    
    if ($smil =~ /^(?:<smil|\s*<.+?>.*<\/.+?>)/i) { # Fix for transcripts
      $return = "$return$smil~~~split~~~";
    }
  }
}

print $return;
