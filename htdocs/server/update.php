<?php
header("Content-type:application/json;charset=utf-8");

require_once('db.php');

if($link){
   //插入新闻
   $newstitle=htmlspecialchars($_POST['newstitle']);
   $newstype=htmlspecialchars($_POST['newstype']);
   $newssrc=htmlspecialchars($_POST['newssrc']);
   $newsimg=htmlspecialchars($_POST['newsimg']);
   $newstime=htmlspecialchars($_POST['newstime']);
   $newsid=htmlspecialchars($_POST['id']);   

   $sql="UPDATE `news` SET `newstitle`='{$newstitle}',`newstype`='{$newstype}',`newssrc`='{$newssrc}',`newsimg`='{$newsimg}',`newstime`='{$newstime}' WHERE `id`={$newsid}";
   mysqli_query($link,"SET NAMES utf8");
   $result=mysqli_query($link,$sql);

   echo json_encode(array('success'=>$sql));
}
mysqli_close($link);
?>