#!/usr/bin/perl

use Crypt::Rijndael;
use POSIX qw(ceil);

$debug = 0;

my $sub = shift; # like "01c10b77de3795c18c3f38307cb3d7ea5b72ca94b099007d27555dd4076010832215d37e52aca503848cb41eb47c6ffb";

print decrypt($sub);

sub info {
  my $msg = shift;
  if ($debug) {
    print $msg;
    print "\n";
  }
}

sub decrypt {
  my $encrypted_smil = shift;
  my $encrypted_data = pack("H*", $encrypted_smil);

  my @xml_decrypt_keys = @{ read_keys()->{smil} };

  foreach my $key (@xml_decrypt_keys) {
    info "XML decrypt key: $key->[0], IV: $key->[1]";

    my $smil = "";
    my $ecb = Crypt::Rijndael->new(pack("H*", @{$key}[0]));
    my $unaes = $ecb->decrypt($encrypted_data);

    # Ok, do some funny xor
    my $xorkey = pack("Z*", @{$key}[1]);
    $xorkey = substr($xorkey, 0, 16);
    info ceil(length($encrypted_smil) / 32);

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
      return $smil;
    }
  }
  
  return 0;
}

sub read_keys {

  # Return hardcoded keys for now.
  my $keys = {
    pid => [
      '6fe8131ca9b01ba011e9b0f5bc08c1c9ebaf65f039e1592d53a30def7fced26c',
      'd3802c10649503a60619b709d1278ffff84c1856dfd4097541d55c6740442d8b',
      'c402fb2f70c89a0df112c5e38583f9202a96c6de3fa1aa3da6849bb317a983b3',
      'e1a28374f5562768c061f22394a556a75860f132432415d67768e0c112c31495',
      'd3802c10649503a60619b709d1278efef84c1856dfd4097541d55c6740442d8b'
    ],
    smil => [
      ['4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21', 'WA7hap7AGUkevuth'],
      ['246DB3463FC56FDBAD60148057CB9055A647C13C02C64A5ED4A68F81AE991BF5', 'vyf8PvpfXZPjc7B1'],
      ['8CE8829F908C2DFAB8B3407A551CB58EBC19B07F535651A37EBC30DEC33F76A2', 'O3r9EAcyEeWlm5yV'],
      ['852AEA267B737642F4AE37F5ADDF7BD93921B65FE0209E47217987468602F337', 'qZRiIfTjIGi3MuJA'],
      ['76A9FDA209D4C9DCDFDDD909623D1937F665D0270F4D3F5CA81AD2731996792F', 'd9af949851afde8c'],
      ['1F0FF021B7A04B96B4AB84CCFD7480DFA7A972C120554A25970F49B6BADD2F4F', 'tqo8cxuvpqc7irjw'],
      ['3484509D6B0B4816A6CFACB117A7F3C842268DF89FCC414F821B291B84B0CA71', 'SUxSFjNUavzKIWSh'],
      ['B7F67F4B985240FAB70FF1911FCBB48170F2C86645C0491F9B45DACFC188113F', 'uBFEvpZ00HobdcEo'],
      ['40A757F83B2348A7B5F7F41790FDFFA02F72FC8FFD844BA6B28FD5DFD8CFC82F', 'NnemTiVU0UA5jVl0'],
    ],
    player => "yumUsWUfrAPraRaNe2ru2exAXEfaP6Nugubepreb68REt7daS79fase9haqar9sa",
#    v => "810006400",
#    v => "435984533",
#    v => "850037518", # in newer hsc (June 2010) but now unused by the player?
     v => "713434170&np=1" # in new playback.swf (June 2010).. is accompanied by &np=1
  };

  return $keys;
}