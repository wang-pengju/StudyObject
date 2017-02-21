$(document).ready(function(){
    
    $(".showlist").mouseover(function(){

    	$(this).find('.submenu').show();
    }).mouseout(function(){
    	$(this).find('.submenu').hide();
    });

    $('.app_box').mouseover(function(){
   	    $(this).find('.submenu').show();
    }).mouseout(function(){
    	$(this).find('.submenu').hide();
    });

    $('.login_box').mouseover(function(){
   	    $(this).find('.submenu').show();
    }).mouseout(function(){
    	$(this).find('.submenu').hide();
    });
    
    $('.search_box').click(function(){
    	$(".searchbox").addClass('scale');
    });

    $('.close_icon').click(function(){
    	$(".searchbox").removeClass('scale');
    })
    
   
    /*lesson_list 部分*/
    $('.kuai_icon').on('click',function(){
    	$('.lesson_list li').off();
        $(this).addClass('curr');
        $('.list_icon').removeClass('curr');
        $('#changeid').removeClass('lesson_list2').addClass('lesson_list');
        $('.lesson_list li').find('p').stop().css('height',0);
        $('.lesson_list li').find('p').stop().css('display','none');
        $('.lesson_list li').find('p').stop().css('margin-bottom',"10px");
        $('.zhongji').stop().hide();
        $('.learn_number').stop().hide(); 
        //添加移入移除事件
        $('.lesson_list li').on('mouseenter',function(){
            var $index=$(this).index();
            //执行当前操作
            $(this).find('.user_action').stop().hide(); 
            $('.lessonplay').eq($index).stop().css('opacity','1');
            $('.playericon').eq($index).stop().show();

           $('.lesson_infor').eq($index).stop().animate({//添加过度动画
        	    height:'175px',
            },"fast").find('p').stop().animate({
        	    height:'52px',
        	    opacity:'1'
            }).stop().show();
            $(this).find(".zhongji").stop().show();
            $(this).find(".learn_number").stop().show();
            return false;
        })

        $('.lesson_list li').on('mouseleave',function(){
            var $index=$(this).index(); 
            $('.lessonplay').eq($index).stop().css('opacity',0);
            $(this).find('.playericon').stop().hide();
            $(this).find('.lesson_infor').stop().css('height','88px');
            $(this).find('.lesson_infor').stop().animate({
        	    height:'88px',
            },"fast").find('p').stop().animate({
        	    height:'0',
        	    opacity:'0'
            }).stop().hide();;

            $(this).find(".zhongji").stop().hide();
            $(this).find(".learn_number").stop().hide()
        });   
        $('.lesson_list li').on('click',function(){
            $(this).find('.user_action').stop().show();
        })  
    })
    //默认页面移入移除事件
    $('.lesson_list li').on('mouseenter',function(){
        var $index=$(this).index();
            //执行当前操作
        $(this).find('.user_action').stop().hide(); 
        $('.lessonplay').eq($index).stop().css('opacity','1');
        $('.playericon').eq($index).stop().show();

        $('.lesson_infor').eq($index).stop().animate({//添加过度动画
        	height:'175px',
        },"fast").find('p').stop().animate({
        	height:'52px',
        	opacity:'1'
        }).show();
        $(this).find(".zhongji").stop().show();
        $(this).find(".learn_number").stop().show();
        return false;
    })
   $('.lesson_list li').on('mouseleave',function(){
        var $index=$(this).index(); 
        $('.lessonplay').eq($index).stop().css('opacity',0);
        $(this).find('.playericon').stop().hide();
        $(this).find('.lesson_infor').stop().css('height','88px');
        $(this).find('.lesson_infor').stop().animate({
        	height:'88px',
        },"fast").find('p').animate({
        	height:'0',
        	opacity:'0'
        }).hide();;

        $(this).find(".zhongji").stop().hide();
        $(this).find(".learn_number").stop().hide()
    });   
    $('.lesson_list li').on('click',function(){
        $(this).find('.user_action').stop().show();
    })

    /*lesson_list2 部分*/        
    $('.list_icon').click(function(){
        $('.lesson_list li').off();//解除绑定事件
        $('.lesson_list li').find('p').stop().css('height','36px');
        $('.lesson_list li').find('p').stop().css('display','block');
        $('.lesson_list li').find('p').stop().css('margin-bottom',0);
        $('.zhongji').stop().show();
        $('.learn_number').stop().show();
    	$('#changeid').removeClass('lesson_list').addClass('lesson_list2');   
    	$('.kuai_icon').removeClass('curr');
    	$(this).addClass('curr');
    	$('.lesson_list2 li').on('mouseover',function(){
    	    $(this).find('.lessonplay').stop().css('opacity','1');
    	    $(this).find('.playericon').stop().show();
    	    $(this).find('.user_action').stop().show();
        })
        $('.lesson_list2 li').on('mouseout',function(){
    	    $(this).find('.lessonplay').stop().css('opacity','0');
    	    $(this).find('.playericon').stop().hide();
    	    $(this).find('.user_action').stop().hide();
        }) 
    })

   /*gotop部分*/

    $('.iphone').mouseover(function(){
   	    $('#iphone_img').show();
    }).mouseout(function(){
   	    $('#iphone_img').hide();
    });
    $('.Android').mouseover(function(){
   	    $('#a_img').show();
    }).mouseout(function(){
   	    $('#a_img').hide();
    });
    $('.company_app').mouseenter(function(){
   	   $(".appewm").show();
    }).mouseleave(function(){
   	   $(".appewm").hide();
    });

   
    /*点击回到顶部*/
    $(window).scroll(function(){

        if($('#gotop').offset().top<=806){
            $('.top').css('display','none'); 
        }else{
    	    $('.top').css('display','block');
        }
    });

    $('#gotop').click(function(){
    	$(window).scrollTop(0);
    })
    
    $('.page-number').click(function(){
    	$('#gotoval').val($(this).html());
    	$('.page-number').removeClass('pgCurrent');
    	$(this).addClass('pgCurrent');
    	var num1=parseInt($(this).html());
    	window.open('http://www.jikexueyuan.com/course/?pageNum='+(num1+1));
    })
    $('.prev').click(function(){
    	var num=$('#gotoval').val();

    	if(num==1){
    		num=1;
    	}else{
    		num--;	
    	}
    	$('#gotoval').val(num);
    	window.open('http://www.jikexueyuan.com/course/?pageNum='+num);
    });
    $('.next').click(function(){
        var num=$('#gotoval').val();

    	if(num==95){
    		num=95;
    	}else{
    		num++;
    	}
    	$('#gotoval').val(num);
    	window.open('http://www.jikexueyuan.com/course/?pageNum='+num);
    });
    $('.lastOne').click(function(){
    	window.open('http://www.jikexueyuan.com/course/?pageNum='+95);
    })
})