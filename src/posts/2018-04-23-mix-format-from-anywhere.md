---
slug: /blog/mix-format-from-anywhere
title: "mix format from anywhere (or just in umbrella apps)"
date: 2018-04-23
excerpt: >
  I have this weird issue with mix format and umbrella apps. The issue is that
  mix format assumes you have a .formatter.exs file in the current directory. If
  you don’t, it doesn’t look upwards in the file tree. It simply assumes you
  want to run it with the default config.
---

I have this weird issue with mix format and umbrella apps.

The issue is that `mix format` assumes you have a `.formatter.exs` file in the
current directory. If you don’t, it doesn’t look upwards in the file tree. It
simply assumes you want to run it with the default config. You can change this
behaviour by using the `--dot-formatter` flag to explicitly point to the
formatter file you want to use.

Now, in vim you can also use [`ale`](https://github.com/w0rp/ale) to run `mix
format` on save. If you don’t know `ale`, take the time to do so. I set up `ale`
to do this precisely by adding the following line to my (n)vim config:

```vim
let g:ale_fixers['elixir'] = ['mix_format']
```

Most of the time you will be good to go with this and you won’t find any more issues.

But when I’m working with Elixir umbrella apps, I sometimes `cd` to the
`apps/<app>` directly so that my [Ctrl+P](https://github.com/kien/ctrlp.vim)
doesn’t get all cluttered by similarly named files from different applications.
If you have a `.formatter.exs` file with custom rules and `ale` set up to run
`mix format` on file save, things get tricky. `mix format` won’t detect your config
unless you explicitly set the `--dot-formatter` flag.

As of a few weeks ago, [my PR to allow custom mix format
options](https://github.com/w0rp/ale/pull/1410) in `ale` has been accepted.

With this, we can attempt to find the nearest `.formatter.exs` and dynamically
pass the location to `ale`. Here’s a bit of vimscript to do so (ignore my n00bness
writing vimscript):

```vim
function! LoadNearestFormatter()
  let l:formatters = []
  let l:directory = fnameescape(expand("%:p:h"))

  for l:fmt in findfile(".formatter.exs", l:directory . ";", -1)
     call insert(l:formatters, l:fmt)
  endfor

  call reverse(l:formatters)

  let g:ale_fixers['elixir'] = ['mix_format']

  if len(l:formatters) > 0
    let g:ale_elixir_mix_format_options = "--dot-formatter " . l:formatters[0]
  endif
endfunction

call LoadNearestFormatter()
```

If you have a better version of this, please let me know.

That bit of code will look for `.formatter.exs` files along the file tree and if
any is found, it passes that along with the correct option.

You can also define a `.formatter.exs` in your home and use it as fallback for
when no other `.formatter.exs` is present, but I’d advise against this.

[@naps62](https://twitter.com/naps62) has the following vim code instead:

```vim
let l:git_root = system("git rev-parse --show-toplevel")[:-2]
let l:fmt = findfile(".formatter.exs", l:git_root)
let g:ale_elixir_mix_format_options = "--dot-formatter " . l:fmt
```

It’s a lot less verbose and it won’t search for `.formatter.exs` files in your
home directory.

And that’s it! Now you can use `ale` to automatically run `mix format` inside
umbrella apps.
