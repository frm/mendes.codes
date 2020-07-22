---
slug: /blog/stop-the-overhead
title: "Stop the overhead, refresh from your editor"
date: 2018-05-26
excerpt: >
  I’m a lazy programmer. If anything requires me to get off my terminal or my vim, I will probably automate it. Like checking the most recent xkcd.
---

*tl;dr: I am lazy and I made a script for when I don't have webpack to refresh
my browser for me. I can now refresh it from my editor. It's available
[here](https://github.com/frm/dotfiles/blob/master/bin/browser.refresh). This is
specific for macOS. Script is explained ahead.*

I'm a lazy programmer. If anything requires me to get off my terminal or my vim,
I will probably automate it. **[Like checking the most recent
xkcd](https://github.com/frm/dotfiles/blob/master/bin/xkcd)**.

Sometimes I don't have webpack to refresh my browser for me. This is an issue
because it requires me to change focus from the terminal to the browser and
*then* refresh. You may think that automating this is a huge overkill. However,
I found that having a shortcut in my editor to do that has *significantly*
decreased the time it takes for me to process everything that happened.

Let's go through this one step at a time.

First of all, you need to do cmd+tab. You are very likely to code in full screen
and in macOS which means **you have a cute little animation that takes a few
hundred milliseconds to change screens**. Since this is a mechanical process,
your muscles get used to doing cmd+tab once. **This doesn't take you necessarily
to your browser**. It takes you to the last window you had open. Oops. Now you
instinctively do cmd+tab again. It takes you back to your last open window. Your
terminal. Now you're back where you started. This is a pattern I've seen happen
recurrently in most developers.

But let's assume the best case scenario where you effectively went to your
browser. **Your brain still has to process everything** that happened and make
sure you opened the right window. Only now will you hit cmd+r which requires a
different hand movement and a couple more hundred milliseconds.

There is one final overhead: **context switching**. I found this happens not
only to me but to other developers as well. The act of changing windows and
refreshing has made your brain **switch context to process the visual changes**.
This is mostly to make sure you are in the window you wanted to be. It takes a
while for your brain to go back to the previous context and figure out what was
the task you wanted to check. If you're tired, this can mean up to a couple more
seconds of overhead.

All this cognitive overhead can be solved by **muscle memory**. Like I said,
that first cmd+tab is usually the result of muscle memory. The problem is
everything that comes afterwards. We can leverage that and have a shortcut that
finds the correct browser window, focuses on it if needed and refreshes in one
go.

This is the script:

```applescript
#!/usr/bin/osascript

tell application "System Events"
    set processList to get the name of every process whose background only is false
    set applicationNameList to {}

    repeat with processName in processList
      set applicationList to file of (application processes where name is processName)

      repeat with applicationAlias in applicationList
        set applicationName to (name of applicationAlias) as string
        set applicationNameList to applicationNameList & applicationName
      end repeat
    end repeat
end tell

set browserLaunched to true

if applicationNameList contains "Firefox Developer Edition.app" then
  set browser to "Firefox Developer Edition"
else if applicationNameList contains "Google Chrome.app" then
  set browser to "Google Chrome"
else if applicationNameList contains "Firefox.app" then
  set browser to "Firefox"
else
  set browser to "Firefox Developer Edition"
  set browserLaunched to false
end if

set numberOfDisplays to (do shell script "system_profiler SPDisplaysDataType -detailLevel | grep -e 'Resolution:' | wc -l | tr -d '[:space:]'") as integer

if browserLaunched and numberOfDisplays > 1 then
  set browserShouldActivate to false
else
  set browserShouldActivate to true
end if

tell application browser
  if browserShouldActivate then activate
end tell

tell application "System Events"
  tell process browser
    keystroke "r" using {command down}
    delay 0.1
  end tell
end tell
```

It works the following way:

1. **Get the current application list.** For those of you familiar with
   AppleScript, you will wonder why I go through the extra process of getting
   the application name, instead of using the process name. That's because
   "Firefox Developer Edition" and "Firefox" are different applications but use
   the same "firefox" process.
2. **Get the correct browser.** I usually use FF Dev when working, so if it's
   open, it's going to be that one. Otherwise, I'm probably working in Chrome,
   so that's the next check. If neither is open, try regular Firefox. Finally,
   just assume no browser is launched and set the flag to launch it. Those of
   you that use a different browser or browser stack, should just change the
   order of the `if` statements.
3. **Check the number of displays.** If I'm using two displays, I'll have the
   terminal on one and the browser in the other so I don't need to change focus
   to it. If I'm using only one display, then I need to put the focus on the
   browser.
4. **Activate if needed**. If no browser is launched, this will launch it.
   Otherwise, it will just change the window focus.
5. **Refresh the browser.**

Save this into a `browser.refresh` file and put it somewhere in `$PATH`. The
next step is to call it from the editor. I use nvim, so it is a simple
one-liner: `nnoremap <localleader>r :silent !browser.refresh<CR>`.

This automation allows me to resolve all that hassle by clicking `,r`.

I found that by using this, by the time the screen finishes switching, the
refresh is almost always done. It also prevents me from the annoying cmd+tab
dance I do when the browser isn't the last window I opened.

Take the script. Put it in a file in your `$PATH`. Add a shortcut to your
editor. Stop the overhead.

**UPDATE**: Some people told me they mostly use Chrome and the browser lookup
thing is a bit of a hassle for them. This should work for you, change Chrome to
your browser as needed:

```applescript
#!/usr/bin/osascript

set numberOfDisplays to (do shell script "system_profiler SPDisplaysDataType -detailLevel | grep -e 'Resolution:' | wc -l | tr -d '[:space:]'") as integer

if numberOfDisplays > 1 then
  set browserShouldActivate to false
else
  set browserShouldActivate to true
end if

tell application "Google Chrome"
  if browserShouldActivate then activate
end tell

tell application "System Events"
  tell process "Google Chrome"
    delay 0.1
    keystroke "r" using command down
  end tell
end tell
```
