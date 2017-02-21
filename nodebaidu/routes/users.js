var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var connection = require('./db.js');
/* 后台路由页面 */

//获取所有新闻列表

router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM `news` order by id desc',function(err,rows){
    	res.json(rows);
    })
});

//点击确认更新

router.post('/update',function(req,res){
    var newsid=req.body.id,
        newstype=req.body.newstype,
        newstitle=req.body.newstitle,
        newstime=req.body.newstime,
        newsimg=req.body.newsimg,
        newssrc=req.body.newssrc;
    connection.query('UPDATE `news` SET `newstitle`=?,`newstype`=?,`newssrc`=?,`newsimg`=?,`newstime`=? WHERE `id`=?',[newstitle,newstype,newssrc,newsimg,newstime,newsid],function(err,rows){
        console.log(rows.changedRows);
    });
    res.end('ok');
});

//模态框取值

router.get('/curnews',function(req,res){
   var newsid=req.query.newsid;
   connection.query('SELECT * FROM `news` WHERE id=?',[newsid],function(err,rows){
        res.json(rows);
   });
});

//删除数据

router.post('/delete',function(req,res){
	var newsid=req.body.newsid;
	connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newsid],function(err,result){
        console.log(result.affectedRows);
	});
    res.end('ok');
});

//插入新闻

router.post('/insert',function(req,res){
	var newstitle=req.body.newstitle,
        newstype=req.body.newstype,
        newssrc=req.body.newssrc,
        newsimg=req.body.newsimg,
        newstime=req.body.newstime;
    connection.query('INSERT INTO `news` (`newstitle`,`newstype`,`newssrc`,`newsimg`,`newstime`) VAlUES (?,?,?,?,?)',
        [newstitle,newstype,newssrc,newsimg,newstime],function(err,result){
        if(err){
            console.log('insert error');
            return;
        }
        console.log(result.insertId);
        res.end('ok');
    });
});



module.exports = router;
