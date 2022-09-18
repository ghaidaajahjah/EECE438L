<?php
include("display.php");
?>
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container">
 <div class="row">
   <div class="col-sm-8">
    
    <div class="table-responsive">
      <table class="table table-bordered">
       <thead><tr><th>S.N</th>
         <th>Name</th>
         <th>Profession
         <th>Telephone Number</th>
         <th>Mobile Number</th>
    </thead>

    <tbody>
  <?php
      if(is_array($fetchData)){      
      $sn=1;
      foreach($fetchData as $data){
    ?>
      <tr>
      
      <td><?php echo $data['contact_name']??''; ?></td>
      <td><?php echo $data['contact_profession']??''; ?></td>
      <td><?php echo $data['contact_Tel_number']??''; ?></td>
      <td><?php echo $data['contact_mobile_number']??''; ?></td>
     </tr>
     <?php
      $sn++;}}else{ ?>
      <tr>
        <td colspan="8">
    <?php echo $fetchData; ?>
  </td>
    <tr>
    <?php
    }?>
    </tbody>
     </table>
   </div>
</div>
</div>
</div>
</html>