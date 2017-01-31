window.onload=function(){
	var oPic=document.getElementById("pic");
	var oWarp=document.querySelector(".warp");
	var oImg=document.querySelector("#pic img");
	oPic.onmouseover=function(){
		oImg.style.webkitTransition="4s";
		oImg.style.webkitTransform="scale(1.4)"
		oWarp.className="warp show";
		};
	oPic.onmouseout=function(){
		oImg.style.webkitTransition="4s";
		oImg.style.webkitTransform="scale(1)";
		oWarp.className="warp hide";
		};
};