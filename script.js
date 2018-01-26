console.log('js');

var app = angular.module('myApp', []);

app.controller('myController', ['$http', function($http) {
    console.log(' Controller has been loaded');
    var self = this;
    var key = config.MAPS_KEY;
    function initMap() {
        var uluru = { lat: -25.363, lng: 131.044 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }
}]);