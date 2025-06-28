---
title: "Back to Baltics"
subtitle: "Highlights from keynoting at PyCon Lithuania 2025 in Vilnius and subsequently visiting Riga, Latvia."
excerpt: "After a few months without any conferences or travel, I started off 2025 with my first ever keynote, which required several months of preparation. In this post, I talk about how the keynote for PyCon Lithuania came together, from the opportunity to the final result, and what I did to get a taste of both Lithuania and Latvia before heading back home."
date: "2025-05-03T10:00:00.000-04:00"
author: Stefanie Molin
tags: ["conferences", "reflection", "travel", "updates"]
assets: "/assets/blog/travel/2025/baltics"
ogImage:
  url: "/assets/events/conferences/pycon-lt-2025-keynote-1.jpg"
  width: 2000
  height: 1364
---

## 📍 Tallinn, Estonia 🇪🇪

Back in September 2024 at [PyCon Estonia](/blog/travel/2024/around-the-world), I, for the first time, spoke about my desire to deliver a conference keynote. It was at a speaker dinner the night before PyCon Estonia 2024 started that I shared my aspiration with one of the keynote speakers. I picked his brain about how long he had been speaking at conferences and how he got to the point of being invited to keynote. To my surprise, a couple days later, as the conference was winding down, I found myself chatting with one of the organizers for PyCon Lithuania. One thing led to another, and I was invited to keynote the 2025 event in Vilnius!

Keynotes are a different beast. Unlike the traditional talk/tutorial process I had been through numerous times before, where I would draft a proposal, get it reviewed by my employer, and then submit it during the conference's call for proposals (CFP) period before waiting a few months to hear back, this time, I essentially had a slot reserved for me to speak, but no title, no abstract, and no content at all.

Thankfully, I was able to have a video conference with this organizer later in 2024 to brainstorm some topics that would work for the highly-technical PyCon Lithuania audience. While I was slated to speak at the conference's Data Day, I wanted to do something other than what I have been pigeon-holed as. We got to talking about how I became a core developer of [numpydoc](https://github.com/numpy/numpydoc) after creating the `numpydoc-validation` pre-commit hook to run [docstring validation](https://numpydoc.readthedocs.io/en/latest/validation.html) at commit time and how that is all fueled by abstract syntax trees (ASTs), and then, we agreed that that would be a great topic &ndash; I could talk about what ASTs are, why you would use them, and how to do so (since [the official documentation](https://docs.python.org/3/library/ast.html) leaves a lot to be desired). This was just a few days before I would head to [Oceania](/blog/travel/2024/down-under) for a month, so, after our call, I made sure to do a brain dump of our discussion and what I needed to take care of as far as next steps to handle upon my return.

However, despite nailing down the topic before my vacation, I had a very tough time writing the content for the keynote once I came back: while I knew enough about the AST to code with it, I needed to do plenty of research to feel comfortable teaching it. I was also dealing with some personal matters that made it very challenging to focus on such a demanding task. In February, after some initial research, I decided on the angle I was going to approach it from, and that made it possible to write the abstract and come up with a title: Build Your Own (Simple) Static Code Analyzer. The hard work was far from over, though, and I didn't finish the initial draft of my keynote until just a few days before heading to Vilnius.

## 📍 Vilnius, Lithuania 🇱🇹

I arrived in Vilnius on Easter Sunday to fantastic weather, so after checking into my hotel, I strolled around the old town, where I was astonished by the number of churches of different denominations. Without intending to, I ended up in a variety of masses that day. Fun fact: in 2025, both Easter, which uses the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar) (used today in most parts of the world), and Orthodox Easter, which uses the older [Julian calendar](https://en.wikipedia.org/wiki/Julian_calendar), fell on the same day, so there were extra celebrations to observe.<sup id="footnote-1"><a href="#footnotes">1</a></sup>

In the late afternoon, the exhaustion and hunger from the long day of traveling kicked in, and I stopped for an early dinner at [Etno Dvaras](https://etnodvaras.lt/en/valgiarastis/) for Lithuanian food. I had the cold beetroot soup, which comes with hot potatoes and instantly became a favorite meal of the trip, along with *cepelinai* (potato dumplings stuffed with ground meat), which came with sour cream &ndash; a condiment I have never cared much for, but would end up eating a lot of over the next two weeks (in a variety of dishes). I even tried a local beer, as they only had sweet wines, and I was parched &ndash; it was refreshing in the heat, but I still prefer wine.

The next day, I checked out Trakai castle and Gediminas Castle Tower<sup id="footnote-2"><a href="#footnotes">2</a></sup> in the morning before working from my hotel room in the evening. That evening, I had dinner at the hotel restaurant, [Restaurant PACAI](https://www.hotelpacai.com/en/PACAI-restaurant), which was on the Michelin guide. I tried the sparkling tea they featured, as well as a fish that came with cabbage two ways (I'm not a big fan of cabbage, but when in Rome...) and peanut butter of all things. For dessert, I had a chocolate cake that featured mushroom ice cream. It was all very interesting combinations, and thankfully, very tasty.

![collage of photos from Vilnius and Trakai](/post-assets/vilnius-1.jpg)

<figcaption>

Clockwise from top left: Vilnius Cathedral, outside of St. Anne's Church, drum setup at the altar inside St. Anne's Church, Trakai Castle, view of Vilnius from Gediminas Castle Tower. Source: Stefanie Molin.

</figcaption>

I had been planning to rinse and repeat the following day, but the conference organizers had reached out to me about doing a podcast interview on site at the venue. They wanted to interview all the keynote speakers, and with some back and forth, we found a time in the early afternoon to record. Before heading over there, I tracked down a bakery that had acorn coffee, made of, you guessed it, 100% acorns, which, prior to arriving in Lithuania, I wasn't aware that humans consumed.<sup id="footnote-3"><a href="#footnotes">3</a></sup> It is caffeine free, so it didn't help me in that department, but I was pleasantly surprised by the taste 🐿️

When I arrived at the venue, I was really excited to see the professional studio setup there. I had been given some potential questions up front, so I quickly aligned with Tomas Peluritis, the podcaster that would interview me, on what I wanted to discuss, and we began recording. As it turned out, we ended up not covering much of what was initially decided, as the conversation flowed in different directions; however, I'm still happy with the final product. This was my first time turning an interview out so quickly &ndash; from the initial discussion to scheduling and recording in a couple of days &ndash; it felt as if I was on a press junket for a movie ⭐️ You can listen to the recording on the [Uncle Data podcast](https://youtu.be/etV2lQxWqM0).

![thumbnail for the Uncle Data podcast interview with Stefanie Molin](https://img.youtube.com/vi/etV2lQxWqM0/maxresdefault.jpg)

<figcaption>

Source: [Uncle Data podcast](https://youtu.be/etV2lQxWqM0) via YouTube.

</figcaption>

After wrapping up the recording, I headed back to my hotel to work once more. The day had been so busy, and I was too exhausted to even entertain the prospect of going out to dinner, so I opted to get room service from the hotel restaurant (a perfect excuse to try more of the menu 😋). I also managed to squeeze in my first 😬 full run through of my keynote, which was just two days away. Once I finished, I thought it had gone well, until I checked the timer to see that it was 10 minutes too short. Since the content was already approved by my employer, it was too late to change anything, so I had to come up with other ways of stretching the time. In addition to the always appropriate pausing to drink water, I opted to share some stories around certain parts of the keynote.

---

While the conference began the next day, I was so concerned about the timing of my keynote that I spent the entire morning working on it: proofreading, making the slides public for the next day, and running through the whole thing once more. This run through was right where it needed to be, but with one under and one perfect, I was still worried.

Afterward, I headed to the event, where I immediately bumped into Kushal Das, who was the speaker I expressed my desire to keynote to back at PyCon Estonia 2024. I sat in on a couple of talks and had a headshot taken before heading to a Vilnius walking tour for speakers. One of the speakers in my group was in my [PyCon Japan](/blog/travel/2024/asia-tour) talk last year.

During the tour, we learned about Lithuania's love for forestry &ndash; they even have a vote for tree of the year! The winning tree is visited for poetry readings. We were also told that people there find it unsettling when you smile at them as a stranger because they will then be racking their brains trying to remember where they know you from &ndash; this was a bit of culture shock for me, and it was hard to break the habit for the rest of the trip. When the topic of language came up, I was able to show off some knowledge I had picked up from Estonia last year: while there are three Baltic countries, there are only two Baltic languages because Estonian is a Finnic language, while Latvian and Lithuanian are Indo-European. What I didn't know is that Lithuanian is also one of the older European languages, and they can actually understand and read some Sanskrit.

Some other fun facts from the tour include Lithuania being the geographical center of Europe (the official marker from France is near Vilnius), and the style of the city originating from Italian influences. The guide mentioned that religion at those times influenced the design of cities, so Vilnius, which was predominantly Roman Catholic looks very different than nearby Riga, Latvia, which was Protestant, and therefore, the architecture looks more like Germany. Before Lithuania was Roman Catholic though, the guide shared that they were pagans and had converted to Catholicism in order to stop being attacked by crusaders: the leaders at the time went to Poland to procure a priest and then went around the country doing mass baptisms, which people didn't even understand what was being said &ndash; they were in it for the free woolen shirts (some people would travel to other cities to get baptized additional times for more shirts). Apparently in Estonia, they did it for beer 😂

In addition to the sites, I found myself intrigued by the use of data visualizations (sometimes accompanied with Roman numerals I - VII) to represent opening and closing times for museums, stores, and restaurants throughout the city. For example, "⬛️&nbsp;🔲&nbsp;🔲&nbsp;🔲&nbsp;🔲&nbsp;⬛️&nbsp;⬛️ 10-18" means that the place is open Tuesday to Friday 10 AM to 6 PM, but is closed Saturday to Monday. Very clever once you know which day is the first one, but utterly confusing until then. I also appreciated that the days have no special names: they are simply *first day*, *second day*, and so on.

![second collage of photos from Vilnius](/post-assets/vilnius-2.jpg)

<figcaption>

Clockwise from top: view of Gediminas Castle Tower (left) and Vilnius Cathedral (right) at sunset from the rooftop bar where the conference's drinks event was held; some examples of the data visualizations being used to represent a business's hours; sign marking the start of the Užupis neighborhood, which is popular with artists and encourages smiling. Source: Stefanie Molin.

</figcaption>

Once the walking tour concluded, I headed to the conference's drinks event at a rooftop bar overlooking the cathedral and Gediminas Castle Tower at the golden hour. I didn't stay too long because my keynote was the following morning, and I wanted to practice for a third time to check the timings.

---

While writing the content for my keynote, I was exploring different things I could build that would be accessible to a wide audience, while also not overdoing it with the code on the slide. What began as a demo, unfortunately (fortunately?) turned into a tool that I saw a lot of use for personally and began developing into a new open source package called [Docstringify](https://github.com/stefmolin/docstringify). I say "unfortunately" because this meant I had been dividing my time between working on that and simplifying logic from it to use in the keynote, which made finishing the content early impossible. Since what I would have time and space to show in the keynote would have to be a simplified version (makes for a better presentation anyway), I wanted to be able to point people to the project to see how they could take the concepts further. However, just as with the keynote itself, time was against me, and I didn't get everything I wanted to done before delivering the keynote, but I made peace with it.

![Speaker card for Stefanie Molin's keynote at PyCon Lithuania 2025](https://pbs.twimg.com/media/GkxcKdSXEAABkMN?format=jpg&name=small)

<figcaption>

Source: [PyCon Lithuania via X](https://x.com/PyConLT/status/1894990880785772985).

</figcaption>

As I got ready the morning of the keynote, I wondered how many people would show up to a very technical talk first thing in the morning, especially after drinks the night before. To be honest, I feared that the content would be too technical, but it was what the organizers had asked for, and I was content in knowing that the content would make a good resource after the fact. When I took the stage, I was shocked to see a packed room with several people standing.

![Stefanie Molin delivering the Data Day keynote at PyCon Lithuania 2025 to a packed room](/assets/events/conferences/pycon-lt-2025-keynote-2.jpg)

<figcaption>

The engaged audience for my morning keynote at PyCon Lithuania. Source: PyCon Lithuania photographer.

</figcaption>

Despite being so technical, only a handful of people left, and it wasn't until near the end. My timing was good when it counted, and I had time to answer some questions from the audience. After the final applause, one of the conference organizers brought a copy of [my book](/books/Hands-On-Data-Analysis-with-Pandas-2nd-edition/) to sign for one of their giveaways. Overall, I was elated with how it went (much better than I could have imagined) and how engaged everyone was, and I can now call myself a keynote speaker! [The keynote](/talks#build-your-own-(simple)-static-code-analyzer) is now available on [YouTube](https://www.youtube.com/watch?v=mBKs4rxDufs).

![Stefanie Molin delivering the Data Day keynote at PyCon Lithuania 2025](/assets/events/conferences/pycon-lt-2025-keynote-1.jpg)

<figcaption>

Live action shot of me delivering the Data Day keynote at PyCon Lithuania 2025 on April 24, 2025. Source: PyCon Lithuania photographer.

</figcaption>

After I left the room, I chatted with some attendees. The feedback was very positive with many saying that they liked/enjoyed it, and that it was just the right level of technical for a morning keynote 😅 Later, I attended my first PyLadies event: lunch with a game of bingo that was actually an icebreaker in which you had to go around the room and find people that had done certain things, like visiting Paris. As luck would have it, I ended up at a table with an US expat who now lives in Lithuania.<sup id="footnote-4"><a href="#footnotes">4</a></sup>

Before heading to the speaker dinner, I checked out the Occupations and Rights Museum, which was in a former KGB office (complete with a prison). I would definitely recommend checking it out if you are visiting Vilnius.

I've mentioned several times how public speaking used to be one of my top fears, and how speaking at conferences has helped me get over it, but no matter how many times I do it, I like to celebrate each victory and how far I've come. This time the celebration was at the speaker dinner, where I ended up having a long conversation with one of the conference organizers about how I come up with my content &ndash; maybe I will write about that one day.

---

When I was planning my trip to Lithuania, I decided to tack on a stay in Riga (Latvia), so that I could say I've been to all three Baltic states. After the conference, I booked a transfer service<sup id="footnote-5"><a href="#footnotes">5</a></sup> from Vilnius to Riga, which featured stops along the way at Kaunas, the Hill of Crosses, Rundāle Palace, and Bauska Castle. Pictures don't do the Hill of the Crosses justice &ndash; you have to experience it. The palace was stunning, and I could have made a day of exploring it. It felt like the perfect amount of time at the other stops.

![collage of sites en route to Riga](/post-assets/road-trip.jpg)

<figcaption>

Clockwise from top left: Cathedral-Basilica of St. Peter and St. Paul in Kaunas, some of the many crosses at the Hill of Crosses, two of the myriad, extravagantly-decorated rooms in Rundāle Palace. Source: Stefanie Molin.

</figcaption>

I would be remiss if I didn't mention just how much colder it had gotten from when I had arrived: short sleeves weather had turned into multiple layers, a scarf, and a hat. Thankfully, I came prepared for this.

## 📍 Riga, Latvia 🇱🇻

I was beyond exhausted when I woke up for my first morning in Riga &ndash; my whole body ached. My plan was to sightsee in the mornings and work in the evenings for the week I was there, so I didn't have the luxury of sleeping in. Since I was staying in the Art Nouveau area, I wanted to start with the old town, which is a UNESCO World Heritage Site, and take care of the Art Nouveau area throughout the trip. I scouted out an open coffee shop called Rocket Bean on the way to the old town and headed out the door. Rocket Bean is a Latvian coffee shop chain, and I was very pleased with my flat white and cottage cheese turnover.<sup id="footnote-6"><a href="#footnotes">6</a></sup>

![collage of photos from Riga's old town](/post-assets/riga-1.jpg)

<figcaption>

Clockwise from top left: view of Riga from the tower of St. Peter's Church; the Small Guild; street in the old town; Rīga sign with [Flow the cat](https://en.wikipedia.org/wiki/Flow_(2024_film)) on top (from the award-winning animated film, which I later watched on the plane home); view of the facade of the House of the Black Heads, which is actually just the building on the right. Source: Stefanie Molin.

</figcaption>

Strolling around the old town looking at the buildings was enjoyable, but when I started getting very cold 🥶 I knew it was time for a museum. I headed to the House of the Black Heads, which was quite toasty inside. Once I had finished up with the audio guide in there, I went back outside to explore more since it was the weekend, and I didn't need to worry about working. Before returning to my hotel, I took a short cruise on the river and canals; tried dry blackcurrant wine, grey peas, and the famous Black Balsam (potent, but it grew on me); and visited a viewpoint above the city.

Back in the hotel (the only Marriott property in the entire country, apparently), the exhaustion really caught up to me, and I couldn't even muster up the energy to leave the hotel to get dinner. Thankfully, the hotel had left me several *Gotinas* (local milk candies, which are delicious 😋 and I'm told translate to "little cows") &ndash; I wasn't super hungry, so one of these and a piece of fruit I had from earlier was my dinner 😅

---

Over the next few days, I walked along the beach in Jūrmala (yes, it was still cold, but the crisp Baltic sea breeze felt refreshing), strolled around the Art Nouveau area soaking up the incredible architecture, visited Turaida Castle (I was ABCed<sup id="footnote-7"><a href="#footnotes">7</a></sup> by this point), and explored the Ethnographic Open-Air Museum of Latvia, where I saw live folk music because I happened to visit on a holiday. I also learned about a Latvian superstition that if you go on a swing at Easter, you will have a summer free of mosquito bites (even though Easter had passed, I tried it &ndash; hopefully, it still works 🤞).

![collage of photos from Riga sites outside of the old town](/post-assets/riga-2.jpg)

<figcaption>

Clockwise from top right: fresh produce at the Riga Central Market; some of the folk music singers in front of one of the buildings at the Ethnographic Open-Air Museum of Latvia; three of my favorite buildings from Riga's Art Nouveau area. Source: Stefanie Molin.

</figcaption>

As far as trying out local cuisine (besides the grey peas and Black Balsam I had the first day), I took a food tour of the Riga Central Market, which is another UNESCO World Heritage Site built from old German Zeppelin hangars. All of the food included was delicious, and I definitely appreciated having *keffir* with the meal for digestion. Latvian cuisine, like Lithuanian cuisine, has lots of sour cream (and rye bread).

Other than that, I had multiple meals during my stay at Lido (I switched up the locations at least), due to the time efficiency compared with a typical European dining experience. Lido provided a cafeteria-like setting for a variety of local dishes: there was a stuffed cabbage dish I got multiple times that I particularly enjoyed, and they also had *kvass* on tap, which is a fermented drink made from rye bread and good for digestion (I miss it already). I was also pleased with the *[solyanka](https://en.wikipedia.org/wiki/Solyanka)* (a thick soup of Russian origin), which was such a hit with the locals, there often wasn't much left.

---

Aside from the sightseeing and working, I also had a program committee meeting for PyCon Portugal to select the talks and tutorials for this year's conference. Needless to say, I was exhausted after two weeks of burning the candle at both ends (and consuming more sour cream than I had in years &ndash; maybe my whole life) and was ready to go home when the time came 😴

<small id="footnotes">
<hr />

1. If you were wondering, the two calendars handle leap days differently: the Julian calendar has leap days every four years, without exception, while the Gregorian calendar has more complex logic for determining leap years. <a href="#footnote-1">↩</a>
2. Here, in addition to enjoying the view, I went to the museum and learned about the [Baltic Way](https://en.wikipedia.org/wiki/Baltic_Way), which was a human chain of roughly two million people holding hands connecting Vilnius, Lithuania to Tallinn, Estonia via Riga, Latvia on August 23, 1989 in a peaceful demonstration in favor of Baltic independence from the Soviet Union. Each of the cities has a commemorative Baltic Way marker in the form of an imprint of two bare feet. In Vilnius, it is located in front of the cathedral. In Riga, it was near the Freedom Monument. I don't remember seeing it in Tallinn. <a href="#footnote-2">↩</a>
3. Another interesting food item from Lithuania, which I brought back as a souvenir to try, is [apple cheese](https://en.wikipedia.org/wiki/Apple_cheese). <a href="#footnote-3">↩</a>
4. I also learned about the term "love immigrants" from an attendee who described herself as one. <a href="#footnote-4">↩</a>
5. My driver turned out to be a former Lithuanian diplomat who was stationed in Kazakhstan. <a href="#footnote-5">↩</a>
6. I also tried the Lithuanian chain, Caffeine, at a couple of locations, but I liked Rocket Bean much better. <a href="#footnote-6">↩</a>
7. On my first trip to Europe, the guide said we would be thinking "ABC" after a while, meaning that we would be thinking "another bloody church" &ndash; here, the "c" stands for castle. <a href="#footnote-7">↩</a>

</small>
