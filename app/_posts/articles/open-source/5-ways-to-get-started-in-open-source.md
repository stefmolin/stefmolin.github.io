---
title: "5 Ways to Get Started in Open Source"
subtitle: "Ideas for finding and making your first of many open source contributions."
excerpt: "Everyone can and should get involved in open source. Not sure how to find something to work on? Here are 5 strategies that I have used to get started."
date: "2023-08-29T11:08:47.161-04:00"
modified: "2024-07-30T18:34:00.000-04:00"
author: Stefanie Molin
tags: ["open source", "open source contribution", "open source software"]
assets: "/assets/articles/open-source/5-ways-to-get-started-in-open-source"
ogImage:
  url: "/post-assets/journey-ahead.jpg"
  width: 2160
  height: 1440
featured:
  - "[The Real Python Podcast Episode #190 (all)](https://realpython.com/podcasts/rpp/190/)"
  - "[The Real Python Podcast Episode #173 (at 26:31)](https://realpython.com/podcasts/rpp/173/)"
  - "[PyCoder's Weekly Issue #593](https://pycoders.com/issues/593)"
---

![the journey ahead](/post-assets/journey-ahead.jpg)

<figcaption>

Photo by [Vlad Bagacian](https://unsplash.com/@vladbagacian) on [Unsplash](https://unsplash.com/)

</figcaption>

I'm often asked for advice on how to get started in open source. On the surface, it may seem very overwhelming and out of reach, but there are many ways to get involved, regardless of your skill level. You also don't need to dedicate a ton of time for casual participation (I started as a way to procrastinate studying for an exam while pursuing my master's degree).

In this article, I provide five ways that I used to get started contributing to different open source projects. I also share some guidance on selecting projects to contribute to and how to set yourself up for success.

---

The open source community is all about giving back and learning from one another. No matter how small, every contribution is valuable. And everyone can contribute something with a little bit of help. The hardest part is finding something to work on that fits your interests and skills.

## Start by brainstorming some potential projects to contribute to

Make a list / take an inventory of the projects you frequently use now or have used in the past. Consider whether it makes sense for you to contribute to those projects:

- *Which license is the software distributed with?*<br/>Your employer may require you to seek approval before contributing to the project. Depending on the license the project uses, you might not be able to contribute.

- *Is the project still active? Has it been a long time since the project was last updated? Are people still using it?*<br/>You will have better luck contributing to something that is actively maintained.

- *How big is the codebase?*<br/>If the codebase is large and you are new to the project, it might be difficult to get a foothold.

- *Is this project built on top of another project that you are familiar with?*<br/>You may not know the higher-level project too much, but your knowledge of the underlying API will help.

- *Where is the project repository hosted? Is it public?*<br/>You will need to find the codebase in order to contribute to it.

## Find a way to contribute that fits you

Here are 5 potential ways to make your first contribution to an open source project, ranked from least to most challenging (in my eyes, at least). All are attainable, and all will make a difference to users of the software.

### 1. Participate in sprints
Many projects in the open source community participate in sprints. These events are often in person at larger conferences, such as [PyCon US](https://us.pycon.org/2023/events/sprints/) and [EuroPython](https://ep2022.europython.eu/sprints#what-is-a-sprint-), but you can also find virtual options like [Grace Hopper Celebration's Open Source Day](https://anitab-org.github.io/open-source-day/). This is a unique opportunity to meet and work with some of the maintainers of a project.

Maintainers put a tremendous amount of work into these events to help people contribute. Beforehand, they will curate a set of issues for the sprint, usually including some beginner-friendly ones. At the event, they will help you find an issue to work on, set up your environment, troubleshoot issues, make a contribution, and provide feedback.

This is also a great opportunity to learn about how the maintainers do their own development. What kind of tools do they use and for what? Use this opportunity to explore the project and pick their brains. These skills will be transferable across projects. For example, at the EuroPython 2022 sprints with some Scikit-Learn maintainers, while working on [the meta-issue they suggested for new contributors](https://github.com/scikit-learn/scikit-learn/issues/21350), I encountered a confusing issue. As I worked with a maintainer to debug it, I also learned about the Python project, [`pre-commit`](https://pre-commit.com/), which makes it easy to enable git pre-commit hooks to run checks on your code at commit time. One of these checks would have fixed the issue I was having. I brought all of this knowledge back to my team at work and implemented a `pre-commit` setup for our projects.

![Scikit-learn sprint at EuroPython 2022](https://pbs.twimg.com/media/FXyBv2_UsAEoEPB?format=jpg&name=medium)

<figcaption>

Source: <a href="https://twitter.com/StefanieMolin/status/1549492692228489216" target="_blank" rel="external noopener noreferrer">François Goupil on Twitter</a>

</figcaption>

In addition to using pre-commit for personal and work projects, I've also brought this tool to other open source projects, such as [Yellowbrick](https://github.com/DistrictDataLabs/yellowbrick/pull/1269), [Seaborn](https://github.com/mwaskom/seaborn/pull/2963), [Memray](https://github.com/bloomberg/memray/pull/356), and [PyStack](https://github.com/bloomberg/pystack/pull/64). With each implementation, things were done slightly differently to fit the needs of the project, which gave me even more of an opportunity to learn more about what is possible with pre-commit. Always be on the lookout for ways to apply the tools you are familiar with to other projects.

While sprints are a fantastic opportunity, you do have to be at the right place at the right time. If you can't make it to an event with sprints, there is also [GitHub's Hacktoberfest](https://github.com/topics/hacktoberfest). During the month of October, many open source projects work to help newcomers make their first contributions to the project by curating issues and providing extra support.

### 2. Contribute examples to the project documentation
Any time you want to use a new library, you inevitably need to consult its documentation. Sometimes, you are already somewhat familiar with the library, but stumble upon some functionality you haven't used yet and need to consult some examples. Projects with great documentation provide a much better user experience; however, it is a lot of work to document and provide examples for everything. Even projects with detailed documentation are likely to still be missing things in some spots. You will be hard-pressed to find a project that doesn't want to improve their documentation wherever possible — they just might not have the bandwidth to dedicate a maintainer's time to it.

This is where you come in. As a user or even newcomer to the library, read through some of the documentation to learn more about the library (ideally, a part you are unfamiliar with). If there aren't already examples, reading through the documentation for that functionality can be a great way to both expand your knowledge and position yourself to write the example for it.

Here's an example from my personal experience. I had used NumPy's `polyfit()` function in the past and was consulting the documentation to use it in a new project, but discovered that they had moved to a new API. After reading the [transition guide](https://numpy.org/doc/stable/reference/routines.polynomials.html#transitioning-from-numpy-poly1d-to-numpy-polynomial) and looking at the new interface, I noticed that the new API was lacking examples. [I contributed some examples](https://github.com/numpy/numpy/pull/23530) for `Polynomial.degree()` that would have answered the questions I had when learning about this new API.

![contributed examples in the NumPy documentation](/post-assets/numpy-docs.png)

<figcaption>

Screenshot of [NumPy's `Polynomial.degree()` documentation page](https://numpy.org/doc/stable/reference/generated/numpy.polynomial.polynomial.Polynomial.degree.html) with examples from the merged pull request, as of July 24, 2023 11:32 AM EDT. (source: Stefanie Molin)

</figcaption>

### 3. Browse open issues for ideas
Most open source projects have many open issues that can be picked up by anyone interested. For active projects, there might be numerous issues, so you will need a way to filter that down to issues that may be relevant to you. Here are some tips for navigating open issues:

- Often issues have tags indicating that they are good for first time contributors. Look for tags like "good first issue," "easy," or "beginner."
- When sifting through large quantities of issues, it might be helpful to look further into only those with fewer comments, as this may indicate no one has picked it up yet. Don't take the age of the issue to be a factor — if it's open, it may still be of interest. If it's an older issue, leave a comment to check that the maintainers are indeed still interested in having it picked up. You don't want to waste your time on something that is no longer on the table.
- Look for meta-issues, which capture a change that the maintainers want to make across multiple areas of the library. There will often be examples or detailed guidance of what needs to be done and links to parts that others have already completed for reference ([the Scikit-Learn team does a great job with this](https://github.com/scikit-learn/scikit-learn/issues/23462)).
- Make sure to read through the entire issue along with any comments, and also check for pull requests (PRs) that address what you are interested in before picking something to work on.

Be sure to check out my [Tips for Navigating an Issue Tracker on GitHub](/articles/open-source/navigating-an-issue-tracker/) article for more.

![browsing open issues for in the scikit-learn repository](/post-assets/open-issues.png)

<figcaption>

Screenshot of [open issues tagged "good first issue" in the scikit-learn GitHub repository](https://github.com/scikit-learn/scikit-learn/labels/good%20first%20issue), as of July 24, 2023 at 11:44 AM EDT. (source: Stefanie Molin)

</figcaption>

Once you have identified an open issue to work on, be sure to follow some common etiquette rules for picking up an issue:

- Make sure that no one else is already working on that issue. If they are, but it has been a long time since they last gave an update, try to see if they need help or if they've dropped the issue. The maintainers of the project may be able to help here.
- Comment on the issue that you will take it (or in the case of the meta-issue, comment about the specific part you will take).
- Feel free to ask clarifying questions at any point.

I used this strategy for my first contribution to Seaborn. While procrastinating studying for an exam, I browsed through the open issues for a few minutes and [found an issue](https://github.com/mwaskom/seaborn/issues/2249) from the creator of the library that I immediately knew how to implement. I hacked something together quickly to get some feedback on (and to make sure it was still of interest). After some tweaks, I filed [my PR](https://github.com/mwaskom/seaborn/pull/2620) to add the `refline()` method to the `JointGrid` and `FacetGrid` classes, which adds vertical and reference lines to all plots in the grid. It's important to note that I looked into Seaborn because I knew it was an active library with a smaller codebase than something like Matplotlib or NumPy, and it is built on top of Matplotlib, which I was familiar with. The issue I selected mentioned by name some functionality in Matplotlib, meaning it was just a matter of looking through the Seaborn codebase to determine how to wire it up.

### 4. Identify and fix a bug
As a user of the software and/or reader of the documentation, finding something to contribute often happens serendipitously. Is there a typo or omission in the documentation? Does the software not work as expected? If you encounter a bug, here are some tips:

- Make sure that there isn't already an issue for it. If there is and no one has claimed it, you should consider it. If there isn't already an issue, submit one and be sure to mention that you can fix it if they agree that it is a bug (don't forget it might be a change in behavior that is expected as the software evolves).
- Working on a bug fix will likely require some more knowledge of the codebase, so feel free to ask for help from the maintainers (this can also apply for other parts of the PR requirements, like adding tests or release notes).
- Never spend time working on something until you hear back from the maintainers about whether they are interested in making the change. Sometimes a proposed change may already be in progress or is not in scope.

![filing a bug report](/post-assets/bug-report.png)

<figcaption>

Screenshot of the [Bug Report issue template for the pandas GitHub repository](https://github.com/pandas-dev/pandas/issues/new?assignees=&labels=Bug%2CNeeds+Triage&projects=&template=bug_report.yaml&title=BUG%3A+), as of July 24, 2023 11:52 AM EDT. (source: Stefanie Molin)

</figcaption>

Many of my contributions to the pandas library were fixes to bugs I stumbled across. I noticed the first one when creating horizontal bar plots: the arguments for setting the *x*- and *y*-axis labels were not being properly interpreted. More specifically, the `xlabel` value would end up labeling the *y*-axis when specified, and the `ylabel` value would label the *y*-axis as well, but only when the `xlabel` wasn't present. This meant there was no way to label both plot axes. This was clearly a bug, so I created an [issue](https://github.com/pandas-dev/pandas/issues/45144). I was curious as to why that was happening and poked around the codebase to find the issue. Once I found it, I coded up a fix that wouldn't break other plotting functionality, added tests and the required documentation, and [opened the PR](https://github.com/pandas-dev/pandas/pull/45145).

### 5. Propose and implement a new feature
For software you use frequently, you will be hyper-aware of the pain-points you deal with as a user. Is there something that can be done to address them? Or is there something missing? If you have an idea for a missing functionality, see if the maintainers are interested in incorporating it. Never spend time working on something until you hear back from the maintainers as to whether they are interested in making the change, as the proposed feature or change may already be in progress, or is not in scope.

Some things to keep in mind for this strategy:

- Check that your idea for a new feature hasn't already been suggested, implemented, or discarded by looking through the project's issues (both open and closed).
- If the maintainers decide to pass on your suggestion, don't argue with them. Remember, this is a public forum, and it's crucial to be polite and treat everyone with respect.
- Remember that the maintainers are often volunteering their time, which is limited, and are working on advancing the project according to their roadmap. Therefore, if you want to work on your proposed feature, make sure to let them know that you are willing to work on it, as this may increase the likelihood of it happening. If you want to work on it, but don't know how to tackle it, ask for help.

This method may require significantly more work than the previous suggestions, but it will arguably be more rewarding. While participating in the EuroPython 2022 sprints with some Scikit-Learn maintainers, I learned about using [numpydoc](https://github.com/numpy/numpydoc) validation to check whether docstrings conformed to numpydoc-style standards as part of [the meta-issue they suggested for new contributors](https://github.com/scikit-learn/scikit-learn/issues/21350).

After returning home, I had the idea of running this validation at commit time instead of as a separate script, so I built a `numpydoc-validation` pre-commit hook for my team at work. This hook (and our `pre-commit` setup in general) significantly improved the PR experience for both the submitter and the reviewer. I submitted an [issue](https://github.com/numpy/numpydoc/issues/450) to ask the numpydoc maintainers whether they would be interested in having a pre-commit hook for their validation logic. I then got approval from my employer to port what I had built internally into the open source project. During this process, I unfortunately discovered that the way I had built the hook would never work externally, so I had to come up with an entirely new way of doing it. After rewriting the entire thing, I was able to file [my PR](https://github.com/numpy/numpydoc/pull/454).

![developing a pre-commit hook for numpydoc](/post-assets/numpydoc-validation-feature.png)

<figcaption>

Screenshot of [issue #450 in the numpydoc GitHub repository](https://github.com/numpy/numpydoc/issues/450), which proposes incorporating a pre-commit hook for numpydoc validation. (source: Stefanie Molin)

</figcaption>

---

## Get ready to make your contribution
Once you have identified something to work on, set yourself up for success:

- Make sure to follow any setup instructions the project provides for contributors. This may be in the documentation or in a contribution guide in the repository.
- If you are completely new to development, start with documentation-based contributions, while you get comfortable working with tools like git and GitHub. If you can, attend a sprint or perhaps a local meetup for your preferred programming language.
- Remember to be kind and patient in all your interactions with a project. Most maintainers are doing this outside of their regular work — it might take some time for them to review everything.

---

This article presented five ways to get started in open source — be sure to try them all. Remember that no contribution is too small. When you do make your first contribution, I'd love to hear about it and which strategy you used: share your achievement(s) in the comments below and/or on social media, tagging me on [LinkedIn](https://www.linkedin.com/in/stefanie-molin/) or [Twitter](https://twitter.com/StefanieMolin). Don't stop there though; this is your first contribution of many.
