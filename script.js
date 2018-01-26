console.log('js');

var app = angular.module('myApp', ['ngMap']);

app.controller('myController', ['$http', 'NgMap', function($http, NgMap) {
    console.log(' Controller has been loaded');
    var self = this;
    var key = config.MAPS_KEY;
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
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
          });
    }

    self.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=" + key;
}]);