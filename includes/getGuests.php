<?php
require 'DbConnect.php';

$result = mysqli_query($mysqli, "SELECT * FROM  guests");

while($row = mysqli_fetch_array($result))
	  {
	  	if(substr($row['locName'],  0, 1) == ',')
	  		$row['locName']=substr($row['locName'],  1);

	  	if(substr($row['comment'],  0, 1) == ',')
	  		$row['comment']=substr($row['comment'],  1);

	  echo $row['locName'].'*'.$row['lat'].'*'.$row['log'].'*'.$row['comment'].'**';
   	  }
?>