window.onload=function(){
	var oList=document.getElementById("list");
	var oCs=document.getElementById("cs");
	var oHour=document.getElementById("hour");
	var oMin=document.getElementById("min");
	var oSec=document.getElementById("sec");
	var aLi="";
	var sCs="";
	var timer=null;

	for(var i=0;i<60;i++){
		sCs+='.con_wraper ul li:nth-of-type('+(i+1)+') {-webkit-transform: rotate('+(i*6)+'deg);}';
		aLi+="<li></li>";
	}
    oList.innerHTML=aLi;
    oCs.innerHTML+=sCs;
    toTime();
    setInterval(toTime,1000);
    function toTime(){
        var oDate=new Date();
        var iSec=oDate.getSeconds();
        var iMin=oDate.getMinutes()+iSec/60;
        var iHours=oDate.getHours()+iMin/60;
        /*object.style.transform="rotate(7deg)"注意要用双引号*/
        oSec.style.WebkitTransform="rotate("+(iSec*6)+"deg)";
        oMin.style.WebkitTransform="rotate("+(iMin*6)+"deg)";
        oHour.style.WebkitTransform="rotate("+(iHours*30)+"deg)";
    };
};