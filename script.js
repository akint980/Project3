function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 }, // Center on San Francisco
        zoom: 12,
    });
}

window.onload = initMap; // Ensure this is called after the page loads
