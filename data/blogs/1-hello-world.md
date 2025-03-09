---
date: "2025-03-09"
title: Hello, World. I'm blogging again
excerpt: This is my 4th or 5th attempt at blogging in last 5 years and hopefully this post will be the first of more than one blog posts. I don't have any idea about what I'll be sharing here (maybe tech, maybe aviation, maybe business, maybe accouting or maybe something else) but I have high hopes that this will continue and I'll figure it out.
---

This is my 4th or 5th attempt at blogging in last 5 years and hopefully this post will be the first of more than one blog posts. I don't have any idea about what I'll be sharing here _(maybe tech, maybe aviation, maybe business, maybe accouting or maybe something else)_ but I have high hopes that this will continue and I'll figure it out.

## About Me

I am Tauseef, a full stack engineer who loves to build and ship software. I have been tinkering with technology since 2012 and have been professionally _(when I started making money)_ building cool and not-cool software since 2018. Since 2020 I have been learning about business, finance, accounting, aviation and travel. I find all of this intriguing and fascinating.

## Tech behind my portfolio website

The geek in me wants to share the tech behind my portfolio website of which the blog is part of. I originally built this website using [NextJS](https://nextjs.org/) + [TailwindCSS](https://tailwindcss.com/) and was hosting this on [Cloudflare](https://cloudflare.com/). Two months in and I decided to add the blog section but I wasn't sure if I wanted to have a separate backend for blog so I refactored to the OG stack - [Laravel](https://laravel.com/) + [React](https://react.dev/) + [InertiaJS](https://inertiajs.com/) + [TailwindCSS](https://tailwindcss.com/) + [SQLite](https://www.sqlite.org/) and was hosting on [Hetzner](https://www.hetzner.com/) using [Ploi](https://ploi.io/). Keeping up with traditions, after the refactor was complete I didn't work on the blog for another four months and by the time I got back at it _(Early January)_, I had learnt about the `generateStaticParams` feature of NextJS which basically would allow me write blogs in markdown files without having to maintain a database. Anddddd I refactored it back to NextJS and that's what it's using now. The code is open-source _[tauseefsshah/tauseefsshah.com](https://github.com/tauseefsshah/tauseefsshah.com/)_.

That's it for this blog, I have written more than I expected and will keep up with it :)
