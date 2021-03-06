$(window).ready(function() {
    var that;
    var newimage = JSON.parse(window.localStorage.getItem('newimage'));
    var opacity = window.localStorage.getItem('opacity');

    if (newimage) { //如果newimage存在则加载存储的值
        $('.logo').find('img').attr('src', 'image/logo2.png');
        $('.skin_container').css('background-color', newimage.color);
        $('.skin_container').css('background-image', 'url(' + newimage.image + ')');
    }
    //点击skin_set清除历史记录
    $(".skin_set").click(function() {
        $(".art_wrapper").css('opacity', '1');
        $('.skin_container').css('background-color', '');
        $('.skin_container').css('background-image', '');
        window.localStorage.removeItem('opacity');
        window.localStorage.removeItem('newimage');
    })
    $("#gotop").click(function() {
        $(window).scrollTop(0);
        $(".more_bar").show();
        $(".art_content").addClass('remove');
        $("footer").show();
    })
    single.init();
});


var single = {
        init: function() {
            this.render();
            this.bind();
        },
        render: function() {
            that = this;
            that.logo = $('.logo');
            that.skin_container = $('skin_container');
            that.skin_set = $('.skin_set');
            that.login_container = $('.login_container');
            that.setting_container = $('.setting_container');
            that.sidebar_container = $('.sidebar_container');
            that.skin_peeling = $('.skin_peeling');
            that.skin_up = $('.skin_up');
            that.skin_Li = $('.skin_option>li');
            that.js_bg = $('.js_bg');
            that.progress_MoveBtn = $('#progress_MoveBtn');
            that.skin_img_item = $('.skin_img_item');
            that.headline = $('.headline');
            that.mic_title = $('.mic_title');
            that.retract = $('.retract');
            that.close = $('.close');
        },
        bind: function() {
            that = this;
            that.skin();
            that.opacity();
            that.showorhide();
            that.changeTitle();
            that.music();
            that.mouseScroll();
        },
        skin: function() {
            that = this;
            /*skin_peeling 换肤*/
            that.skin_peeling.click(function() {
                $('.top_skin').animate({
                    top: 0,
                }, 1000);
            });
            that.skin_up.click(function() {
                $('.top_skin').animate({
                    top: '-309px',
                }, 500);
            });
            that.skin_Li.click(function() {
                this.skin_Li.removeClass('on');
                $(this).addClass('on');
            });
            that.js_bg.click(function() {
                $(".js_bg>a").removeClass('add_bg');
                $(this).find('a').addClass('add_bg');
                $(".skin_type_content").hide();
                $(".skin_type_content").eq($(this).index()).show();
            });
            that.skin_img_item.on('click', function() {
                var url = $(this).find('img').attr('src');
                $('#view_pic').attr('src', '');
                $('#view_pic').attr('src', url);
                //点击的时候改变logo的图片路径
                $('.logo img').attr('src', '');
                $('.logo img').attr('src', 'image/logo2.png');
                //给整个页面添加背景
                $('.skin_container').css('background-color', '#404040');
                $('.skin_container').css('background-image', 'url(' + url + ')');

                $('.choose').hide();
                $(this).find('.choose').show();
                localStorageData(url);
            })
        },
        opacity: function() {
            that = this;
            that.progress_MoveBtn.on({
                mousedown: function(e) {
                    var os = $("#progress_Bar").offset();
                    $(document).on('mousemove.drag', function(e) {
                        if (e.pageX < os.left) {
                            $("#progress_MoveBtn").offset({
                                left: os.left
                            });

                        } else if (e.pageX > (os.left + 80)) {
                            $("#progress_MoveBtn").offset({
                                left: os.left + 80
                            })
                        } else {
                            $("#progress_MoveBtn").offset({
                                left: e.pageX
                            });
                        }
                        var osBtn = $("#progress_MoveBtn").offset();
                        var percent = parseInt((osBtn.left - os.left) / 80 * 100);
                        $("#set_txt").html(percent + "%");
                        $(".art_wrapper").css('opacity', percent / 100);
                        window.localStorage.setItem('opacity', percent);
                    });
                    $(document).on('mouseup', function() {
                        $(document).off('mousemove.drag');
                    })
                }
            });
            var opacity = window.localStorage.getItem('opacity');
            if (opacity) {
                $(".art_wrapper").css('opacity', opacity / 100);
            }
        },
        showorhide: function() {
            that = this;
            that.login_container.on('click mouseover', function() {
                $(".vip_center").show();
            }).on('mouseout', function() {
                $(".vip_center").hide();
            });
            that.setting_container.on('mouseover', function() {
                $(".install").show();
            }).on('mouseout', function() {
                $(".install").hide();
            });
            that.sidebar_container.mouseover(function() {
                $(".sidebar").show();
            }).mouseout(function() {
                $(".sidebar").hide();
            });
        },
        changeTitle: function() {
            that = this;
            that.headline.click(function() {
                var $index = $(".headline").index(this); //获取当前index
                $(".headline").removeClass("active"); //重置
                $(".wrap_list").hide(); //重置
                $(this).addClass("active");
                $(".wrap_list").eq($index).show();
            })
        },
        music: function() {
            that = this;
            that.mic_title.click(function() {
                $(".mic_content").animate({
                    right: 0,
                    opacity: '0.8',
                }, 1000);
            });
            that.retract.click(function() {
                $(".mic_content").animate({
                    right: '925px',
                    opacity: '0',
                }, 500);
            });
            that.close.click(function() {
                var $index = $(".close").index(this);
                $(".recommend").eq($index).remove();
            })
        },
        mouseScroll: function() {
            $(window).scroll(function() {
                var winPos = $(window).scrollTop();
                $(".more_bar").hide();

                $(".art_content").removeClass('remove');
                $("footer").hide();
                if (winPos > 50) {
                    $("#gotop").show();
                } else {
                    $("#gotop").hide();
                }
            })
        }
    }
    //本地存储背景信息
function localStorageData(url) {
    window.localStorage.setItem('newimage', JSON.stringify({
        color: '#404040',
        image: url
    }))
};
var scrollFunc = function(e) {
        e = e || window.event;
        var aContent = $("#art_content");
        aContent.removeClass("remove");
    }
    /*注册事件*/
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
} //W3C
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari
