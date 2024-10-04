function initMap() {
  // Map options
  var options = {
    zoom: 12,
    center: { lat: 30.1550, lng: 95.2155 },
    }
    
    //New map
    
    var map = new google.maps.Map(document.getElementById('map'), options); 
    )

    // Add a marker
    var marker = new google.maps.Marker({
        position: { lat: 30.1963129, lng: -95.1992612 },
        map: map,
        https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png
        title: 'Big river',
    });

    // 2. Add an info window
    var infoWindow = new google.maps.InfoWindow({
        content: '<h2>New Caney</h2><p>Big Rivers Waterpark & Adventures for relaxation and fun!</p>',
    });
    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });

    // 3. Add a circle overlay
    var circle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: { lat: 30.1550, lng: 95.2155},
        radius: 1000, // 1 km radius
    });
}

window.onload = initMap;
