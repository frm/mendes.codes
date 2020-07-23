---
slug: /blog/obama-did-it
title: "Obama Did It: The day the Internet made me a troll"
date: 2020-07-23
excerpt: >
  One day I was reading through the news on Reddit. A particular piece caught
  my eye. As I was scrolling through the comments, someone had a brilliant
  idea: "What if we could swap Obama's name with Trump's in an article and send
  it to people?". This is the story of how the Internet made me a troll.
---

It all happened on a [random thread][original-thread], on Reddit. I was reading
through the news, when a particular piece caught my eye. Apparently, President
Trump pushed the CIA to provide with inteligence to their Russian counterparts.
I remember thinking "they" wouldn't stand for Obama in the same scenario. Sure
enough, the top comment referenced it.

> Put President Obama's name there and Republicans would have lost their
> collective minds, but since its trump they are okay with his treason.
>
> — /u/malkavich

And then came the brilliant idea. If I'm honest, I had already thought about it
but figured it wouldn't stick. However, /u/oJustSomeGuy suggested it:

> It would be pretty cool if there were a service to switch the names in the
> article from Trump to Obama. I'd love to send this article to the rest of my
> family with Obama's name in there. They'd truly flip the eff out. Once flip
> out is in full force let them know what the original article said. Amazing
> backtracking and excuses to follow
>
> — /u/oJustSomeGuy

I mindlessly commented "I'd code that". I already had devised a plan, how to go
with the implementation. After receiving a flurry of comments supporting me and
wayyyyyy to many [Palpatine GIFs][palpatine-do-it], I decided to go for it.

It had to be simple to use and globally available. An extension like [Cloud To
Butt][cloud-to-butt] wouldn't hack it because you wouldn't be able to send it to
your Republican friends and family. It had to be a web service. And ideally, one
that you could easily make use of. I didn't want people to have to go to a
website, submit a form and whatnot. Changing the URL could sound the alarm of a
suspicious website, when someone received it. So it had to be simpler. In my
mind, it was clear: prepend my website to the URL and include the original URL
in my web service. As an example, my service is called `obamadidit.netlify.app`.
If you were on `supernewssite.org/article-1` and you wanted to swap Trump with
Obama, you would prepend the URL with `obamadidit.netlify.app` and get
`obamadidit.netlify.app/supersupernewssite.org/article-1`

How does it work, you ask? It has three main components:

1. Capturing and replacing the HTML;
2. Making this easily accessible;
3. Doing something to avoid a lawsuit.

Let's dive right into it.

## Replacing HTML

## Netlify functions

## Avoiding a lawsuit

[original-thread]: https://old.reddit.com/r/worldnews/comments/hnh13d/trump_pushed_cia_to_give_intelligence_to_kremlin/fxbmblb/?context=10000
[palpatine-do-it]: https://media.giphy.com/media/pTQUOfSmjo2hG/giphy.gif
