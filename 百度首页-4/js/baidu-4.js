$(document).ready(function(){

	var newimage=JSON.parse(window.localStorage.getItem('newimage'));
	var opacity=window.localStorage.getItem('opacity');
        if(newimage){//如果newimage存在则加载存储的值
        	$('.logo img').attr('src','image/logo_white.png');
        	$('.skin_container').css('background-color',newimage.color);
        	$('.skin_container').css('background-image','url('+newimage.image+')');
        }
        if(opacity){
        	$(".art_wrapper").css('opacity',opacity/100);
        }
    $(".skin_set").click(function(){
    	$(".art_wrapper").css('opacity','1');
    	$('.skin_container').css('background-color','');
    	$('.skin_container').css('background-image','');
    	window.localStorage.removeItem('opacity');
    	window.localStorage.removeItem('newimage');
    })
	/*vip_center显示，离开隐藏*/
   $('.login_container').on('click mouseover',function(){
   	   $(".vip_center").show();
   });
   $('.login_container').mouseout(function(){
        $(".vip_center").hide(); 	
   })
   /*install显示，离开隐藏*/
   $('.setting_container').mouseover(function(){
        $(".install").show();
   });
   $('.setting_container').mouseout(function(){
        $(".install").hide();
   });
   /*sidebar显示，离开隐藏*/
   $(".sidebar_container").mouseover(function(){
        $(".sidebar").show();
   });
   $(".sidebar_container").mouseout(function(){
        $(".sidebar").hide();
   });
   /*skin_peeling 换肤*/
    $(".skin_peeling").click(function(){
        $('.top_skin').animate({
            top:0,
        },1000);
    });
    $('.skin_up').click(function(){
    	$('.top_skin').animate({
    		top:'-309px',
    	},500);
    });
    $('.skin_option>li').click(function(){
    	$('.skin_option>li').removeClass('on');
    	$(this).addClass('on');
    });

    $(".js_bg").click(function(){
        $(".js_bg>a").removeClass('add_bg');
        $(this).find('a').addClass('add_bg');
        $(".skin_type_content").hide();
        $(".skin_type_content").eq($(this).index()).show();
    });
    //更换透明度：
    
    $("#progress_MoveBtn").on({
        mousedown: function(e){
                var os = $("#progress_Bar").offset();
                $(document).on('mousemove.drag', function(e){ 
                	if(e.pageX<os.left){
                		$("#progress_MoveBtn").offset({left:os.left});
                		
                	}else if(e.pageX>(os.left+80)){
                	   $("#progress_MoveBtn").offset({left:os.left+80})	
                	}else{
                		$("#progress_MoveBtn").offset({left: e.pageX}); 
                	}
                	var osBtn=$("#progress_MoveBtn").offset();
                	var percent=parseInt((osBtn.left-os.left)/80*100);
                	$("#set_txt").html(percent+"%");
                    $(".art_wrapper").css('opacity',percent/100);
                    window.localStorage.setItem('opacity',percent);
                });
                $(document).on('mouseup',function(){
                	$(document).off('mousemove.drag');
                })
            }
    });
    $(".skin_img_item").click(function(){

    	var url=$(this).find('img').attr('src');
    	$('#view_pic').attr('src','');
    	$('#view_pic').attr('src',url);
         //点击的时候改变logo的图片路径
        $('.logo img').attr('src','');
        $('.logo img').attr('src','image/logo_white.png');
        //给整个页面添加背景
        $('.skin_container').css('background-color','#404040');
    	$('.skin_container').css('background-image','url('+url+')');
         
        $('.choose').hide();
        $(this).find('.choose').show();

        localStorageData(url);
    });
    //本地存储背景信息
    function localStorageData(url){
        window.localStorage.setItem('newimage',JSON.stringify({color: '#404040',image:url}))  	
    };

   /*title点击改变字体*/
           
      $(".headline").click(function(){
      	  $(".headline").removeClass("active");
      	  $(this).addClass("active"); 
      });
   /*music 点击显示*/
   $(".mic_title").click(function(){
       $(".mic_content").animate({
           right:0,
           opacity:'0.8',
       },1000);
   });
   $(".retract").click(function(){
   	   $(".mic_content").animate({
           right:'925px',
           opacity:'0',
       },500);
   })
})
