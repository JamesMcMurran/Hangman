<?php
require 'DbConnect.php';

$result = mysqli_query($mysqli, "SELECT * FROM  guests");

while($row = mysqli_fetch_array($result))
	  {
	  echo $row['locName'].'*'.$row['lat'].'*'.$row['log'].'*'.$row['comment'].'**';
   	  }
?>