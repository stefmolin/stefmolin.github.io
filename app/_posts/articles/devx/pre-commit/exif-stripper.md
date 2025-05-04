---
title: "Mind Your Image Metadata"
subtitle: "A brief introduction to image metadata and how to remove it with exif-stripper."
excerpt: "Most devices record a variety of metadata when generating images. While some of that information *may* be innocuous, you could end up exposing the GPS coordinates to your home if you aren't careful. In this article, I provide a brief introduction to image metadata, and then show you how to remove it with `exif-stripper`."
date: "2024-10-09T09:00:00.000-04:00"
modified: "2024-11-13T08:55:00.000-05:00"
author: Stefanie Molin
tags: ["DevX", "pre-commit hooks", "Python", "projects", "open source software"]
ogImage:
  url: "https://github.com/stefmolin/exif-stripper/raw/main/logo.png"
  caption: "exif-stripper logo"
  width: 269
  height: 176
featured:
  - "[Python Bytes Episode #406](https://pythonbytes.fm/episodes/show/406/whats-on-django-tv-tonight)"
  - "[PyCoder's Weekly Issue #652](https://pycoders.com/issues/652)"
  - "[Talk Python to Me Episode #482](https://talkpython.fm/episodes/show/482/pre-commit-hooks-for-python-devs)"
---

![Stefanie Molin presenting at PyCon Estonia](/assets/events/conferences/pycon-estonia-2024.jpg)

<figcaption>

Photo by Johan Viirok for PyCon Estonia.

</figcaption>

This is me presenting at the PyCon Estonia conference earlier this year. The picture was taken by one of the official event photographers. I don't remember seeing the photographer take this picture, and, even if I had, I most definitely couldn't tell you the make and model of the camera or the settings used to take the photograph. Except, now that I have access to the resulting image, I *can*.

Most devices (cameras, smartphones, *etc.*) record a variety of metadata when generating images. Some things like information on the camera itself *may* be innocuous (although, you may not want people seeing what kind of device you have), but others like the latitude and longitude can be *extremely* dangerous, depending on where you happen to be when the picture is taken and what you do with it afterwards.

Image metadata is stored using the **Exchangeable Image File Format** (**EXIF**). To see all of an image's EXIF metadata, you can run the `exiftool` tool on the command line (may require [installation](https://exiftool.org/install.html) first) or use the [Pillow](https://pillow.readthedocs.io/en/stable/index.html) Python package. Here, I've run it on the original file and reorganized some of the output for readability and brevity (there are well over 300 pieces of information on this particular file):

```shell[class="command-line"][data-prompt="$"][data-output="2-25"]
exiftool pycon-estonia-2024.jpg
Make                   : SONY
Camera Model Name      : ILCE-7M3
Megapixels             : 10.7
Lens Info              : 28-75mm f/2.8
Lens Model             : E 28-75mm F2.8-2.8
Focal Length           : 66.0 mm
Exposure Time          : 1/100
F Number               : 2.8
Shutter Speed Value    : 1/100
Aperture Value         : 2.8
Brightness Value       : 1.30234375
Flash                  : Off, Did not fire
Image Size             : 4000x2667
Software               : Adobe Photoshop Lightroom Classic 13.4 (Macintosh)
Artist                 : Johan Viirok
Headline               : Pycon Estonia 2024
City                   : Tallinn
State                  : Harjumaa
Country                : Estonia
GPS Latitude           : 59 deg 23' 41.60" N
GPS Longitude          : 24 deg 39' 38.58" E
Date/Time Created      : 2024:09:06 11:41:24+03:00
Modify Date            : 2024:09:17 10:31:00+03:00
... +300 others
```

If your device includes location metadata by default, GPS coordinates for the **exact** location of *every* picture you take will be stored. In this case, the latitude and longitude correspond to [Mektory](https://maps.app.goo.gl/4K7xdyFrB5fDm7AT6) in Tallinn, Estonia:

```shell[class="command-line"][data-output="1-2"]
GPS Latitude           : 59 deg 23' 41.60" N
GPS Longitude          : 24 deg 39' 38.58" E
```

Having location information on your photos *can* be a nice feature as far as recording memories (*e.g.*, travel photos). However, odds are you don't change your location settings with each picture you take, and, depending on where you choose to upload your pictures, your sensitive metadata may be accessible to others. Some platforms may remove the metadata for you, but you would need to remember to test it out first.

For example, imagine you take a headshot from the comfort of your home and put it on your website. Unless you removed the metadata before uploading it (or configured your device not to record it), someone could download it from your website and look at the metadata to see where you live. Depending on what other things you put on your website, they could also figure out places you frequent, where your friends and family live, *etc.*

---

I created [exif-stripper](https://github.com/stefmolin/exif-stripper) to make it easy to protect myself. It can be used as a [pre-commit hook](/articles/devx/pre-commit/setup-guide/), command line utility, or Python package. For my website, I use it as a pre-commit hook, so I can add images without having to remember to process them beforehand. Just add the following to your `.pre-commit-config.yaml` file:

```yaml
- repo: https://github.com/stefmolin/exif-stripper
  rev: 0.6.1
  hooks:
    - id: strip-exif
```

When used as a pre-commit hook, `exif-stripper` blocks any commits that have image metadata (EXIF and also extended attributes on some operating systems). In addition to blocking the commits, it also removes the image metadata. Here, I ran the hook manually on the file we have been working with. Notice that the check fails, and the tool has removed the image's metadata:

```shell[class="command-line"][data-prompt="$"][data-output="2-6"]
pre-commit run --files pycon-estonia-2024.jpg
strip EXIF metadata.......................................Failed
- hook id: strip-exif
- exit code: 1

Stripped EXIF metadata from pycon-estonia-2024.jpg
```

When I run `exiftool` on the image afterward, only the following general information remains:

```shell[class="command-line"][data-prompt="$"][data-output="2-24"]
exiftool pycon-estonia-2024.jpg
ExifTool Version Number         : 12.76
File Name                       : pycon-estonia-2024.jpg
Directory                       : .
File Size                       : 669 kB
File Modification Date/Time     : 2024:10:06 20:47:27-04:00
File Access Date/Time           : 2024:10:06 20:47:28-04:00
File Inode Change Date/Time     : 2024:10:06 20:47:28-04:00
File Permissions                : -rw-r--r--
File Type                       : JPEG
File Type Extension             : jpg
MIME Type                       : image/jpeg
JFIF Version                    : 1.01
Resolution Unit                 : None
X Resolution                    : 1
Y Resolution                    : 1
Image Width                     : 4000
Image Height                    : 2667
Encoding Process                : Baseline DCT, Huffman coding
Bits Per Sample                 : 8
Color Components                : 3
Y Cb Cr Sub Sampling            : YCbCr4:2:0 (2 2)
Image Size                      : 4000x2667
Megapixels                      : 10.7
```

Note that this time I'm showing the full output of the tool, meaning we removed roughly 300 metadata values from the file. As you would expect, this also helps reduce file sizes: the image was initially 942 kB and is now 669 kB (nearly a 30% reduction in size). The reduction achieved will depend on how much metadata the file starts with.

---

For the time being, as this was something I initially built for my website, I'm being overly cautious and removing all metadata. In the future, I plan to add ways to control what is removed or kept; for example, there could be an option to keep information about how the picture was taken (aperture, shutter speed, flash, camera specifications, *etc.*), while removing everything else. Contributions are welcome, but please review the [contributing guide](https://github.com/stefmolin/exif-stripper/blob/main/CONTRIBUTING.md) first.

Let me know in the comments below or on social media ([LinkedIn](https://www.linkedin.com/in/stefanie-molin/) or [X](https://twitter.com/StefanieMolin)) how you keep your sensitive metadata safe.
