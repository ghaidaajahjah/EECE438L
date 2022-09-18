<?php
	 $host		=	'localhost';
     $user		=	'root';
     $pass		=	'';	
     $database	=	'roscripts';
 
     $connect = @mysql_connect ( $host, $user, $pass ) ;
     mysql_select_db ( $database, $connect );
 
    $id=$_GET['id'];
    $sql="SELECT * FROM directories WHERE contact_mobile_number='$id' ";
	$query=mysql_query($sql);
	$row=mysql_fetch_array($query);
?>
<!DOCTYPE html>
<html>
<head>
<title>Update Contact</title>
</head>
<body>
	<h2>Update Contact</h2>
	<form method="POST" action="edit.php?id=<?php echo $id; ?>">
		<label>Name:</label><input type="text" value="<?php echo $row['contact_name']; ?>" name="contact_name">
		<label>Profession:</label><input type="text" value="<?php echo $row['contact_profession']; ?>" name="profession">
        <label>Telephone:</label><input type="text" value="<?php echo $row['contact_Tel_number']; ?>" name="telephone">
        <label>Mobile:</label><input type="text" value="<?php echo $row['contact_mobile_number']; ?>" name="mobile">
		<input type="submit" name="submit">
		<a href="display.php">Back</a>
	</form>
</body>
</html>