$(function() {

	var canvas = document.getElementById( 'map-canvas' ) ;
	var latlng = new google.maps.LatLng( 35.628743 , 139.685247 );
	var markers = [] ;
	// options
	var mapOptions = {
		zoom: 13 ,
		center: latlng ,
		scrollwheel: false,
	};

	var map = new google.maps.Map( canvas , mapOptions ) ;

	// generate marker
	// Gakugeidaigaku station
	markers[0] = new google.maps.Marker({
		map: map ,
		position: new google.maps.LatLng( 35.628743 , 139.685247 ) ,
	}) ;
	// Shibuya station
	markers[1] = new google.maps.Marker({
		map: map ,
		position: new google.maps.LatLng( 35.659126 , 139.701936 ) ,
	}) ;
});