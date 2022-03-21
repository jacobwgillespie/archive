convert -background none  -fill white  -font /usr/share/fonts/truetype/ubuntu-font-family/Ubuntu-R.ttf -pointsize 20 label:'ImageMagick\nRules - OK!'     watermark.png

ffmpeg -i kung.m4v -s 640x360 -f mp4  -b 800k -acodec libfaac -ab 64k  -vfilters "movie=0:png:watermark.png [wm];[in][wm] overlay=0:0:1 [out]" out.mp4
