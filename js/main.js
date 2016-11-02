// this is the useof the google map api
function initialize(){
	var mapPro={
		center:new google.maps.LatLng(37.3382,-121.8863),
		center1:new google.maps.LatLng(37.7749,-122.4194),
		zoom:5,
		// google map with the no controls
		disableDefaultUI:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP,
}
var map=new google.maps.Map(document.getElementById('googleMap'),mapPro)
var marker=new google.maps.Marker({
	position:mapPro.center
})
marker.setMap(map)

// this is for the another location 
var marker1=new google.maps.Marker({
	position:mapPro.center1
})
marker1.setMap(map)
// this is for the marker event, w can change the event like mouseover instead click
google.maps.event.addListener(marker1,'click',function(){
	map.setZoom(9)
	map.setCenter(marker1.getPosition())
})
// this is for the another marker event for the new location
google.maps.event.addListener(marker,"click",function(){
	map.setZoom(10)
	map.setCenter(marker.getPosition())
})
}
google.maps.event.addDomListener(window,"load",initialize)
