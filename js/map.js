var mapCanvas = document.getElementById("map");
var mapOptions = {
    center: { lat: 55.872765, lng: 37.479449 },
    zoom: 14,
    styles: 

[
{
"featureType": "all",
"elementType": "geometry",
"stylers": [
    {
        "color": "#ebe3cd"
    }
]
},
{
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#523735"
    }
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "color": "#f5f1e6"
    }
]
},
{
"featureType": "administrative",
"elementType": "geometry",
"stylers": [
    {
    }
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#c9b2a6"
    }
]
},
{
"featureType": "administrative.neighborhood",
"elementType": "all",
"stylers": [
    {
    }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "all",
"stylers": [
    {
    }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#dcd2be"
    }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#ae9e90"
    }
]
},
{
"featureType": "landscape.natural",
"elementType": "geometry",
"stylers": [
    {
        "color": "#dfd2ae"
    }
]
},
{
"featureType": "poi",
"elementType": "all",
"stylers": [
    {
        "visibility": "on"
    }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
    {
        "color": "#dfd2ae"
    }
]
},
{
"featureType": "poi",
"elementType": "labels.text",
"stylers": [
    {
    }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#93817c"
    }
]
},
{
"featureType": "poi.park",
"elementType": "geometry.fill",
"stylers": [
    {
        "color": "#a5b076"
    }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#447530"
    }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
    {
        "color": "#f5f1e6"
    }
]
},
{
"featureType": "road",
"elementType": "labels",
"stylers": [
    {
    }
]
},
{
"featureType": "road",
"elementType": "labels.icon",
"stylers": [
    {
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
    {
        "color": "#f8c967"
    }
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#e9bc62"
    }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry",
"stylers": [
    {
        "color": "#e98d58"
    }
]
},
{
"featureType": "road.highway.controlled_access",
"elementType": "geometry.stroke",
"stylers": [
    {
        "color": "#db8555"
    }
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
    {
        "color": "#fdfcf8"
    }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#806b63"
    }
]
},
{
"featureType": "transit",
"elementType": "all",
"stylers": [
    {
    }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
    {
        "color": "#dfd2ae"
    }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#8f7d77"
    }
]
},
{
"featureType": "transit.line",
"elementType": "labels.text.stroke",
"stylers": [
    {
        "color": "#ebe3cd"
    }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
    {
        "color": "#dfd2ae"
    }
]
},
{
"featureType": "water",
"elementType": "geometry.fill",
"stylers": [
    {
        "color": "#b9d3c2"
    }
]
},
{
"featureType": "water",
"elementType": "labels.text",
"stylers": [
    {
    }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
    {
        "color": "#92998d"
    }
]
}
]
}

var map = new google.maps.Map(mapCanvas, mapOptions);

var marker = new google.maps.Marker({
    position: { lat: 55.872765, lng: 37.479449 },
    map: map,
    title: 'Best-Ride',
});



var contentString = '<div id="content">' +
    '<div id="bodyContent">' +
    '<div class="map_img">' +
    '<img src="images/map_image.jpg">' +
    '</div>' +
    '<div class="map_text_block">' +
    '<p class="mini_map_title">Best-Ride</p>' +
    '<p class="mini_map_title_2">Конноспортивная база ЦСКА</p>' +
    '<p class="mini_map_adress">ул. Дыбенко, 5</p>' +
    '</div>' +
    '</div>' +
    '</div>';
var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
});


marker.addListener('click', function () {
    infowindow.open(map, marker);
});
infowindow.open(map, marker);

