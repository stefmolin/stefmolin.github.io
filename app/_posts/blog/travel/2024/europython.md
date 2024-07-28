---
title: "EuroPython 2024 🇨🇿"
subtitle: "Highlights from presenting and organizing a development sprint at this year's event in Prague."
excerpt: "EuroPython 2024 was a conference of firsts for me: my first time presenting my new workshop on pre-commit hooks and my first time organizing a development sprint. During my time there, I was also feeling very creative and built out some new pages for my website. In this post, I share my experiences during this week."
date: "2024-07-28T19:18:00.000Z"
author: Stefanie Molin
tags: ["conferences", "reflection", "updates"]
assets: "/assets/blog/travel/2024/europython"
ogImage:
  url: "/post-assets/old-town-square.jpg"
  width: 1200
  height: 904
---

![view of Prague Castle from the Charles Bridge](/post-assets/charles-bridge.jpg)

<figcaption>

View of Prague Castle from the Charles Bridge. Source: Stefanie Molin.

</figcaption>

A had a few goals in mind on my journey to Prague this year: I wanted to run a successful workshop, see something new in Prague, and, most importantly, avoid getting food poisoning like I did at last year's PyCon CZ 😂 However, just a few hours into my journey there, I knew I was in for some trouble: I had accidentally packed my ibuprofen in my checked bag, and I could feel a headache starting. We had to wait over two hours in the number one slot to takeoff due to weather, so I missed my connection in Germany. It was here that I truly learned my lesson: you cannot buy any medication outside of the pharmacy in Germany. The fact that it was a redeye had only worsened my headache, and I was unable to do anything about it. I tried breathing exercises, chewing gum (in the absence of essential oils), and the Lufthansa lounge liquor selection &ndash; it was five o'clock somewhere!

When it was finally time to board the short flight to Prague, I was dismayed to realize that if I tried closing my eyes to help with the headache, I began to feel extremely nauseous. It may not have been food poisoning, but this trip was not off to a good start. Couple this with heavy turbulence and the woman in front of me getting very sick &ndash; I'm thankful to have made to it to Prague without any incident. I couldn't wait to get off of the plane and breathe fresh air. I quickly found a cold sparkling water and made my way to baggage claim to be reunited with my ibuprofen. Before grabbing an Uber, I dug it out of the suitcase right at baggage claim. I briefly weighed whether taking it on an empty stomach was a good idea (I couldn't stand the smell or sight of food since the redeye), but ultimately decided that it was more urgent to get relief from the headache.

I barely held my water down on the ride from the airport to the hotel. When I checked in, they informed me that it was the same room as last time... I will never know if they meant the same type of room (as in the upgrade), or if it was the exact same room from the food poisoning episode. Six or so hours later than planned, I made it to the solitude of my hotel room. They had a plate of chocolate covered strawberries to greet me, but I still couldn't even think of eating.

Normally, after a redeye, I force myself to stay awake to adjust, but I was in no condition to do anything, so I took a nap. When I awoke, my headache was mostly gone, and I was finally hungry. I ordered some room service and tried the chocolate covered strawberries (delicious and in-season 😋), while watching some Netflix. Thankfully, I wasn't presenting the next day, and I took it easy on Sunday.<sup>1</sup>

---

![EuroPython 2024 banner](https://pbs.twimg.com/card_img/1814370841510985728/m7dTMn2b?format=png&name=medium)

<figcaption>

Source: [EuroPython](https://twitter.com/europython/status/1806741870401212557)

</figcaption>

I presented my new workshop, "[(Pre-)Commit to Better Code](/workshops/pre-commit-workshop/)," on Monday afternoon. The last time I presented a brand new workshop anywhere was in 2021, and it was on data science, so I was curious to see how people would respond to something different. This workshop is also very different from my previous ones in that I have live demos, and there is roughly a 50/50 split between slides and exercises.

In the first half of the workshop, I taught attendees how to set up pre-commit hooks on their own projects, and, in the second half, I taught them how to make their own hooks. Initially, I had planned to spend a little more time on the second section, but, to my surprise, I had so many questions from people new to pre-commit hooks during the first section, that I was actually behind time, eating into the second section.

For the second section, a few people came up with their own ideas for hooks (one set a limit on the number of lines a file could be and another prohibited `print` statements), while the rest used an idea I provided in the slides around file-naming conventions. In the end, we finished right on time, and I heard some great feedback from the attendees &ndash; one said, "This has been the most useful workshop for me[...] It may be the most useful thing I learn at the conference. This is going to really help me with my project." Another who had only joined the second half after leaving a different workshop, mentioned that she could tell I knew what I talking about and how to explain it. She also said that the slides were great and made it easy to follow even after coming in late ❤️

Only at this point did I realize that I had once again forgotten to put together a feedback form 🤦🏽‍♀️ There was no time to dwell on this as I had a dinner reservation at a Michelin Guide restaurant: [Portfolio](https://guide.michelin.com/us/en/prague/prague/restaurant/portfolio). I enjoyed my post-presentation seafood dinner and Czech wine. Another night without food poisoning. ✅

---

When I got back to the hotel, I was once again thinking about the feedback form. Of course, I *could have* used Google Forms, and I even put one together, before realizing that it wasn't actually what I wanted. After all the work I did rebuilding my website earlier this year, I wanted something that would live on my website and that would always be ready for me and not need constant updating. I did some research and settled on [Tally.so](https://tally.so/), which provides a Notion-like interface for building customizable forms. After an hour of work, I had the first iteration of the [live session feedback form](/feedback) live. During the sprints, I was able to get an attendee from my session to fill out the form. Mauricio said, "Stefanie has a gift for teaching. She explain[ed] very well the benefits of the tool. She did not leave anyone behind, answered the basic questions from rookie programmers like me but also went deep into more complex areas." ❤️

This wasn't the only thing I built for my website while at EuroPython. I was looking at the personal websites of some other speakers and noticed that one presented his talk history as a timeline. Before the redesign, I had a chronological listing of events on my website; however, during the redesign, I opted to show things on a [map](/events/#event-map). At some point, I did want to revisit showing things in order, but it wasn't until I saw this timeline that I realized how I wanted to do it (which wasn't at all like what I saw on this website 😂). I did some research for React timeline components and found the [Material UI](https://mui.com/material-ui/react-timeline/) one to be a good starting point for what I wanted. After hacking for a few nights, I published two new timeline pages on my website: one for the [events that have shaped me](/timeline/) as a technologist and content creator and the other to show [upcoming events](/events/upcoming/).

---

On Tuesday evening, I had the EuroPython speaker's dinner, during which I was able to catch up with some old friends and make some new ones. At one point, we were having a discussion of personal websites, and I gave a preview of the timeline I was building, which people thought was a great idea 😊

Upon leaving the venue, a speaker I hadn't met said, "hey, pre-commit girl," to get my attention. I had mixed reactions:
1. It was the first time it wasn't "pandas girl," and I liked that.
2. But, if he knew me on sight, then he probably could have called me by my name... I let it slide.

---

The main conference ran Wednesday through Friday. While there were several talks that I really enjoyed, if I could only pick three, I would recommend watching these when the recordings come out:

1. [The Art of the Pull Request &ndash; Ben Lomax](https://ep2024.europython.eu/session/the-art-of-the-pull-request)
2. [Why communication is the best skill you can develop as a programmer &ndash; Miriam Forner](https://ep2024.europython.eu/session/why-communication-is-the-best-skill-you-can-develop-as-a-programmer)
3. [Lessons learned from maintaining open-source Python projects &ndash; Bernat Gabor](https://ep2024.europython.eu/session/lessons-learned-from-maintaining-open-source-python-projects)

Bonus: [the first lightning talk on Wednesday](https://ep2024.europython.eu/session/lightning-talks-wednesday) about the history of Czech wines

During the conference days, I was also able to meet up with a fellow member of the [PyCon Portugal program committee](/blog/updates/2024/conference-program-committee/) in person and walk a curious friend through the basics of how I built my website.

---

Sprints were slated for Saturday and Sunday, and while I came to the event looking forward to participating in these as a contributor, I didn't see a project that interested me. EuroPython 2022 in Dublin, Ireland was [my first time participating in sprints](/articles/open-source/5-ways-to-get-started-in-open-source/), and I was reflecting on this during the day on Friday when I got a crazy idea: what if *I* organize a sprint for one of my projects? I kicked around the idea all day because I wasn't sure I had enough things for people to work on that would be approachable, yet interesting to outsiders, and, having participated in sprints for several different projects, I know that some are more fun as a contributor / successful as a maintainer than others: if I was going to do it, I wanted to do it right.

Late on Friday night, I came up with several things that could be worked on for [Data Morph](https://stefaniemolin.com/data-morph/) and decided to add my project to [the list](https://ep2024.europython.eu/sprints#data-morph), stating that I could handle 2-3 participants. Imagine my surprise when I walked into the room just 30 minutes after the start of the day, to see several people interested in contributing. Needless to say, I was already overwhelmed. Throughout the day, there were consistently 8+ people in the room for Data Morph: some from my workshop, one I had met at the speaker's dinner, and the others were new faces. Thankfully, the tasks I had collected for the event made it possible for people to work together, as I didn't want to turn anyone away.

![Data Morph sprint](https://pbs.twimg.com/media/GTXS_12XEAAu0k1?format=jpg&name=medium)

<figcaption>

The Data Morph sprint at EuroPython 2024. Source: <a href="https://twitter.com/StefanieMolin/status/1816772196578242827" target="_blank" rel="noopener noreferrer">Stefanie Molin via Twitter</a>.

</figcaption>

As sprints are just a microcosm for the open source world at large, I had people sending me PRs for things I didn't want, misinterpreting the task (instead of clarifying), and asking me if they could work on *their* ideas for *my* project. This is something that you really don't understand unless you maintain something: someone may have a great idea for something, but a maintainer may still say no because they don't want to maintain that or it doesn't fit with their roadmap, *etc*. In a situation like this, I had to tell people "no" &ndash; even though I was trying to help them make a contribution (the first ever for a few of them).<sup>2</sup> At the end of the day, it is *my* project, and I am the one that has to maintain whatever I let them add.<sup>3</sup>

During the event, I was only able to review a few PRs, mainly because I was constantly getting asked questions from all angles and then going off to help people or pair them up, if I could. I managed to tackle one thing on my list that no one showed interest in before the craziness truly began. By the end of the day Saturday, I was able to merge five PRs from participants, with another four pending (plus a few more that came in the following days). People clearly had a good time because they stayed in the room the whole day, and while it was a taxing day for me, I would definitely do it again &ndash; just not on Sunday (having five times the number of people I could support drop by took its toll).

This experience gave even more respect for the maintainers that organize sprints and help people contribute, especially those that run the sprint by themselves. I'm sure, now that I have had this experience, I will be more mentally prepared for this volume of people in the future.

---

Eight hours of constant context switching with the Data Morph sprint was so exhausting that I had to take a mental health day on Sunday. I slept in and then went to tour the Prague Jewish Quarter<sup>4</sup> before grabbing an early dinner at another Michelin Guide restaurant: [Cafe Imperial](https://guide.michelin.com/us/en/prague/prague/restaurant/cafe-imperial).

After dinner, I went over to the Prague Orloj (astronomical clock) and joined the final tour of the day inside City Hall (unplanned), which I found fascinating. During the tour, I learned what was different about the Old Town Square from the first time I went to Prague in 2015 (I had the feeling that something was very different when I went in 2023, but couldn't put my finger on it): the monument in the bottom right of the photo below (called [the Marian Column](https://en.wikipedia.org/wiki/Marian_column_(Prague))) wasn't there &ndash; it was re-erected in 2020 after being torn down in 1918.

![Old Town Square as seen from City Hall](/post-assets/old-town-square.jpg)

<figcaption>

Prague's Old Town Square as seen from City Hall. Source: Stefanie Molin.

</figcaption>

Early the next morning I made my way back home, and I successfully completed my quest to not get food poisoning 🙌 &ndash; all three goals achieved!

<small class="leading-snug">
<hr class="w-1/2" />

1. Since the food poisoning episode the night before a 3-hour workshop starting at 9 AM, I eat very light the night before a presentation to minimize the impact if it happens. I ended up doing this almost every day in Prague, as I found my stomach a little unsettled in general.
2. I had to close a PR that someone put a lot of effort into because I didn't want to include that change.
3. Having lunch with some of the conference organizers helped me build my resolve.
4. When I was trying to buy my admission ticket, the woman attending me refused to believe I wasn't a student because I look young. Not only did she **insist** on giving me the student discount, but she was also asked me for the secrets to looking so young 😂

</small>
