(function(){function g(){$(".main-header").mousemove(function(a){n=a.clientX;r=a.clientY;v=Date.now();t||m()});$(window).on("blur mouseout",function(){r=n=null}).on("resize",function(){c&&c.parentNode&&c.parentNode.removeChild(c);d()});d()}function d(){var a,e;q();a=$(".main-header").width();e=310;c=document.createElement("canvas");c.className="loginFun";c.width=a;c.height=e;$(".main-header").append(c);h=document.createElement("canvas");h.width=a;h.height=e;if(c.getContext&&c.getContext("2d")&&(f=c.getContext("2d"),b=h.getContext("2d"),b.lineCap="round",b.shadowColor="#000000",b.shadowBlur=-1<navigator.userAgent.indexOf("Firefox")?0:30,!k)){k=new Image;if(!$(".main-header").css("background-image"))throw Error("main-header must have a background image");$(k).one("load",m);$(k).attr("src","/images/bg_tiles_color.jpg")}}function q(){u=[];$(".js-blurEffect--skip").each(function(a,b){var c;c=$(b);c.is(":visible")&&(a=c.position(),b=c.outerWidth(),c=c.outerHeight(),u.push({top:a.top,left:a.left,width:b,height:c}))})}function m(){var a,d=Date.now();a=$(".main-header").scrollTop();t=d>v+500?!1:!0;n&&t&&e.unshift({time:d,x:n,y:r+a});for(a=0;a<e.length;)1E3<d-e[a].time?e.length=a:a++;0<e.length&&window.l(m);b.clearRect(0,0,h.width,h.height);for(a=1;a<e.length;a++){var g=Math.sqrt(Math.pow(e[a].x-e[a-1].x,2)+Math.pow(e[a].y-e[a-1].y,2));b.strokeStyle="rgba(0,0,0,"+Math.max(1-(d-e[a].time)/1E3,0)+")";b.lineWidth=25+75*Math.max(1-g/50,0);b.beginPath();b.moveTo(e[a-1].x,e[a-1].y);b.lineTo(e[a].x,e[a].y);b.stroke()}d=c.width;a=c.width/k.naturalWidth*k.naturalHeight;a<c.height&&(a=c.height,d=c.height/k.naturalHeight*k.naturalWidth);f.drawImage(k,0,0,d,a);f.globalCompositeOperation="destination-in";f.drawImage(h,0,0);f.globalCompositeOperation="source-over";u.forEach(function(a){f.clearRect(a.left,a.top,a.width,a.height)})}var c,h,f,b,k,n=null,r=null,e=[],v=0,t=!0,u=[];"createTouch"in document||$(g);window.l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}()})();
