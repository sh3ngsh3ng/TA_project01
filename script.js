
document.querySelector(".navbar").addEventListener("click", async function() {
    alert("hi")
    let response = await axios.get("https://opensky-network.org/api/states/all").then(function(response){
        console.log(response.data)
    })
})