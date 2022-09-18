<?php
    $host		=	'localhost';
	$user		=	'root';
	$pass		=	'';	
	$database	=	'roscripts';

    $connect = @mysql_connect ( $host, $user, $pass ) ;
    mysql_select_db ( $database, $connect );

	$id=$_GET['id'];
    $sql = "DELETE FROM directories WHERE contact_mobile_number='$id' ";

	mysql_query($sql);

	header('location:display.php');
?>