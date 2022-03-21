---
title: Authoring a Professional Blu-ray Disc with x264
---

Source: http://www.x264bluray.com/home/

## Getting Started with x264

x264 is a free AVC encoder that is best-in-class and thanks to compliance testing from the Criterion Collection now supports Blu-ray Disc encoding. GDMX has also vetted x264 for BD use using the Eclipse Verifier in 1080p24 and 1080p/i30.

This page deals with the most common scenarios for Blu-ray authoring. Many commercial discs from well known names have been made using the guides here. You should also know your desired bitrate beforehand.

x264 can be downloaded here: http://download.videolan.org/pub/videolan/x264/binaries/

The easiest way to customise x264's encoding time is to use the following presets:

* superfast
* veryfast
* faster
* fast
* medium
* slow
* slower
* veryslow
* placebo

It is also possible to tune for various content types:

* film
* animation
* grain

Output .264 files can then be imported successfully into mastering applications such as Sonic Scenarist and Sony Blu-Print.  The Blu-ray spec allows a variety of different configurations but all the settings on this site are chosen to maximise quality.

**NB:** These settings are all 2-pass encodes. If you wish to run a single-pass encode make sure that "--pass 1" is NOT included
in your command line.

It is **strongly recommended** to inverse telecine any telecined material.

**NB:** If your source file is not natively the correct framerate you will have to add the following settings (example for 23.976):

```
--fps 24000/1001 --force-cfr
```

You can also post feedback or ask questions regarding x264 Blu-ray authoring using the following form:  Feedback and Comments

Questions regarding x264 for authoring commercial releases will be kept confidential if requested. This has been done on many occasions.

More detailed information about x264's settings can be found here: x264 settings

More information about x264 can be found here: x264 homepage

### 1080i

Primary and Secondary Streams (assumes top field first)

#### 1080i25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --tff --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --tff --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

#### 1080i29.97 / 1080i30

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --tff --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --tff --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

### 1080p

Primary and Secondary Streams

#### 1080p23.976 / 1080p24

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

NB: the following two streams are encoded using fake-interlaced mode. This allows the stream to be encoded progressively yet flagged as interlaced.

#### 1080p25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --fake-interlaced --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --fake-interlaced --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

#### 1080p29.97

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --fake-interlaced --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --fake-interlaced --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

### 480i (NTSC)

Primary Stream (assumes bottom field first)

Replace --sar 40:33 with --sar 10:11 if you require a 4:3 Display Aspect Ratio

#### 480i29.97

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --bff --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --bff --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 2 -o out.264 input.file
```

Secondary Stream

#### 480i29.97

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 30 --open-gop --bff --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 30 --open-gop --bff --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 2 -o out.264 input.file
```

### 480p (NTSC)

Primary Stream

Replace --sar 40:33 with --sar 10:11 if you require a 4:3 Display Aspect Ratio
480p23.976 (soft 3:2 pulldown applied and fake interlaced)

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --pulldown 32 --fake-interlaced --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --pulldown 32 --fake-interlaced --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 2 -o out.264 input.file
```

NB: Secondary Streams are less restrictive than primary streams in 480p mode

Secondary Stream

#### 480p23.976/480p24

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 24 --open-gop --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 24 --open-gop --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 2 -o out.264 input.file
```

#### 480p29.970

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 30 --open-gop --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 30 --open-gop --colorprim "smpte170m" --transfer "smpte170m" --colormatrix "smpte170m" --sar 40:33 --pass 2 -o out.264 input.file
```

### 576i (PAL)

Primary Stream (assumes top field first)

Replace --sar 16:11 with --sar 12:11 if you require a 4:3 Display Aspect Ratio

#### 576i25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --tff --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --tff --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 2 -o out.264 input.file
```

Secondary Stream

#### 576i25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 25 --open-gop --ref 5 --tff --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 25 --open-gop --ref 5 --tff --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 2 -o out.264 input.file
```

Primary Stream

NB: The following stream requires fake interlaced mode which allows encoding progressively but flags the content as interlaced.
Replace --sar 16:11 with --sar 12:11 if you require a 4:3 Display Aspect Ratio

#### 576p25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --fake-interlaced --pic-struct --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --fake-interlaced --pic-struct --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 2 -o out.264 input.file
```

Secondary Stream

#### 576p25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 25 --open-gop --ref 5 --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 8000 --vbv-bufsize 8000 --level 3.2 --keyint 25 --open-gop --ref 5 --colorprim "bt470bg" --transfer "bt470bg" --colormatrix "bt470bg" --sar 16:11 --pass 2 -o out.264 input.file
```

### 720p

Primary and Secondary Streams

#### 720p23.976 / 720p24

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 24 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

NB: the next two streams use frame doubling to comply with the Blu-Ray specification:

#### 720p25

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --pulldown double --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 25 --open-gop --slices 4 --pulldown double --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

#### 720p29.97

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --pulldown double --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 30 --open-gop --slices 4 --pulldown double --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

#### 720p50

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 50 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 50 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

#### 720p59.94

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 60 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 1 -o out.264 input.file
```

```
x264 --bitrate XXXXX --preset veryslow --tune film --bluray-compat --vbv-maxrate 40000 --vbv-bufsize 30000 --level 4.1 --keyint 60 --open-gop --slices 4 --colorprim "bt709" --transfer "bt709" --colormatrix "bt709" --sar 1:1 --pass 2 -o out.264 input.file
```

## Issues with certain players/authoring applications

* Sony DVD-A does not support interlaced files encoded with x264.
* TSmuxer does not support any of the --pulldown options.
* Adobe Encore CS5 has poor performance when --open-gop is enabled
* Sony Blu-Print has stuttering with B-frames. Sony appear to have fixed this issue.

**There are no reports of playback problems with any other authoring applications.**

## Issues with certain verifiers

Panasonic Blu-Ray verifier reports the following error: `"uuid_iso_iec_11578: This field shall be set to "17ee8c60-f84d-11d9-8cd6-0800200c9a66"`.  This is a false positive - the SEI x264 uses is allowed under the Blu-ray Specification.

Sony BD-ROM verifier reports `"Note ES7183"` with fake-interlaced 1080p25. This is a false positive.

There are no other known issues with any other verifiers.

## Licensing

Contrary to many reports there are no licence fees necessary for using x264 to encode commercial Blu-Rays.

The standard Blu-Ray licensing procedures apply as with any encoder.

## Chapters

You can force specific frametypes for chapters by using a qpfile. Create a text file with notepad.

The format of this file is simply (each with a space between the next):

**Frame Number | Frame Type | Quantizer**

e.g.

```
500 K -1
600 K -1
900 K -1
```

Frame numbers should be in ascending order. K stands for keyframe. All Quantizers should be set to -1 (automatic).

Add the following

```
--qpfile QPFILE_NAME
```

## x264 encoded discs

Many discs have been created with the instructions on this site:

### Whole discs

* "Friends" Boxset - Warner Home Video
* "Mike and Molly Season 1" - Warner Home Video
* "Machete" - Kino Świat
* "Phil Collins: Going Back - Live at the Roseland Ballroom NYC" (German release)
* "Trigun Badlands Rumble" - Dynit Srl
* "Mindcandy Volume 3" - Fusecon, Hornet
* "Keeper'n til Liverpool" (english: The Liverpool Goalie )
* "Kommandor Treholt og Ninjatroppen" (english: New Norwegian Hope )
* "Koselig med peis" (english: Norwegian Cozy )

There are many x264-encoded discs out there which we haven't heard about. Tell us if you know of any.

### Menus

* Discs authored by http://www.anteprimavideo.com/
  - "Il favoloso mondo di Amélie" (original title: Le fabuleux destin d'Amélie Poulain - english: The Fabulous Destiny of Amelie Poulain)
  - "La Tigre e il Dragone" (original title: Wo hu cang long - english: Crouching Tiger, Hidden Dragon)
* "The Town" - Warner Home Video
* "Lord of the Rings Extended Edition" (various small segments) - Warner Home Video
* "Sofia Coppola" - Pathe Distribution

### Demo Disc

We've created an example Blu-Ray disc that fits on a DVD: http://x264dev.multimedia.cx/?p=328
