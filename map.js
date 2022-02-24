// set up map
let map = L.map('map').setView([51.505, -0.09], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// layers
let planeLayer = L.layerGroup()
planeLayer.addTo(map)

// icons
let planeIcon = L.icon({
    iconUrl: './images/icons/plane.png',
    iconSize: [38, 38],
    // iconAnchor: [22, 94],
    // popupAnchor: [-3, -76]
})


// cluster layer
let planeClusterLayer = L.markerClusterGroup()
planeClusterLayer.addTo(map)
