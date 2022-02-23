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
    console.log(response.data)
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