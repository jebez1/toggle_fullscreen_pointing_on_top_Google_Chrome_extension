Since :
https://superuser.com/questions/1368977/how-to-re-enable-proper-full-screen-mode-in-chrome-with-display-of-toolbar-on-ho
https://groups.google.com/a/chromium.org/g/chromium-discuss/c/f9r8ZsaMm9o/m/43l1YN1KCwAJ
https://support.google.com/chrome/thread/67228761/how-to-show-tabs-bar-in-chrome-full-screen-mode-just-like-in-firefox?hl=en .

Why github.com , not chromewebstore.google.com ?
I don't wanna pay the US $5.00 registration fee to publish the extension , I think Google LLC has enough money like that .
So feel free to pay & publish it .

Why enter fullscreen left clicking on the page , why don't just use the mouseenter event ; no need to click ( should be/!.js ) ?
document.documentElement.requestFullscreen() needs a user gesture , to avoid abuse .

Update :
chrome://flags/#automatic-fullscreen-content-setting
https://chromestatus.com/feature/6218822004768768
is a lie for :
Google Chrome Version 126.0.6478.182 (Official Build) (64-bit) , on Debian stable .

Download the extension :
https://download-directory.github.io/?url=https%3A%2F%2Fgithub.com%2Fjebez1%2Ftoggle_fullscreen_pointing_on_top_Google_Chrome_extension%2Ftree%2Fmain%2Ftoggle%2520fullscreen%2520pointing%2520on%2520top

How to install an extension :
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked .
