var googleMapGuestBookMarkers=new Array();
 $.ajax({
	url:'includes/getGuests.php',
	success:function(data){
		
		var googleMapMarkers = data.split('**');
		 $(googleMapMarkers).each(function(index,text) {
		 	if (text!="")
		 	{
				googleMapGuestBookMarkers[index]=new Array();
				googleMapGuestBookMarkers[index]= text.split('*');
			}
	});
	initialize();
},
	error: function() {
	  alert("it did not work");
	}
});
 
 function  initialize(){
         var myLatlng = new google.maps.LatLng(32.809153,-83.732582);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
   map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
   marker= new Array();
   thisInfoWindow=new Array();
		  for (var i = 0; i < googleMapGuestBookMarkers.length; i++) {
		        
		         	marker[i] = new google.maps.Marker({
		            position: new google.maps.LatLng (googleMapGuestBookMarkers[i][1], googleMapGuestBookMarkers[i][2]),
		            map: map,
		            title: googleMapGuestBookMarkers[i][0]
		        });
		        console.log(marker[i]);
		    	thisInfoWindow[i] = new google.maps.InfoWindow({
                content:googleMapGuestBookMarkers[i][3]
                
            });
		    addEvent=function (i){
		     	google.maps.event.addListener(marker[i], 'click',function() {
              thisInfoWindow[i].open(map,marker[i]);
              
            });
            
		     }
		   addEvent(i);   
		     
            
		  }
      }