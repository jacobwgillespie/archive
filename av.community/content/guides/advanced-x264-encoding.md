---
title: Advanced x264 Encoding Guide
tags:
  - x264
  - h264
---

## Getting to Know Your x264

x264 is a harsh mistress. Despite mostly being used to compress movies, it is for some reason highly optimized for anime tentacle porn. On top of that, there is no built-in gui for beginners and the available documentation seems only to exist so that it may taunt and humiliate the average person. Well fear not! Even though I haven't encoded anything for the site in probably over a year, I'm here to guide you through (most of) x264's meaningful parameters so you can become better at encoding. And as a bonus, writing this will keep the staff from demoting me to a userclass where the rest of you filthy swine reside. So, without further ado...

## Ref

This is a no-brainer parameter that requires no testing but is critical for yielding the highest possible quality without breaking standalone device (Popcorn Hour, WDTV Live, Roku) playback. Taken directly from the HD encoding guide:

Once you have cropped your source in AvsPmod or whatever other script editor you are using, take the equation 8388608 / (width after cropping x height after cropping), inputting your source's width and height in what I hope are obvious enough placeholders. Take the result and round it down to the nearest whole number. This is the number you are to use for the `--ref` setting.

If you use a number larger than what the formula yields for a 720p or 1080p encode, it will still play but will only look slightly better and will not play on standalone devices.

If you are encoding to a Standard Definition resolution (i.e. smaller than 720p), you may skip the math and simply use 16 as your ref number.

Keep in mind that by design, you cannot use a number larger than 16 here.

## B-frames

B-frames have a fair amount of control over the compressibility (size) of your encode. More bframes = longer encoding time but also smaller file sizes. But you cannot exactly force more bframes into an encode if x264 decides it doesn't need them... well, not without using b-bias and catastrophically breaking things. Anyway, the ideal number of b-frames needed for an encode can be determined in a single test encode. And by 'single' I mean you'll need to use the avisynth filter SelectRangeEvery() to grab a few thousand frames to test using `--bframes 16`. x264 will spit out a log file when the test encode is done. Somewhere in this log will be a line that looks like this:

```
x264 [info]: consecutive B-frames: 0.5% 1.1% 3.6% 24.0% 14.4% 43.3% 4.0% 3.4% 1.1% 1.4% 0.5% 0.9% 0.3% 0.3% 0.2% 0.9% 0.1%
```

There are 17 values listed. Each one represents a specific number of b-frames, from 0 to 16. Each value shows the percentage of total frames that were able to make use of that number of consecutive b-frames. From these numbers I usually select the largest one ≥ 1.0% but have made exceptions for 0.9% values.

## CRF and 2-Pass

Whether you choose to encode crf or 2-pass, this setting will have the most significant impact on your encode's overall quality. With 2-pass, you choose a bitrate. With crf you choose a quality level in the form of a numerical rate factor. The bitrate/quality will vary throughout the extent of whatever you are encoding, but will average out to whatever your input for this value was.

CRF and 2-pass use the exact same algorithm and therefore there is literally no advantage to using one over the other. If a crf 20 encode gives you an average bitrate of 6000 kbps, a 2-pass encode @ 6000 kbps will yield the exact same quality. Additionally, the log from the first pass of a 2-pass encode will give you the equivalent rate factor one would use for a crf encode.

Again, there is NO advantage to either method. Many people prefer 2-pass due to not fully understanding how to use the next setting I'll go over. Others will do test encodes with both crf and 2-pass to achieve ideal quality. My preference happens to be crf, but only because I feel that bitrate / filesize should be irrelevant and picture quality should never be compromised. Then again, everything I've ever encoded is like 400 GB...

Reasonable bitrates for 2-pass/crf will vary depending on your source and a few other settings. I can't say much on bitrate, but crf should nearly always be between 16 and 23.

## QComp

While crf and 2-pass affect the overall quality of the encode, qcomp affects how crf and 2-pass are applied. Next to crf/2-pass it is the most important x264 parameter for afecting the quality of your final encode. qcomp will always be a number between 0.0 and 1.0. At 0.0, your crf number or 2-pass bitrate will yield a constant bitrate throughout the entire encode. At 1.0, the encode's bitrate variance is completely uncapped and so will flail around like a crack-addicted preschooler.

The default is 0.6 but for live-action should be bumped to 0.7, or 0.75 for sources with a lot of grain/noise. For lower quality sources with little or no grain, low-quality animation or dark movies without much grain you can try around 0.55 or 0.5. Essentially the viable qcomp range for any source will be (roughly) 0.45 - 0.75.

This is a setting where testing multiple values is definitely worth it.

## ME and MERange

ME (Motion estimation) and MERange (Motion estimation range) help x264 predict motion across frames and compress at a higher level of quality based on the information these two parameters allow it to gather. The higher the quality of the motion estimation algorithm and the higher the motion estimation range, the greater the quality yielded. BUT this also means increased encoding time. Also, as expected, you'll begin to see diminishing returns with respect to quality as you increase these two parameters.

For our purposes however, these two parameters are dead simple. If your computer has an older/slower processor, use `--me umh --merange 24`. These were determined to be the best tradeoff between quality and encoding time, and umh is highly capable of yielding the kind of quality you should be striving for. However, for those of you with faster hardware that want a bit more quality: `--me tesa --merange 16` is the final word here.

## AQ-Mode

`--aq-mode` affects how the next setting we'll discuss, `--aq-strength`, is applied. There are three options available to you. `--aq-mode 2` was supposed to replace mode 1, but is one of those things that appears to have been optimized at least slightly for anime tentacle porn. Mode 2 should work better on lower quality sources or those that have very little grain. For everything else, you'll want to use `--aq-mode 1`. It's not perfect but as of right now there is no better alternative. It works well enough. Please note that `--aq-mode 0` disables `--aq-strength` entirely and should never be used.

## AQ-Strength

In any given frame, x264 gives priority (more bitrate) to higher-quality macroblocks. `--aq-strength` determines the magnitude of that priority. 1.00 is the default. Anything above 1.00 will, increasingly, give more and more priority to lower-quality macroblocks. Lower than 1.00 will give more priority to higher-quality macroblocks. Generally everything you encode should have an `--aq-strength` between 0.50 and 1.30.

Higher quality sources and sources with more grain/noise will benefit from lower `--aq-strength` values.

Lower quality sources, non-HD sources, etc should benefit more from higher values.

## MBTree

While most of what x264 does handles compression within a given frame, mbtree looks to compress information across frames. Yet another x264 parameter dreamt up to improve anime tentacle porn compression, mbtree is a solid idea that actually performs quite poorly on most higher quality live-action sources.

This parameter is enabled by default but can be turned off with `--no-mbtree`. MBTree should be turned off for any source with even a modest amount of grain/noise. It will help on lower-quality sources, many DVDs, anything shot on a digital camera (The Social Network, District 9, etc), but due to the somewhat random nature of video grain, will significantly increase an encode's bitrate if the source was grainy/noisy.

RC-Lookahead is another x264 setting that directly affects how many frames mbtree takes into consideration during an encode. This is important as mbtree is known for performing badly in scene fades (fading to or from black). To mitigate this, I recommend using `--rc-lookahead 250` on literally every encode you do that uses mbtree. The only downside to this is that if your computer has 2 GB of memory or less, it will be somewhat unusable during the encoding process.

It should be noted that qcomp affects how mbtree is applied, but not in a way that your usage of mbtree should affect your decisions with qcomp in any way whatsoever.

## Psy-RDO and Psy-Trellis

These two settings are controlled by a single parameter, in the format `--psy-rd x.xx:y.yy`. Psy-RDO is x.xx and Psy-Trellis is y.yy Psy-RDO should be used on any source that isnt completely devoid of grain. Psy-Trellis is an unwieldy bastard that can either save a reasonable amount of bitrate or destroy picture quality.

Technically, psy-rdo lowers picture quality on a mathematical level. But it also applies a layer of noise to the encode in a way that increases the perceived complexity of the video. Given that noise/grain in any given source is somewhat random to begin with, this is actually a good thing. It increases the visually perceived quality level while allowing the overall bitrate/filesize to be decreased.

Psy-rdo also assumes that grain was applied evenly throughout each frame in the source. Psy-trellis does not, and is useful if you have a source where parts of a frame are grainier than others. If you can look through a source and see that grain is blanketed evenly throughout each frame, it is probably better to keep psy-trellis disabled. Otherwise, you should test psy-trellis.

Psy-RDO is mostly just about grain matching. For most live-action, generally a value between 0.90 and 1.30 will suffice. For most animation, 0.50 to 0.90 is a good testing range. Once you have found your source's ideal psy-rdo value, you can test psy-trellis. I recommend running 6 test encodes with psy trellis: 0.05, 0.10, 0.15, 0.20, 0.25 and 0.30. The 6 test encodes should be a few thousand frames long, again using SelectRangeEvery(), and should be compared against a test encode with psy-trellis disabled. If one of the encodes with psy-trellis enabled looks the best, leave that psy-trellis value but do a few tests with slight changes to psy-rdo.

## Deblock

Deblock smooths out the blockiness that can occur in a lower-quality source or occasionally in a lower-quality x264 encode. Deblock consists of two numbers. The first number is the strength of the deblocking filter, and the second is the threshold at which the filter decides whether something is a block or detail that needs to be preserved. Generally you should use `--deblock -3,-3` for everything that isnt a terrible quality source. You can go below `-3,-3` (as low as `-6,-6`) if you want, but I wouldn't recommend that unless you're a huge fan of placebos or your television is by far the most expensive thing you own.

## SSIM

Adding `--ssim` to your x264 parameters can be useful for test encodes. It will give you data on ssim/db which will give you a fairly accurate numerical representation of fidelity with respect to your source. This number becomes more useful when comparing multiple test encodes, and much less useful if the encode(s) used psy-rdo in any way. Please take note that when trying to reach visual transparency, db is a better choice over ssim simply for the fact that it follows a linear scale as it approaches 100% transparency, while ssim follows a logarithmic scale which by design devalues visual improvement increasingly as you approach transparency.

## VF

`--vf` aka video filter, is an early attempt at replacing core avisynth filters with filters built-in to x264. Avisynth is a critical part of video encoding but also a significant bottleneck in terms of encoding time and is the only real hurdle keeping x264 encoding from being viable on non-windows platforms. For practical purposes I will only discuss how using `--vf` will improve encoding time:

```
--vf crop:{left},{top},{right},{bottom}/resize:{width},{height},0:0,method=spline
```

...will allow you to crop and/or resize your source video without the need for using an AviSynth script. Do not use this parameter in your test encodes, only for the full encode. For the full movie encode, you will copy any cropping and resizing numbers from the `.avs` test script to this parameter. Crop should always be before resize. Anything outside of brackets should be left the same. The / is for separating the crop and resize filters. If you do not need to resize the source video, omit the / and everything after it.

## Minor Settings

The following settings, for now, probably don't merit an in-depth explanation as they should remain the same for everything you encode:

`--b-pyramid normal`

`--no-dct-decimate`

`--analyse all` / `--partitions all` &mdash; These two parameters are interchangeable. Many sites/guides still refer to this parameter when mentioning L4.1 (standalone device) compatibility. And while it is technically part of the L4.1 standard, no standalone device actually adheres to this portion of it. In other words, you can safely use `--analyse all` / `--partitions all` on every encode and still not break standalone device playback in any way.

`--direct auto`

`--b-adapt 2`

`--trellis 2`

`--no-fast-pskip`

`--subme 11`

`--no-weightb` &mdash; May help quality retention on CGI material. Otherwise, don't use this parameter.

## Final Notes

Please consider this to be a (very) rough draft. If I made a mistake or left something out, let me know.
There are many parameters that you may have seen used in other encodes. More than likely these were attempts to limit overall bitrate and contribute nothing of value to the overall encode other than to keep the bottom-feeders from complaining about the file size.

Some of the parameters' suggested testing ranges are rather large. In most of these I have specified where you can cut down on test encodes if you know enough about the type of source you have. In others I have intentionally left them 'open' for the time being. Myself and several others are working on a thought-to-be-dead project to automate x264 test encoding, and much of what we will be doing in the near future will be geared towards slimming down the testing range and in effect eliminating a large number of test encodes required to reach visual transparency. In other words, this is a DRAFT so don't bitch about the test ranges just yet.

# Further enhancements

* Explain succinctly H.264 levels, and the whole CABAC or not CABAC deal
* Expand on how you can make an encode most compatible (what you mention about breaking device compatability)
* How the above relates to section 3.1 on the scene rules for x264 http://scenerules.irc.gs/t.html?id=2011_X264.2.nfo
* Use a couple of your encode strings as an example and explain why you chose them.

Source: https://www.reddit.com/r/trackers/comments/wevh2/good_beginning_x264_reference_guide/?st=iykv0fdu&sh=6a965450
