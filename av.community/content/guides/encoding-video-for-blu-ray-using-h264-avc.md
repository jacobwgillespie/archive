---
title: Encoding Video for Blu-ray Using H265 / AVC
tags:
  - h264
  - bluray
---

Source: http://forum.doom9.org/showthread.php?t=154533

Here is part of specification that apply when encoding with H264/AVC codec, all parameters showed here are not guessing, it's based on original Blu-Ray specification, which are not available in public.

NOTE: This is discussion about settings that are for creating 100% compliant Blu-Ray structures, not for encoding from Blu-Ray sources to matroska/mp4 or other media, if you encode to those skip this nightmare :)

1. GENERAL CONSTRAINTS FOR MPEG-4 H264/AVC

1.1 ALLOWED RESOLUTIONS/FRAMERATES

http://tom.niko.users.sbb.rs/resolutions.png


1.2 ALLOWED LEVELS, PROFILES, REFERENCE FRAMES, VBV

1.2.1 Primary Video Rules

http://tom.niko.users.sbb.rs/gopsrefs2.png

1.2.2 Secondary Video Rules

NOTE: In case of 1080 and 720 resolutions same rules apply as Primary video, while 576 and 480 resolutions have stricter parameters showed in table:

http://tom.niko.users.sbb.rs/gopsrefs3.png


1.3 SIMPLE ASPECT RATIO

http://tom.niko.users.sbb.rs/sar.png


1.4 COLOR CHARACTERISTICS

http://tom.niko.users.sbb.rs/color.png


1.5 OTHER REQUIRED PARAMETERS

8-bit (4:2:0) Colorspace is only allowed
Main and High profiles are allowed
Maximum 3 B-Frames is allowed
NAL-HRD Type 2 capable encoder is needed


2. ENCODE BLU-RAY VIDEO USING x264

2.1 MANDATORY PARAMETERS

Every encode for Blu-Ray must contain this parameters, without it will not meet Blu-Ray specification.

--bluray-compatEnforce x264 to create BD compliant stream, that will reduce x264 settings to BD compatible: bframe<=3, ref<=4 for 1080, ref<=6 for 720/576/480, bpyramid<=strict, weightp<=1, aud=1, nalhrd=vbr

--levelBlu-Ray level, see the table for the appropriate level

--keyintMaximum number displayed pictures in GOP. If you set Maximum bitrate less or equal to 15mbps you can use 2 second long GOP otherwise, 1 second GOP must be used.

--vbv-maxrateMaximum allowed bitrate. Depend of destination media, for normal BD Media, maximum settings is allowed (40000), while for DVD Media (eg BD-5 or BD-9) there is no maximum per Blu-Ray specification, but is strongly recommended that use less or equal to 15000, since DVD reading is slower.


--vbv-bufsizeMaximum allowed buffer, buffer size is in relation with maxrate. Since STD Buffer Delay for Blu-Ray allows maximum 1 second. This mean to divide buffer with maxrate and see if result is less or equal to 1, if not, buffer is need to be reduced to lower value that meet 1 second STD. For BD media, maximum settings is allowed (30000), but if not meet STD Buffer Delay, then need to be reduced to lower value. For DVD media there is no maximum in Blu-Ray specification, but is strongly recommended that use less or equal to 15000, and again need to meet STD delay of 1 second.

For example:

--vbv-bufsize 30000 --vbv-maxrate 40000 is allowed
--vbv-bufsize 30000 --vbv-maxrate 30000 is allowed
--vbv-bufsize 15000 --vbv-maxrate 30000 is allowed
--vbv-bufsize 30000 --vbv-maxrate 15000 is not allowed (delay is greater than 1 second)

Basicly vbv-bufsize should newer been greater than vbv-maxrate, that is whole point.


--sar
Simple Aspect Ratio, must present in stream, see the table for the appropriate settings


--slices
Only when encoding with --level 4.1, slices need to be set to 4 or greater, otherwise you can skip this setting or set it to 1.


-o xxx.264
Output file must be in raw 264 elementary stream (extension .264) otherwise settings will not applied correctly. DO NOT USE MKV OR MP4.

2.2 OPTIONAL PARAMETERS

This parameters is optional and not need for every encode.


--colorprim
--transfer
--colormatrix
Specify color primaries, transfer characteristics and color matrix. This is optional, and not need to be present, see the table for the appropriate settings.


--pic-struct
Need only when fake interlaced is used, and it's default on with interlaced and pulldown. It's fine with progressive aslo, and some BD verification tools request to be present in stream.


--open-gop
Use non-IDR pictures instead classic IDR picture, this will tend to resolve pulsing picture problem that is usually came with short GOP's.


--fake-interlaced
Since 25p or 30p video is not allowed for Primary Video, encoding progressive video that meet Blu-Ray specification is only possible with this option. If use this option you aslo need to specify --pic-struct


--qpfileNeed for chapters.

2.2 EXAMPLES

Progressive

1080p (http://www.x264bluray.com/home/1080i-p)
720p (http://www.x264bluray.com/home/720p-encoding)
576p (http://www.x264bluray.com/home/576p-pal)
480p (http://www.x264bluray.com/home/480p-ntsc)

Interlaced

1080i (http://www.x264bluray.com/home/1080i)
576i (http://www.x264bluray.com/home/576i-pal)
480i (http://www.x264bluray.com/home/480i-ntsc)
