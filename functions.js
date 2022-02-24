

// plot markers
function plotMarkers(arr) {
    // clear layers
    planeLayer.clearLayers()
    for (let i = 0; i < arr.length; i++) {
        let stateVector = arr[i]
        let latLng = [stateVector[6], stateVector[5]]
        // add to layer
        L.marker(latLng, {icon: planeIcon}).addTo(planeClusterLayer)
    }
}


// API call for state vectors
async function getStateVectors() {
    let response = await axios.get("https://opensky-network.org/api/states/all", {
        params: {
            lamin: botLeft[0],
            lamax: topRight[0],
            lomin: botLeft[1],
            lomax: topRight[1]
        }
    })
    plotMarkers(response.data.states)
}


// global bounds
let topRight = 0
let botLeft = 0

// setting global bounds
function setMinMaxLatLng() {
    let bounds = map.getBounds()
    
    let northEast = bounds._northEast
    topRight = [northEast.lat, northEast.lng]

    let southWest = bounds._southWest
    botLeft = [southWest.lat, southWest.lng]
}