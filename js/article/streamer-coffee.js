$(function() {

	var canvas = document.getElementById( 'map-canvas' ) ;
	var latlng = new google.maps.LatLng( 35.628743 , 139.685247 );
	var markers = [] ;
	// options
	var mapOptions = {
		zoom: 17 ,
		center: latlng ,
		draggable: false ,
		scrollwheel: false,
	};

	var map = new google.maps.Map( canvas , mapOptions ) ;

	// generate marker
	// Streamer Coffee
	markers[0] = new google.maps.Marker({
		map: map ,
		position: new google.maps.LatLng( 35.632559 , 139.6875087 ) ,
	}) ;
});