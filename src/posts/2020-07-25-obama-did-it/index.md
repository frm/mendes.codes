---
slug: /blog/obama-did-it
title: >
  Obama Did It, or how the Internet got me to troll your Republican friends
  and family
date: 2020-07-25
excerpt: >
  One day I was reading through the news on Reddit. A particular piece caught my
  eye. As I was scrolling through the comments, someone had a brilliant idea:
  "What if we could swap Obama's name with Trump's in an article and send it to
  people?". This is the story of how the Internet got me to troll your
  Republican friends and family.
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
Obama, you would prepend the URL with `obamadidit.netlify.app/r/` and get
`obamadidit.netlify.app/r/supersupernewssite.org/article-1` (the `/r/` part is a
limitation of the Netlify Functions explained later).

How does it work, you ask? It has three main components:

1. Capturing and replacing the HTML;
2. Making this easily accessible;
3. Doing something to avoid a lawsuit.

Let's dive right into it.

## Replacing HTML

To get the HTML of a webpage, we need to make what us *hackers* call a `GET`
request. Whipping out the Ultimate Hacker Language™, JavaScript (for all of you
who are not familiar with the Developer Way, it's pronounced *yavah-script*,
like in Jabba the Hut):

```javascript
// lib/replaceHtml.js
const axios = require("axios");

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);
};
```

This will place in the `data` variable the HTML code of the page. There is one
problem, however. If we save that HTML code to a file and open it, it will look
like a web page from the 90s, way before web design was first discovered.  The
HTML code references images and CSS *relative* to the webpage. If you go to
[DuckDuckGo][duckduckgo], right-click anywhere and select "View source code",
you'll eventually find tags like these:

```html
<link rel="stylesheet" href="/s1909.css" type="text/css">
<link rel="stylesheet" href="/o1909.css" type="text/css">
```

They are all relative to the root URL (`https://duckduckgo.com`). So we need to
take those references and make them absolute (transform `href="/s1909.css"` into
`href="https://duckduckgo.com/s1909.css"`).

Fortunately, everything you want to do in JavaScript has already been written by
a GPT-3 bot and is available in [npm][npm]. We can just get `absolutify`,
provide it the root URL and it'll do that for us.

```javascript
const axios = require("axios");
const absolutify = require("absolutify");

const url = require("url");

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);

  const parsedUrl = url.parse(targetUrl);
  const rootUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

  const html = absolutify(data, rootUrl);

  return html;
};
```

If we save that HTML code and open it in a browser, it should be equal to the
original page. All we need to do now is to replace the words "Trump" with "Obama".

```javascript
const axios = require("axios");
const absolutify = require("absolutify");

const url = require("url");

module.exports = async function replaceHTML(targetUrl) {
  const { data } = await axios.get(targetUrl);

  const parsedUrl = url.parse(targetUrl);
  const rootUrl = `${parsedUrl.protocol}//${parsedUrl.hostname}`;

  const html = absolutify(data, rootUrl)
    .replace(/trump/gi, "Obama")
    .replace(/donald/gi, "Barack");

  return html;
};
```

And that's it. Two simple regexs that, according to my new favourite Redditor,
will bring the Western civilization crashing down to an Orwellian society:

![Reddit comment: "In my mind you think you did something good but actually you
just wrote the code that is going to be the basis for the future internet GOP
sets up in the future if Trump wins again."](./doomsday.png)

### Further improvements

The current version is neat but we can actually improve it further. Currently,
articles already containing the words "Obama" will essentially be nonsense.
After some recommendations on Reddit, I did the following update:

```javascript
const randomString = () => Math.random().toString(36).substring(2, 15);

const barack = randomString();
const obama = randomString();

const html = absolutify(data, rootUrl)
  .replace(/barack/gi, barack)
  .replace(/obama/gi, obama)
  .replace(/donald/gi, "Barack")
  .replace(/trump/gi, "Obama")
  .replace(new RegExp(barack, "g"), "Donald")
  .replace(new RegExp(obama, "g"), "Trump");
```

This places President Obama's first and last name under a temporary random
value, replaces the instances of "Donald" and "Trump" with "Barack" and "Obama"
and finally those temporary values with "Donald" and "Trump". [Here's an
example][obama-trump-switch] with a funny headline.

## Netlify functions

To host this whole thing, I've been using a *serverless architecture* through
[Netlify Functions][netlify-functions].

I basically just put the code above in a `api/lib/replaceHtml.js` file and
created an `api/functions/replace_html.js` equivalent which would parse the
query parameters to extract the URL, call the first file and send the correct
HTTP response:

```javascript
const { replaceHTML } = require("../lib");

exports.handler = async (event, _context) => {
  const { url } = event.queryStringParameters;

  const alteredHTML = await replaceHTML(url);

  return {
    statusCode: 200,
    contentType: "text/html",
    body: alteredHTML,
  };
};
```

Finally, we need to add a `netlify.toml` config to tell us when that function is
invoked. Whenever the URL matches `/r/*` we call that function and that's it:

```toml
[build]
  functions = "api/functions"

[[redirects]]
  from = "/r/*"
  to = "/.netlify/functions/replace_html?url=:splat"
```

The use of `/r/` is mandatory because in reality, when you go to
`obamadidit.netlify.app/r/<url>` you are redirected to
`obamadidit.netlify.app/.netlify/functions/replace_html?url=<url>`. Since this
is a redirect, if we tried to remove the `/r/` part, it would be locked in an
infinite loop.

## Avoiding a lawsuit

After deploying this, some comments warned me that I could be liable for
spreading false news. The use of Netlify Functions is partially to avoid this,
since I'm not effectively hosting anything, but _generating_ it (yeah, I'm not
sure how this would hold in a hypothetical court). Anyway, I didn't want any of
these to potentially go viral and my tool to be used to spread fake news, so I
added a small twist.

When replacing the HTML, I also do this:

```javascript
// api/lib/replaceHtml.js

const appendOverlay = require("./appendOverlay");

module.exports = async function replaceHTML(targetUrl) {
  // ...

  const html = // ...

  return appendOverlay(html, targetUrl);
}
```

This `appendOverlay` function parses the HTML and appends a `div` and a timer
function to the page. After 20s, the following shows up:

![The whole page is replaced by a warning saying it was fake and linking to the
original article. "If this outraged you, make sure the real article also
does"](./warning.png)

Although controversial on Reddit, I chose 20s because most people don't really
get past the headline or the first paragraph and I didn't want them to close the
page and don't face the warning telling them it's fake. I could eventually do it
through scroll detection but that doesn't handle the cases for people that don't
bother reading past the title.

## In summary

Internet funny, troll people all you want, append `obamadidit.netlify.app/r/` to
any URL.

### PS

Shout out to the folks who DM'd me, it was pretty funny to hear about the
reactions your family members had. If you ever capture that on video, please let
me know.

The code is [open sourced and available][source-code], if you want to improve it
or help in any way, feel free to do so.

Much love to [Francisco][xico-github] that helped me with Netlify Functions
and actually gave me the idea for that through [urls.wtf] ❤️

Cheers,
<br/>
Mendes

[duckduckgo]: https://duckduckgo.com
[npm]: https://npmjs.com
[netlify-functions]: https://www.netlify.com/products/functions/
[palpatine-do-it]: https://media.giphy.com/media/pTQUOfSmjo2hG/giphy.gif
[xico-github]: https://github.com/jfranciscosousa
[urls.wtf]: https://urls.wtf
[source-code]: https://github.com/frm/obama_did_it

[original-thread]: https://old.reddit.com/r/worldnews/comments/hnh13d/trump_pushed_cia_to_give_intelligence_to_kremlin/fxbmblb/?context=10000

[obama-trump-switch]: https://obamadidit.netlify.app/.netlify/functions/replace_html?url=https://deadline.com/2020/07/joe-biden-barack-obama-2020-presidential-race-donald-trump-1202991746/

[cloud-to-butt]: https://chrome.google.com/webstore/detail/cloud-to-butt-plus/apmlngnhgbnjpajelfkmabhkfapgnoai?hl=en
