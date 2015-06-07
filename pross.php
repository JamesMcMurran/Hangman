<?php
//ini_set('display_errors', 1); 
//error_reporting(E_ALL);
if (isset($_POST['submit']))
{
	require 'includes/DbConnect.php';
	$completeurl = $_POST['placeYouAreFrom'];
	
	//$completeurl = "http://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true";
	$completeurl='http://maps.googleapis.com/maps/api/geocode/xml?address='.$completeurl.'&sensor=true';
	$xml 	= simplexml_load_file($completeurl);
	if(!isset($xml->result->geometry->location->lat)||!isset($xml->result->geometry->location->lng))
	{
		die('I am sorry we were unable to find a location for that.<br />');
	}
	
	$lat 	= $xml->result->geometry->location->lat;
	$lng 	= $xml->result->geometry->location->lng;
	//do a for loop here to look for the right data
	$i=0;
	foreach ($xml->result->address_component as $key => $value) {
		if ($xml->result->address_component[$i]->type[0]=='locality')
		{
			$HArea=	$xml->result->address_component[$i]->long_name;
		}
		if ($xml->result->address_component[$i]->type[0]=='administrative_area_level_1')
		{
			$Area=	$xml->result->address_component[$i]->long_name;
		}
		
		$i++;
	}
	//catch all just in case Google did not give us these
	if(!isset($HArea))
	{
		$HArea="";
	}
	if(!isset($Area))
	{
		$Area="";
	}
	//clean the data never trust anyones data OWASP Rule
	//stops cross side scripting
	$pattern = '/[^a-zA-Z0-9\. -]/';
	$replacement = '';
	$comment = preg_replace($pattern, $replacement,($_POST['comment']));
	$Area = preg_replace($pattern, $replacement,$Area);
	$lat = preg_replace($pattern, $replacement,$lat);
	$lng = preg_replace($pattern, $replacement,$lng);

	$Area = $HArea.','.$Area;
	echo $Area.' '.$lat.' '.$lng.'<br />';
	echo 'Your comment was:'.$comment.'<br />';
	//Just in case the first one did not get it
	//Stops SQL injection
	$comment = $mysqli->real_escape_string($comment);
	$Area = $mysqli->real_escape_string($Area);
	$lat = $mysqli->real_escape_string($lat);
	$lng = $mysqli->real_escape_string($lng);
	
	
	$sql = "INSERT INTO `guestBook`.`guests` (`id`, `locName`, `lat`, `log`, `comment`) VALUES (NULL, '$Area', '$lat', '$lng', '$comment');";								
	/* this query with escaped $city will work */
	if ($mysqli->query($sql)) {
	    echo "Thank you I have added that to the map.";
	}
	else {
		echo "I am sorry something happened on the server and i can not add you right now.<br />";
	}
	
	$mysqli->close();
}

?>