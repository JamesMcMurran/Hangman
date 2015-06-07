<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
    <style type="text/css">
      html { height: 100% }
      body { height: 100%; margin: 0; padding: 0 }
      #map_canvas { height: 100% }
    </style>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAuYG9EBHYfAVzZQrwJKIk0AOaLZIXHd8o&sensor=true"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script type="text/javascript" src="js/googleMapsAPI.js"></script>
   
  </head>
  <body onload="initialize()">
  <form action="pross.php"  method="post">
	  Where are you from:<input type="text" id="placeYouAreFrom" name="placeYouAreFrom"/>
	  A comment you would like to leave:<input type="text" id="comment" name="comment"/>
	  <input type="submit" onclick="addToMap" name="submit"/>
  </form>
    <div id="map_canvas" style="width:100%; height:95%"></div>
  </body>
</html>