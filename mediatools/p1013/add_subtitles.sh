mencoder dvdnav://1 -of mpeg -mpegopts format=dvd:tsaf -alang en -nocache -sid 1000 -oac lavc -ovc lavc -lavcopts vcodec=mpeg2video:vrc_buf_size=1835:vrc_maxrate=9800:vbitrate=5000:keyint=1:vstrict=0:acodec=ac3:abitrate=192:autoaspect -ofps 30000/1001 -o ./INCEPTION.fulli_unedited.tmp.mpg -dvd-device d:\ && echo got_file > ./INCEPTION.fulli_unedited.tmp.mpg.done

mencoder -sub heading.ssa -subpos 0 -subfont-text-scale 4 -utf8 -oac mp3lame -lameopts cbr=128 -ovc lavc -lavcopts vcodec=mjpeg -vf scale=320:-2,expand=:240:::1 -o output.avi input.flv


mencoder [filename] -sub subtitle_test.srt -subpos 0 -subfont-text-scale 4 -of mpeg -mpegopts format=dvd:tsaf -alang en -nocache -sid 1000 -oac lavc -ovc lavc -lavcopts vcodec=mpeg2video:vrc_buf_size=1835:vrc_maxrate=9800:vbitrate=5000:keyint=1:vstrict=0:acodec=ac3:abitrate=192:autoaspect -ofps 30000/1001 -o [filename]-titled.avi

mencoder INCEPTION.avi -sub cleaned_captions.srt -subpos 0 -subfont-text-scale 4 -of mpeg -mpegopts format=dvd:tsaf -alang en -nocache -sid 1000 -oac lavc -ovc lavc -lavcopts vcodec=mpeg2video:vrc_buf_size=1835:vrc_maxrate=9800:vbitrate=5000:keyint=1:vstrict=0:acodec=ac3:abitrate=192:autoaspect -ofps 30000/1001 -o INCEPTION.titled.avi

