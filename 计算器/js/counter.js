window.onload=function(){
    var aNum=document.querySelectorAll(".num");// 数字键盘
    var oText=document.querySelector(".text");// 显示屏
    var oText2=document.querySelector("#text2")//存储容器
    var aPer=document.querySelectorAll(".oper");//运算符
    var oContainer=document.querySelector("#num_container")//存储容器
    var clear=document.querySelector(".clear");//置零
    var plus_minus=document.querySelector(".plus-minus");//正负切换
    var oEqual=document.querySelector(".equal");//等于
    oText.innerHTML="0";
    /*数字键盘*/
    fnNum();
    function fnNum(){
    	for(var i=0;i<aNum.length;i++){
            
           (function(a){
           	    aNum[a].onclick=function(){
                  if(oText.innerHTML.indexOf('.')!=-1){
                      if(this.innerHTML=='.'){
                        return; 
                      }   
                    }
                  if(oContainer.innerHTML&&oText.innerHTML&&oText2.innerHTML==''){                                   
                    oText2.innerHTML=oText.innerHTML;   
                    oText.innerHTML='';                                                             
                   }
                  var re1=/^0\.{1}\d+$/;
                  var re2=/^([0]\d+)$/;   
                  oText.innerHTML+=this.innerHTML;  
                  if(re1.test(oText.innerHTML)){
                    return;
                  }  
                  if(re2.test(oText.innerHTML)){   
                    oText.innerHTML=this.innerHTML;             
                  } 
                };
           })(i)
    	};
    }
    /*符号部分*/
    fnOption();
    function fnOption(){
        for(var i=0;i<aPer.length;i++){
        	(function(a){
        		aPer[a].onclick=function(){
        			if(oText.innerHTML&&oContainer.innerHTML&&oText2.innerHTML){
                var n=eval(oText.innerHTML+oContainer.innerHTML+oText2.innerHTML);
                oText.innerHTML=n;
                oText2.innerHTML="";
              }
              oContainer.innerHTML=this.innerHTML;
        		}
        	})(i)
        }
    };
    /*正负转换*/
    plus_minus.onclick=function(){
    	if(oText.innerHTML>0){
    		oText.innerHTML=-oText.innerHTML;
    	}else{
    		oText.innerHTML=oText.innerHTML;
    	}
    }
    /*倒数部分*/
    var count_b=document.querySelector(".count_backwards");
    var sin=document.querySelector(".sin");
    var cos=document.querySelector(".cos");
    var tan=document.querySelector(".tan");
    var square=document.querySelector(".square");
    
    count_b.onclick = function() {
      var a = 1 / oText.innerHTML;
      if(oText.innerHTML == '0') {
        a = '正无穷'
      }
      oText.innerHTML = a;
    }
    /*sin部分 角度要装换为弧度*/
    sin.onclick=function(){
      var m=Math.sin((Math.PI/180)*oText.innerHTML);
      oText.innerHTML=m;
    }
    /*cos部分 角度要装换为弧度*/
    cos.onclick=function(){
      var m=Math.cos(((Math.PI/180)*oText.innerHTML).toFixed(8));
      oText.innerHTML=m;
    }
    /*tan部分 角度要装换为弧度*/
    tan.onclick=function(){
      var m=Math.tan((Math.PI/180)*oText.innerHTML);
      oText.innerHTML=m;
    }
    /*square部分*/
    square.onclick=function(){
      var m=Math.pow(oText.innerHTML,2);
      oText.innerHTML=m;
    }
    /*等号部分*/
    
    oEqual.onclick=function(){
   	  if(oText2.innerHTML==''&&oContainer.innerHTML==''&&oText.innerHTML==''){
        return; 
      }
    	var n=eval(oText2.innerHTML+oContainer.innerHTML+oText.innerHTML);
		  if(oContainer.innerHTML!="/"){
        oText.innerHTML = parseFloat(n.toFixed(8));
        oText2.innerHTML = '';
        oContainer.innerHTML= '';
      }else{
        oText.innerHTML = '输入有误';
      }
    }

     /*清屏*/
    clear.onclick=function(){
      oText.innerHTML="0";
      oContainer.innerHTML='';
      oText2.innerHTML='';
    }
};