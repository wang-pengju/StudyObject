<?php

session_start();

$token=md5(time()."dmirandom");

$_SESSION[token]=$token;


echo json_encode(array('success'=>$token));

?>