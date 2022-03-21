---
title: H.264 Advanced Guide
tags:
  - h264
---

Source: https://app.zencoder.com/docs/guides/encoding-settings/h264-advanced

This page documents H.264-specific encoding with Zencoder. Zencoder encodes H.264 content using a variety of software, but our core encoder is the excellent x264, the best H.264 encoder available, and one of the best video encoding implementations for any codec. H.264 is the dominant video codec today for web and mobile video.

## H.264 Overview

The dominant video codec today for web and mobile video is H.264. Its compression quality ranks among the best of the modern codecs along with HEVC and VP9.

H.264 can be played in 99.9% of web browsers, on many mobile devices (including the iPhone/iPad, Android), as well as many connected television and streaming devices. It is also an excellent codec for desktop video.

H.264 is typically deployed in the MP4 file container. Valid extensions include .mp4, .m4v (mp4 video), .f4v (mp4 video for Flash) and .ts. Note that .flv is not a recommended file extension for H.264 Flash video — .f4v is preferred.

AAC and MP3 audio codecs are valid alongside H.264.

## H.264-specific notes on general options

`crf`: CRF is a bitrate-control setting, and sets a constant ratefactor. This is closely related to constant quantizer encoding, though CRF mode generally achieves better compression than constant Q encoding by reducing the quantizer quality on "less important" frames. Read more about crf.

The Zencoder Quality setting determines an appropriate CRF for a given video. So if you set both Quality and CRF, the CRF setting will override Quality.

Valid values are 0-51, with lower values being better quality. Generally speaking, you shouldn't have to go below 16; 16 is nearly lossless for most files. Around 24 usually looks pretty good. Around 35 looks pretty compressed.

`video_codec_profile`: The supported H.264 profiles are: baseline, main, high, high10, high422, high444. Lower levels are easier to decode, but higher levels offer better compression and extended features. For example, some older phones only supports the Baseline profile, which we use by default. The Main and High profiles are a definite step up in compression, and work fine for web playback. Try High for the best quality, and Baseline for mobile device support. Default: "baseline".

`video_codec_level`: constrains the bitrate and macroblocks. Primarily used for device compatibility. For example, the iPhone supports H.264 Level 3, which means that a video's peak bitrate can't exceed 10,000kbps. Only use this setting if you're targeting a specific device that requires it. List of valid values. Default: 3.

`tuning`: "tune" the output video to a specific content type. Useful values are "animation" for animated content, "film" for live-action content (not just movies), and "grain" to improve encoding of grainy content. Valid values: film, animation, grain, psnr, ssim, fastdecode, or zerolatency. Default: none.

`speed`: Zencoder supports speed as a range from 1-5 for H.264. A lower speed results in slightly better compression, while a higher speed results in slightly worse compression.

### crf

CRF is a bitrate-control setting, and sets a constant ratefactor. This is closely related to constant quantizer encoding, though CRF mode generally achieves better compression than constant Q encoding by reducing the quantizer quality on "less important" frames. Read more about crf.

The Zencoder Quality setting determines an appropriate CRF for a given video. So if you set both Quality and CRF, the CRF setting will override Quality.

Valid values are 0-51, with lower values being better quality. Generally speaking, you shouldn't have to go below 16; 16 is nearly lossless for most files. Around 24 usually looks pretty good. Around 35 looks pretty compressed.

### video_codec_profile

Sets the encoding profile used by the video codec.

* H.264 profiles: baseline, main, high, high10, high422, high444.
* HEVC profiles: main, main10, main12, main422-10, main422-12, main444-8, main444-10, main444-12.
* VP9 profiles: 0, 1, 2, 3.

In general, lower levels are supported by a wider range of devices and may be simpler to decode. Higher levels offer more features such as additional bit depths and chroma subsampling choices. In some cases, higher levels also support increased compression efficiency.

### video_codec_level

Constrains bitrate, macroblocks (H.264) or bitrate, coding tree units (HEVC).

Primarily used for device compatibility. For example, the iPhone supports H.264 Level 3, which means that a video’s decoder_bitrate_cap can’t exceed 10,000kbps. Typically, you should only change this setting if you’re targeting a specific device that requires it.

### decoder_bitrate_cap

The max bitrate fed to the decoder via a buffer. This setting is typically used only for streaming (RTMP, HLS, or broadcast video).

Only use this setting if you understand its implications, as it can decrease video quality.

### tuning

Tune the output video to optimize for a specific content type, or a specific encoding priority.

Behind the scenes, this sets the x264 `--tune` option.

Possible values:

* film - optimized for most non-animated video content (not only feature films).
* animation - optimized for animation. Note that most 3D animation behaves more like film and not like hand-drawn animation, so only use this for hand-drawn animation (anime, classic Disney, etc.).
* grain - optimized for film with high levels of grain.
* psnr - uses "peak signal-to-noise ratio" to optimize video quality.
* ssim - uses "structural similarity" to optimize video quality.
* fastdecode - reduces encoding complexity, to allow for easier decoding.
* zerolatency - x264 will keep an internal buffer of frames to improve quality; this setting removes that buffer, but reduces quality.

### speed

A target transcoding speed. Slower transcoding allows for more advanced file compression, while faster transcoding is possible by skipping some advanced compression features. Valid values are 1-5.

Note: at the moment, only H.264 output has five speed levels. For VP6 content, 1-2 are a slower mode, and 3-5 are a faster mode. Other video codecs do not support this setting at all.
