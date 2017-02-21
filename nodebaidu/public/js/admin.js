$(document).ready(function(){
	var $newsTable=$("#newstable tbody");
	refreshNews();
    //添加新闻：
    $("#btnsubmit").click(function(e){
        e.preventDefault();
        //输入判断
        if($("#newstitle").val()==='' || $("#newstype")==='' || $("#newsimg").val()==='' ||$("#newstime").val()==='' || $("#newssrc").val()===''){
            if($("#newstitle").val()===''){
            	$("#newstitle").parent().addClass('has-error');
            }else{
            	$("#newstitle").parent().removeClass('has-error');
            }
            if($("#newstype").val()===''){
            	$("#newstype").parent().addClass('has-error');
            }else{
            	$("#newstype").parent().removeClass('has-error');
            }
            if($("#newssrc").val()===''){
            	$("#newssrc").parent().addClass('has-error');
            }else{
            	$("#newssrc").parent().removeClass('has-error');
            }
            if($("#newsimg").val()===''){
            	$("#newsimg").parent().addClass('has-error');
            }else{
            	$("#newsimg").parent().removeClass('has-error');
            }
            if($("#newstime").val()===''){
            	$("#newstime").parent().addClass('has-error');
            }else{
            	$("#newstime").parent().removeClass('has-error');
            }
        }else{
        //提交添加
            var jsonNews={
            	newstitle:$("#newstitle").val(),
            	newstype:$("#newstype").val(),
            	newssrc:$("#newssrc").val(),
            	newsimg:$("#newsimg").val(),
            	newstime:$("#newstime").val()
            };
            $.ajax({
            	url:'/admin/insert',
            	type:'post',
            	data:jsonNews,
            	datatype:'json',
            	success:function(data){
            		$("#newstitle").val('');
                    $("#newssrc").val('');
                    $("#newsimg").val('');
                    $("#newstime").val('');
                    refreshNews();
            	}
            });
        }
    });
    //删除新闻的功能
    var deleteId=null;
    $newsTable.on('click','.btn-danger',function(e){
        $('#deleteModal').modal('show');
        deleteId=$(this).parent().prevAll().eq(5).html();
    });
    $('#deleteModal #confirmDelete').click(function(e){
    	if(deleteId){
            $.ajax({
            	url:'/admin/delete',
            	type:'post',
            	data:{newsid:deleteId},
            	success:function(data){
            		$('#deleteModal').modal('hide');
            		refreshNews();
            	}
            });
    	}

    });
    //修改新闻的功能
    var updateId=null;
    $newsTable.on('click','.btn-primary',function(e){
        $('#updateModal').modal('show');
        updateId=$(this).parent().prevAll().eq(5).html();
        $.ajax({
            	url:'/admin/curnews',
            	type:'get',
                datatype:'json',
                data:{newsid:updateId},
            	success:function(data){
            		$('#unewstitle').val(data[0].newstitle);
            		$('#unewstype').val(data[0].newstype);
            		$('#unewsimg').val(data[0].newsimg);
            		$('#unewssrc').val(data[0].newssrc);
            		var utime=data[0].newstime.split('T')[0];
            		$("#unewstime").val(utime);
            	}
            });
    });
   $('#updateModal #confirmUpdate').click(function(e){
       $.ajax({
                url:'/admin/update',
                type:'post',
                data:{
                    newstitle:$('#unewstitle').val(),
                    newstype:$('#unewstype').val(),
                    newsimg:$('#unewsimg').val(),
                    newstime:$('#unewstime').val(),
                    newssrc:$('#unewssrc').val(),
                    id:updateId
                },
                success:function(data){
                    $('#updateModal').modal('hide');
                    refreshNews();
                }
            });

   });






	function refreshNews(){
		//empty table
        $newsTable.empty();

        $.ajax({
		    url:'/admin/getnews',
		    type:'get',
		    datatype:'json',
            /*data:{newstype:type},*/
		    success:function(data){
                data.forEach(function(item,index,array){
                	var $tdid=$('<td>').html(item.id);
                	var $tdtitle=$('<td>').html(item.newstitle);
                	var $tdtype=$('<td>').html(item.newstype);
                    var $tdsrc=$('<td>').html(item.newssrc);
                    var $tdimg=$('<td>').html(item.newsimg);
                    var $tdtime=$('<td>').html(moment(item.newstime).format("L"));
                    var $tdctrl=$('<td>');
                    var $btnupdate=$('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete=$('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate,$btndelete);
                    var $tRow=$("<tr>");
                    $tRow.append($tdid,$tdtitle,$tdtype,$tdsrc,$tdimg,$tdtime,$tdctrl);
                    $newsTable.append($tRow);
                })
		    }

	    });
    }
});
