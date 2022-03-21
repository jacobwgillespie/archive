#!/bin/bash

RSAKEYS=/etc/xrdp/rsakeys.ini
# Check for rsa key
[ -f /usr/share/doc/xrdp/rsakeys.ini ] && rm /usr/share/doc/xrdp/rsakeys.ini
ln -s $RSAKEYS /usr/share/doc/xrdp/rsakeys.ini
if [ ! -f $RSAKEYS ]; then
  echo "Generating xrdp RSA keys..."
  (umask 077 ; xrdp-keygen xrdp $RSAKEYS)
  chown root:root $RSAKEYS
  if [ ! -f $RSAKEYS ] ; then
    echo "could not create $RSAKEYS"
    exit 1
  fi
fi
[ -f /var/run/xrdp/xrdp.pid ] && rm /var/run/xrdp/xrdp.pid
echo "Starting xrdp!"
exec /usr/sbin/xrdp --nodaemon