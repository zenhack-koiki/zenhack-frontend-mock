$(function() {

	var canvas = document.getElementById( 'map-canvas' ) ;
	var latlng = new google.maps.LatLng( 35.6239387 , 139.6530591 );
	var markers = [] ;
	// options
	var mapOptions = {
		zoom: 13 ,
		center: latlng ,
		draggable: false ,
		scrollwheel: false,
	};

	var map = new google.maps.Map( canvas , mapOptions ) ;

	// generate marker
	// Ryzm
	markers[0] = new google.maps.Marker({
		map: map ,
		position: new google.maps.LatLng( 35.6239387 , 139.6530591 ) ,
	}) ;
});