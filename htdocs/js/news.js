$(document).ready(function(){
	refreshNews("推荐");
	
	$("nav a").click(function(e){
		e.preventDefault();
		var type=$(this).text();
		refreshNews(type);
	})
});
function refreshNews(type){
    var $lists=$("article ul");
    $lists.empty();
    $.ajax({
		url:'../server/getnews.php',
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
	            var $newsTime=$("<span></span>").addClass("newstime").html(item.newstime).appendTo($p);
	            var $newsTime=$("<span></span>").addClass("newssrc").html(item.newssrc).appendTo($p);
			})
		}
	});
	

}