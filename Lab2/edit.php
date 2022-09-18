<?php
	  $host		=	'localhost';
      $user		=	'root';
      $pass		=	'';	
      $database	=	'roscripts';
  
      $connect = @mysql_connect ( $host, $user, $pass ) ;
      mysql_select_db ( $database, $connect );
  
	$id=$_GET['id'];
 
	$name=$_POST['contact_name'];
	$profession=$_POST['contact_profession'];
    $telephone=$_POST['contact_Tel_number'];
    $mobile=$_POST['contact_mobile_number'];
    
    $sql= "UPDATE directories SET contact_name='$name', contact_profession='$profession', contact_Tel_number='$telephone', contact_mobile_number='$mobile' WHERE contact_mobile_number='$id'";
	mysql_query($sql);
	header('location:display.php');
?>