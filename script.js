function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Center on San Francisco
        zoom: 12,
    });

    // Feature 1: Add a marker
    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 },
        map: map,
        title: 'San Francisco',
    });

    // Feature 2: Add an info window
    const infoWindow = new google.maps.InfoWindow({
        content: '<h2>San Francisco</h2><p>Beautiful city by the bay!</p>',
    });
    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    // Feature 3: Add a circle overlay
    const circle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: { lat: 37.7749, lng: -122.4194 },
        radius: 1000, // Radius in meters
    });
}

window.onload = initMap; // Initialize the map when the window loads
