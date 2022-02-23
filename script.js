

window.addEventListener("DOMContentLoaded", function() {
    setMinMaxLatLng()
    getStateVectors()
})

map.on("moveend", async function() {
    setMinMaxLatLng()
    getStateVectors()
})

