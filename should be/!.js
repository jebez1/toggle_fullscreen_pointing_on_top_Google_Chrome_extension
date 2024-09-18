document.addEventListener("mouseenter",$,{once:true})
function $(){document.documentElement.requestFullscreen()
A=new AbortController()
addEventListener("mousemove",e=>{if(e.y==0){document.exitFullscreen()
A.abort()
document.addEventListener("mouseenter",$,{once:true})}},{signal:A.signal})}
