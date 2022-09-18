<html>
<body>

<?php

	// set your infomation.
	$host		=	'localhost';
	$user		=	'root';
	$pass		=	'';	
	$database	=	'roscripts';
	
	
	// connect to the mysql database server.
	$connect = @mysql_connect ( $host, $user, $pass ) ;

	if ( $connect )
	{
		mysql_select_db ( $database, $connect );
		$sql = "SELECT contact_name,contact_profession,contact_Tel_number,contact_mobile_number FROM directories";
		
		if ( @mysql_query ( $sql) )
		{
			$query = mysql_query ( $sql );
	?>
			<table border='1'>
			<tr>
			<th>Name</th>
			<th>Profession</th>
			<th>Telephone number</th>
			<th>Mobile number</th>
			</tr>
		<?php	
			while ( $row = mysql_fetch_assoc ( $query ) ){
		?>
				<tr>
				<td><?php echo $row['contact_name'] ;?> </td>
				<td><?php echo $row['contact_profession']; ?> </td>
				<td><?php echo $row['contact_Tel_number']; ?></td>
				<td><?php echo $row['contact_mobile_number']; ?> </td>
				<td>
					<a href="editForm.php?id=<?php echo $row['contact_mobile_number'];?>">Edit</a>
					<a href="delete.php?id=<?php echo $row['contact_mobile_number']; ?>">Delete</a>
				</td>
				</tr>

			<?php } ?>

				</table>
			
<?php
		}
		else {
				die ( mysql_error() );
		}	
	        
        	
		

		
	}
	else {
		trigger_error ( mysql_error(), E_USER_ERROR );
	}

	

        
			
?>


</body>
</html>