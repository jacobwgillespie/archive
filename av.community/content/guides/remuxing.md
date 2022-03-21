---
title: Remuxing
---

Source: https://sites.google.com/site/xorphdstuff/remuxing

## Why Remux Blu-rays?

- You use MPC-HC (or similar DShow players) and standard filters for playback. You can also use better quality renderers like Haali, EVR and madVR.
- You get the ease of playback of a re-encode without the quality loss. A double click off the .mkv will start the movie - no annoying warnings, loading screens, previews and setup menus.
- You don't have to deal with horribly bloated, unstable and expensive PowerDVD or Arcsoft playback software.
- You don't have to mess with ISO creation, correct BD folder structure, UDF and SPTD drivers, and image mounting every time you want to watch a movie.
- You never have to worry about the region code setting of a disc.
- You never have to worry about HDCP or PAP content protection.
- You never have to worry about your software player downsampling your audio - get full bit-depth and frequency resolution, 24bit/96kHz or higher, not 16/48.
- You don't have to buy a HDMI sound card to get full resolution HD audio to your receiver.
- You never have to worry about Dialog Normalization (DialNorm), as it is removed and you will get a better representation of the audio levels.
- You can easily add subtitles and/or dubbed audio tracks not included on the original disc.
- You can save lots of space per movie (see end of page for examples):
    - Blu-rays uses the M2TS container which has a large overhead. MKV has no such overhead, so you save space immediately due to that alone.
    -Dubbed audio tracks can add a lot to file size (10+ dubs on some Warner discs) and some discs even come with dubs in lossless/uncompressed.
    - FLAC tracks are about 10-20% smaller than TrueHD tracks and about 30-40% smaller than DTS-HD Master Audio tracks. If the audio is PCM, then the savings will be MUCH bigger (16-bit PCM can be compressed with a factor of over 3:1 to FLAC).
    - You can throw out all those useless bonus features, such as making-of featurettes, trailers for other movies (now often in HD) picture-in-picture streams, etc, all wasting tons of space.

## Software Needed

- eac3to: http://forum.doom9.org/showthread.php?t=125966
- Haali Splitter: http://haali.cs.msu.ru/mkv/
- Sonic decoder OR Arcsoft decoder (for decoding DTS & DTS-HD)
- mkvmerge: http://www.bunkus.org/videotools/mkvtoolnix/downloads.html#windows (for combining video and audio into a single mkv)

Note that:

- A DTS encoder is only needed if you are going to turn lossless audio into a DTS track. If you have no intention to do that and want it 100% lossless, then skip it.
- ALL DTS-HD Master and DTS-HD High Resolution audio tracks have a legacy DTS core track embedded into them. Most of the time they are the max 1509kbps bitrate.
- The DTS Pro encoder or the Master Audio Suite (MAS) encoder create higher quality DTS audio encodes than the Surcode Encoder, but it cannot be automated to work inside eac3to.

## How to Remux

Once you have all of that installed and eac3to unzipped somewhere, then go to command line and type eac3to.exe -test to see if everything is working. These are the results from my PC for example:

```
eac3to -test
Nero Audio Decoder (Nero 7 or older) doesn't seem to be installed
http://www.nero.com/eng/store-blu-ray.html
CAUTION: You need Nero 7. Nero 8 won't work with eac3to.
ArcSoft DTS Decoder doesn't seem to be installed
http://www.arcsoft.com/products/totalmediatheatre
Sonic Audio Decoder (4.3.0.169) works fine
Haali Matroska Muxer (2008-03-29) is up to date
Nero AAC Encoder could not be located
http://www.nero.com/eng/nero-aac-codec.html
Copy NeroAacEnc.exe to the eac3to or to the Windows folder.
Surcode DTS Encoder (1.0.29.0) is installed
MkvToolnix (2.3.0.0, 2008-09-08) is up to date
There's a new beta version (2.3.0.0, 2008-09-13) available
http://www.bunkus.org/videotools/mkvtoolnix/win32/pre
```

### Step 1

Now, with everything installed and working, we need a decrypted Blu-ray for this to work. Lets say my Blu-ray is in a directory called: `d:\godfather`. I would type this in the eac3to directory (i used 00000.mt2s because that is the movie itself in a single file, weighing in at 44 gigs):

```
eac3to d:\godfather\bdmv\stream\00000.m2ts
```

It will scan the file, and then list the tracks like this:
M2TS, 1 video track, 5 audio tracks, 8 subtitle tracks
1: Chapters, 23 chapters
2: h264/AVC, 1080p24 /1.001 (16:9)
2: TrueHD/AC3, English, 5.1 channels, 48khz, dialnorm: -27dB
   (embedded: AC3, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB)
4: AC3, English, 2.0 channels, 192kbps, 48khz, dialnorm: -27dB
5: AC3, French, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB
6: AC3, Spanish, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB
7: AC3, English, 2.0 channels, 192kbps, 48khz, dialnorm: -27dB
8: Subtitle (PGS), English
9: Subtitle (PGS), Spanish
10: Subtitle (PGS), French

### Step 2

Your main concern is the tracks for video and the main audio, which are usually tracks 2 and 3. In this example, we see that the video is track 2 the in AVC format, and we see that the main audio is track 3 in the TrueHD format. Those are the main 2 tracks we need. A low bitrate 2 channel track is usually the commentary. In this case track 7 is the commentary. So now, we need the video in an mkv container, and the audio in a more usable form. The possible command lines used will be (the file names can be anything you want):

If you want the audio in 100% lossless FLAC with the same bit-depth (lets say the audio is 24-bit and you want to keep it 24-bit), you would use this:

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodfatherVideo.mkv 3: d:\GodfatherAudio.flac
```

If you want to include the commentary you would use:

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodfatherVideo.mkv 3: d:\GodfatherAudio.flac 7: d:\GodfatherCommentary.ac3
```

If the original track is 24-bit but you would like to reduce it to 16-bit to save even more space, you would use:*

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodfatherVideo.mkv 3: d:\GodfatherAudio.flac -down16
```

If you want the audio re-encoded to DTS from a PCM or TrueHD lossless track, you would use: (eac3to automatically encodes DTS at full 1509kbps bitrate)

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodFatherVideo.mkv 3: d:\GodfatherAudio.dts
```

If you want the AC3 core track extracted from TrueHD, you specify the track number of the TrueHD and save it with a .ac3 extension: \*\*

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodFatherVideo.mkv 3: d:\GodfatherAudio.ac3
```

If you want the DTS core track from DTS-HD MA or DTS-HD HR, you add the -core switch after the destination file. If The Godfather had DTS-HD the command would be:

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodFatherVideo.mkv 3: d:\GodfatherAudio.dts -core
```

To prepare a track to use with the DTS Pro Encoder, affix a .agm extension to the output file, then load the .agm file in the encoder:

```
eac3to d:\godfather\bdmv\stream\00000.m2ts 2: d:\GodFatherVideo.mkv 3: d:\GodfatherAudio.agm
```

After it finishes doing its thing, you will end up with 2 (or more) files, a video file in the form of GodfatherVideo.mkv and an audio file in either GodfatherAudio.flac or GodfatherAudio.dts or GodfatherAudio. ac3, depending on which option you went with, plus any additional commentaries.

### Step 3

Open up MKVMerge GUI (which will be installed on your desktop from installing mkvtoolnix), and add the .mkv file and the audio files (FLAC, DTS, AC3) and then choose a filename at the bottom, then start the mux. Thats it! After that, you will need madflac installed to playback the FLAC in any player, or if its DTS or AC3, the built in decoders in MPC-HC or ffdshow will handle it.

### Extra Notes

- If the main audio is a plain DD5.1 AC3 track and it's track 3 (Warner movie with no lossless for example), to get that audio you would use 3: audio.ac3 in the command, and it will just extract the audio without any reencoding or converting. You can do that for any of the extra audio tracks.

\* You can save additional space by reducing 24-bit lossless or uncompressed tracks to 16-bit since 24-bit audio is unable to losslessly compress efficiently (24-bit FLAC files sourced from a Blu-ray will most likey average 4 megabits, while downconverted 16-bit versions will most likey average 1.4 megabits or lower). A 24-bit losslessly encoded track is usually 3x the size of a 16-bit version for an mostly unnoticeable improvement. And a 16-bit lossless track will always be better better than any lossy version.

\*\* While not exactly the same in structure as DTS-HD, TrueHD tracks also have an embedded lossy track for backwards compatibility with older hardware, in the format of AC3. You will see this situation often on Sony and Paramount discs.

Here's a rundown of how video/audio type will be handled depending on how you save it. Straight demuxing is only recommended for AC3 and DTS tracks.

**If the video is MPEG-4 AVC/H264**

* video.mkv would extract the video to mkv
* video.avc or video.h264 would demux the video (Not Recommended)

**If the video is VC1**

* video.mkv would extract the video to mkv
* video.vc1 would demux the video (Not Recommended)

**If the video is MPEG-2**

* video.mkv would extract the video to mkv
* video.mpg would demux the video (Not Recommended)

**If the audio is PCM:**

* audio.flac would compress the audio at 100% quality
* audio.ac3 would reencode the audio at 640kbps
* audio.dts would reencode the audio at 1509kbps
* audio.pcm would demux the audio

**If the audio is DTS-HD MA or HR**

* audio.flac would compress the audio at 100% quality
* audio.ac3 would reencode the audio (Not Recommended)
* audio.dts would demux the audio
* audio.dtshd would demux the audio
* audio.dts -core would extract the pre-encoded 1509kbps core (Recommended)

**If the audio is TrueHD**

* audio.flac would compress the audio at 100% quality
* audio.ac3 would extract the pre-encoded 640kbps core
* audio.dts would reencode the audio at 1509kbps
* audio.thd would demux the audio

**If the audio is DD/AC3**

* audio.flac would compress the audio at 100% quality (unnecessary)
* audio.ac3 would extract the audio (Recommended)
* audio.dts would reencode the audio (Not Recommended)

**If the audio is DTS**

* audio.flac would compress the audio at 100% quality (unnecessary)
* audio.ac3 would reencode the audio (Not Recommended)
* audio.dts would extract the audio (Recommended)

## Seamless Branching

If the movie is split over multiple m2ts files, you will have to combine them to make single video and audio files. Not to worry, eac3to can do most of the work. So, instead of using eac3to on a particular m2ts, point to the top directory of the Blu-ray you want to work with, like this:

```
eac3to e:\PINEAPPLE_EXPRESS\
```

Your results will be all the playlists, like this:

1. Sample 1

    ```
    00634.mpls, 1:57:27
    [321+334+323+335+325+336+327+337+329+338+331+339+333].m2ts
    - h264/AVC, 1080p24 /1.001 (16:9)
    - TrueHD, English, multi-channel, 48khz
    - TrueHD, French, multi-channel, 48khz
    - AC3, Spanish, multi-channel, 48khz
    - AC3, Portuguese, multi-channel, 48khz
    - AC3, Thai, multi-channel, 48khz
    - AC3, English, stereo, 48khz
    - AC3, English, stereo, 48khz
    ```
2.  Sample 2

    ```
    00632.mpls, 1:52:01
    [321+322+323+324+325+326+327+328+329+330+331+332+333].m2ts
    - h264/AVC, 1080p24 /1.001 (16:9)
    - TrueHD, English, multi-channel, 48khz
    - TrueHD, French, multi-channel, 48khz
    - AC3, Spanish, multi-channel, 48khz
    - AC3, Portuguese, multi-channel, 48khz
    - AC3, Thai, multi-channel, 48khz
    - AC3, English, stereo, 48khz
    - AC3, English, stereo, 48khz
    ```
3. Sample 3

    ```
    00665.mpls, 00341.m2ts, 0:21:08
    - h264/AVC, 1080i60 /1.001 (16:9)
    - AC3, English, stereo, 48khz
    ```
4. Sample 4

    ```
    00700.mpls, 0:32:43
    [300+301+302+303+342].m2ts
    - MPEG2, 480i60 /1.001 (16:9)
    - AC3, English, stereo, 48khz
    ```

Each playlist has the order, or branches, the m2ts's are played in. We see 2 different playlists for this particular movie. The playlist with the longer runtime is the unrated/extended cut and the playlist with the shorter runtime is the theatrical cut. The other two playlists are bonus content obviously. We want to remux the extended cut, so that playlist is specified by adding its number to the command, followed by a right bracket.

```
eac3to e:\PINEAPPLE_EXPRESS\ 1)
```

Then we will see the details of that playlist:

```
M2TS, 1 video track, 7 audio tracks, 15 subtitle tracks, 1:57:26
1: Chapters, 16 chapters
2: h264/AVC, 1080p24 /1.001 (16:9)
3: TrueHD/AC3, English, 5.1 channels, 48khz, dialnorm: -27dB
   (embedded: AC3, 5.1 channels, 448kbps, 48khz, dialnorm: -27dB)
4: TrueHD/AC3, French, 5.1 channels, 48khz, dialnorm: -27dB
   (embedded: AC3, 5.1 channels, 448kbps, 48khz, dialnorm: -27dB)
5: AC3, Spanish, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB
6: AC3, Portuguese, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB
7: AC3, Thai, 5.1 channels, 640kbps, 48khz, dialnorm: -27dB
8: AC3, English, 2.0 channels, 640kbps, 48khz, dialnorm: -27dB
9: AC3, English, 2.0 channels, 640kbps, 48khz, dialnorm: -27dB
10: Subtitle (PGS), English
11: Subtitle (PGS), English
12: Subtitle (PGS), French
13: Subtitle (PGS), Spanish
14: Subtitle (PGS), Portuguese
```

Add your preferences for video and audio output after the number and bracket, run the command, and combine the final video .mkv and audio file(s) like normal:

```
eac3to e:\PINEAPPLE_EXPRESS\ 1) 2: pineapple.mkv 3: pineapple.flac
```

### Extra note on seamless branching:

The audio tracks on some Blu-rays may have gaps in between the m2ts's. As you might guess by now, eac3to will fix it for you. Here's an example of what eac3to found when it got to the end of remux of a Blu-ray that had gaps:

```
[a05] Audio overlaps for 11ms at playtime 1:14:09.
[a05] Audio overlaps for 7ms at playtime 1:16:59.
[a05] Audio overlaps for 6ms at playtime 1:38:53.
[a05] Audio overlaps for 9ms at playtime 1:59:19.
[a05] Audio overlaps for 8ms at playtime 2:01:38.
[a05] Audio overlaps for 11ms at playtime 2:15:16.
[a05] Audio overlaps for 10ms at playtime 2:19:19.
[a05] Starting 2nd pass...
[a05] Decoding FLAC...
[a05] Realizing RAW/PCM gaps...
[a05] Encoding FLAC with libFlac...
[a05] Creating file "new.flac"...
```

eac3to found all the gaps and created a new FLAC file without the gaps using this information. You just to wait a little while longer for it to finish processing.

## Remuxed file sizes: (see how much you can save!)


Title | Full | Remuxed
----- | ---- | -------
The Italian Job 1969 Remuxed with FLAC from TrueHD | 43.6GB | 20.1GB
2001: A Space Odyssey Remuxed with FLAC from PCM | 34.8GB | 15.2GB
A Bug's Life Remuxed with 16-bit FLAC from DTS-HD MA | 41.6GB | 16.8GB
In My Father's Den Remuxed with FLAC from PCM | 45.0GB | 26.9GB
The Third Man Remuxed with FLAC from PCM | 40.3GB | 22.5GB
Dances with Wolves Remuxed with 5.1 DTS core from 7.1 DTS-HD MA | 43.1GB | 31.2GB
Fearless Remuxed with 5.1 FLAC from 7.1 PCM | 41.7GB | 30.0GB
Pineapple Express Remuxed with FLAC | 46.2GB | 17.8GB
House of Flying Daggers Remuxed with DTS core from DTS-HD HR | 28.1GB | 17.0GB
Fight Club Remuxed with DTS-ES | 46.0GB | 22.8GB
The Mummy 3 Remuxed with FLAC | 45.8GB | 17.4GB
Amélie Remuxed with FLAC and DD core from TrueHD | 36.5GB | 25.6GB
Dark City Director's Cut Remuxed with DTS core from DTS-HD MA | 42.3GB | 15.6GB
Ong-Bak Remuxed with DTS core from DTS-HD HR | 21.5GB | 15.1GB
Beetlejuice Remuxed with DD core from TrueHD | 20.3GB | 13.8GB
The Science of Sleep Remuxed with FLAC from PCM and DD | 39.2GB | 15.3GB
Infernal Affairs Remuxed with FLAC and DTS from PCM | 22.9GB | 15.1GB
Infernal Affairs 2 Remuxed with FLAC from DTS-HD MA | 19.6GB | 13.7GB
Hero Remuxed with FLAC and DTS core from DTS-HD MA | 27.0GB | 18.9GB
Almost Famous Remuxed with FLAC and DTS from TrueHD | 37.2GB | 31.5GB
Ip Man Remuxed with 5.1 FLAC from 7.1 PCM | 39.7GB | 19.5GB

## Lastly...
Here's an another guide in case I missed something: http://en.wikibooks.org/wiki/Eac3to/How_to_Use

Here are some nice GUIs: Another EAC3to GUI Plus, Eac3to and More GUI, HD-DVD/Blu-Ray Stream Extractor
