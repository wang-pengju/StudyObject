var globalType="推荐";

$(document).ready(function(){
	refreshNews("推荐");
	/*scrollevent("推荐");*/
	$("nav a").click(function(e){
		e.preventDefault();
		var type=$(this).text();
        globalType=type;
		refreshNews(type);		
	})
	scrollevent();
});
function refreshNews(type){
    var $lists=$("article ul");
    $lists.empty();
    $.ajax({
		url:'/news',
		type:'get',
		datatype:'json',
		data:{newstype:type},
		success:function(data){
			data.forEach(function(item,index,array){
				var $list=$("<li></li>").addClass("news_list").prependTo($lists);
	            var $newsImg=$('<div></div>').addClass('newsimg').appendTo($list);
	            var $img=$("<img>").attr("src",item.newsimg).appendTo($newsImg);
	            var $newsContent=$("<div></div>").addClass("newscontent").appendTo($list);
	            var $h2=$("<h2></h2>").html(item.newstitle).appendTo($newsContent);
	            var $p=$("<p></p>").appendTo($newsContent);
	            var $newsTime=$("<span></span>").addClass("newstime").html(moment(item.newstime).endOf('day').fromNow()).appendTo($p);
	            var $newsTime=$("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);
			});
		}
	});
}
/*滚动事件*/
function scrollevent() {
    $(window).scroll(function() {
        var screenHeight = $(window).height();
        var pageHeight = $(document).height();
        var Top = $(document).scrollTop();
        var $lists = $("article ul");
        if (screenHeight + Top >= pageHeight) {
            $.ajax({
                url: '/news/scrollhandle',
                type: 'get',
                datatype: 'json',
                data: {newstype:globalType},
                success: function(data) {
                    data.forEach(function(item, index, array) {
                        var $list = $("<li></li>").addClass("news_list").prependTo($lists);
                        var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                        var $img = $("<img>").attr("src", item.newsimg).appendTo($newsImg);
                        var $newsContent = $("<div></div>").addClass("newscontent").appendTo($list);
                        var $h2 = $("<h2></h2>").html(item.newstitle).appendTo($newsContent);
                        var $p = $("<p></p>").appendTo($newsContent);
                        var $newsTime = $("<span></span>").addClass("newstime").html(moment(item.newstime).endOf('day').fromNow()).appendTo($p);
                        var $newsTime = $("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);
                    });
                }
            });
        }
    })
}
