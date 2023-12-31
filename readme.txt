Since :
https://superuser.com/questions/1368977/how-to-re-enable-proper-full-screen-mode-in-chrome-with-display-of-toolbar-on-ho
https://groups.google.com/a/chromium.org/g/chromium-discuss/c/f9r8ZsaMm9o/m/43l1YN1KCwAJ
https://support.google.com/chrome/thread/67228761/how-to-show-tabs-bar-in-chrome-full-screen-mode-just-like-in-firefox?hl=en .

Why github.com , not chromewebstore.google.com ?
I don't want to pay the US $5.00 registration fee to publish the extension , I think Google LLC has enough money like that .

So feel free to pay & publish it .

Source code :

manifest.json :
{"manifest_version":3,"name":"fullscreen pointing on top","version":"1","content_scripts":[{"js":["!.js"],"matches":["<all_urls>"]}]}

!.js :
$=false
onclick=()=>{if(!$){document.documentElement.requestFullscreen()
$=true}}
onmousemove=e=>{if($&&e.y==0){document.exitFullscreen()
$=false}}

How to install the extension :
https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked .
