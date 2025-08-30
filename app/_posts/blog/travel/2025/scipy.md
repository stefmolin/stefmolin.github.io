---
title: "SciPy 2025 🇺🇸"
subtitle: "Highlights from presenting at this year's conference in Tacoma."
excerpt: "After PyCon Italia in May, I had the full month of June at home. I used this time without any travel to update two of my workshops for the SciPy conference. For the first time ever, I would be presenting two workshops at a single conference &ndash; both of which were four hours long."
date: "2025-07-14T23:00:00.000-04:00"
author: Stefanie Molin
tags: ["conferences", "reflection", "travel", "updates"]
assets: "/assets/blog/travel/2025/scipy"
ogImage:
  url: "/post-assets/mount-rainier.jpg"
  width: 2200
  height: 1467
---

After [PyCon Italia](/blog/travel/2025/pycon-italia) in May, I had the full month of June at home. I used this time without any travel to update two of my workshops for the SciPy conference. For the first time ever, I would be presenting two workshops at a single conference &ndash; both of which were four hours long: [(Pre-)Commit to Better Code](/workshops/pre-commit-workshop/), which I presented at [PyCon US](/blog/travel/2025/boston-pittsburgh) in May, and [Introduction to Data Analysis Using Pandas](/workshops/pandas-workshop/), which I hadn't presented [since 2024](/blog/travel/2024/pycon-portugal).

I typically update my workshops once a year, but due to some personal matters in the beginning of the year and preparing [my keynote](/talks/#build-your-own-(simple)-static-code-analyzer) for [PyCon Lithuania](/blog/travel/2025/baltics) in April, I hadn't gotten around to updating my pandas workshop for 2025. Additionally, I had several `uv` users in my PyCon US workshop on pre-commit that I wasn't able to fully support, so I wanted to do an additional update for that workshop, even though it had already had its yearly update. As the month of June flew by, I made numerous improvements to the workshops and my processes for maintaining them that will make my life easier in the years to come. Before I knew it though, it was time to board the plane to Seattle for SciPy in nearby Tacoma.

---

Back in 2021, I took a road trip along the west coast from Seattle down to San Diego, so it didn't bother me at all to be in Tacoma instead of Seattle. For this trip, I opted to take advantage of a quieter, slower pace, especially since it was going to be a busy travel month, with PyCon Portugal coming up in two weeks. The closest I got to any nature on this trip was the stunning view of Mount Rainier, where I had spent a full day back in 2021, from the window of my hotel room.

![Mount Rainier at sunset](/post-assets/mount-rainier.jpg)

<figcaption>

Mount Rainier at sunset. Source: Stefanie Molin.

</figcaption>

The conference began the day after I arrived, and I presented my [Introduction to Data Analysis Using Pandas](/workshops/pandas-workshop/) workshop in the afternoon. There was a guy in the front row without a laptop, using a notepad, which I always find interesting because these are usually the people that end up paying the most attention and engaging the most with me, despite not being able to code anything. Afterwards, this attendee told me that his laptop and luggage was stolen out of his rental car in Seattle the day before (not that he needed to explain his lack of a laptop to me because I feel like I've seen it all at this point). He also mentioned that it's not easy to make data analysis engaging, but I succeeded in it ❤️

After four hours of talking, my throat was bothering me, and no amount of hard candy or tea was helping, so I resolved to lay low that evening. I ended up having an early dinner at the Japanese restaurant (with a sake bar!) next door to the hotel, where I had also eaten the previous night 😆,<sup id="footnote-1"><a href="#footnotes">1</a></sup> and heading to bed early to be well-rested for my second workshop.

Since my [(Pre-)Commit to Better Code](/workshops/pre-commit-workshop/) workshop was in the afternoon, I spent the morning running through things one final time &ndash; I had recently added new things for `uv` users, and I wanted to double check everything was in order before sharing it with an audience. Being a four-hour workshop, we had the time for people to experiment with their own ideas for pre-commit hooks, and one of the attendees made something to check for the comment density of student code submissions, which I thought was very clever and made me hearken back to [that one semester I spent as an adjunct professor](/blog/updates/2023/to-be-or-not-to-be/).

---

After two days of tutorials, the talks portion of the conference began. I sat in on an interesting talk about versioning schemes by Jacob Tomlinson in which he shared his [EffVer](https://jacobtomlinson.dev/effver/) proposal, which definitely got me thinking about whether I use this for my projects without explicitly saying so 🤔 In the evening, the conference had a social event at the Museum of Glass (one of the main attractions of Tacoma), and we were able to visit the galleries 🤩 I can't recall ever being in a museum like this after hours, and it was a very fun event.

When I was in Seattle back in 2021, I heard a lot about the glass artist [Dale Chihuly](https://en.wikipedia.org/wiki/Dale_Chihuly), so it was kind of a full-circle moment to see many of his pieces both in the museum and in the outdoor installations on the way there. This wasn't the only such moment at the museum though: as I was on my way out, I happened to see a timeline of glass artistry on the wall and recognized one of the Byzantine-era art pieces &ndash; it was one of the mosaics from Ravenna, Italy that I had admired in person [just over a month ago](/blog/travel/2025/pycon-italia).

Over the next few days, in addition to more talks, I discovered several good coffee shops and a nearby bubble tea place, did a couple of wine tastings at the [Water from Wine](https://waterfromwine.org/) tasting room,<sup id="footnote-2"><a href="#footnotes">2</a></sup> and visited the Washington State History Museum, which had a very interesting special exhibit on Gilded Age fashion,<sup id="footnote-3"><a href="#footnotes">3</a></sup> in addition to one on native artists.

![collage of photos from exhibits in the Museum of Glass and Washington State History Museum](/post-assets/museum-collage.jpg)

<figcaption>

Clockwise from top left: four glass installations from the Museum of Glass, native artist's painting participating in the Washington State History Museum's art contest, one of the bird hats from the Gilded Age fashion exhibit in the Washington State History Museum. Source: Stefanie Molin.

</figcaption>

On the final day of the conference, I spent my sprint time working on my personal project, [Docstringify](https://github.com/stefmolin/docstringify), after finding a few bugs I hadn't noticed when I designed the initial algorithm back at the [PyCon US](/blog/travel/2025/boston-pittsburgh) sprints. And just like that<sup id="footnote-4"><a href="#footnotes">4</a></sup> it was time to go home.

<small id="footnotes">
<hr />

1. This also wasn't the last time I would eat at [THEKOI](https://www.thekoisushi.com/) during my week in Tacoma &ndash; I highly recommend it 😋 <a href="#footnote-1">↩</a>
2. This winery donates all the profits from their reds to clean water charities. <a href="#footnote-2">↩</a>
3. I particularly enjoyed the video showing a man and woman getting dressed for an afternoon promenade to show off (lots of steps, so many that people typically had staff to dress them). It was also apparently in style at one point to wear actual birds on your head like hats &ndash; it definitely seemed like something Carrie Bradshaw would wear. <a href="#footnote-3">↩</a>
4. See the footnote above. <a href="#footnote-4">↩</a>

</small>
