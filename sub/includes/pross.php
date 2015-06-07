<?php
if (isset($_POST['submit']))
{
	$completeurl = $_POST['placeYouAreFrom'];	
	$completeurl = "http://maps.googleapis.com/maps/api/geocode/xml?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&sensor=true";
	$xml = simplexml_load_file($completeurl);
	$lat = $xml->result->geometry->location->lat;
	$lng = $xml->result->geometry->location->lng;
	//$Area= $xml->recenttracks->track;
	echo $lat.' '.$lng;
}


?>