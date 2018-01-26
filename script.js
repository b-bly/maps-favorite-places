console.log('js');

var app = angular.module('myApp', ['ngMap']);

app.controller('myController', ['$http', 'NgMap', function ($http, NgMap) {
    console.log(' Controller has been loaded');
    var self = this;
    var key = config.MAPS_KEY;
    var myLatLng = { lat: -25.363, lng: 131.044 }
    //self.bounds = new google.maps.LatLngBounds();
    //self.map;
    // self.marker = {
    //     position: myLatLng,
    //     setMap: map,
    //     title: 'Hello World!'
    // };

    self.cities ={list: [
        { id: 1, name: 'Oslo', pos: [59.923043, 10.752839] },
        { id: 2, name: 'Stockholm', pos: [59.339025, 18.065818] },
        { id: 3, name: 'Copenhagen', pos: [55.675507, 12.574227] },
        { id: 4, name: 'Berlin', pos: [52.521248, 13.399038] },
        { id: 5, name: 'Paris', pos: [48.856127, 2.346525] }
    ]};

    function initMap() {
        var uluru = { lat: -25.363, lng: 131.044 };
        // var map = new google.maps.Map(document.getElementById('map'), {
        //     zoom: 4,
        //     center: uluru
        // });
        // var marker = new google.maps.Marker({
        //     position: uluru,
        //     map: map
        // });

    }

    // var latlng = new google.maps.LatLng(myLatLng.lat, myLatLng.lng)
    // self.bounds.extend(latlng);

    self.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=" + key;

    NgMap.getMap().then(function (map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
       
        //self.map.fitBounds(self.bounds);
    });
}]);