#!/usr/bin/perl

# broken

use Crypt::Rijndael;
use POSIX qw(ceil);

my $message = shift;

my $enc_data = pack("H*", "01c10b77de3795c18c3f38307cb3d7ea5b72ca94b099007d27555dd4076010832215d37e52aca503848cb41eb47c6ffb");

my $smil = "";
my $ecb = Crypt::Rijndael->new(pack("H*", "4878B22E76379B55C962B18DDBC188D82299F8F52E3E698D0FAF29A40ED64B21"));
my $unaes = $ecb->encrypt($message);
print $unaes;