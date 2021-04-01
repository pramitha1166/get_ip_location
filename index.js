console.log('Hello')

//ipinfo.com api

fetch("https://ipinfo.io/json?token=c3220d5b0e7c41").then(
  (response) => response.json()
).then(
  (jsonResponse) => { 

    console.log(jsonResponse)
    console.log(jsonResponse.ip, jsonResponse.country)

    document.getElementById("ipaddress").innerHTML = jsonResponse.ip
    document.getElementById("location").innerHTML = jsonResponse.region
    document.getElementById("city").innerHTML = jsonResponse.city
    document.getElementById("isp").innerHTML = jsonResponse.org

  }
)

//ip-api.com aoi

fetch('http://ip-api.com/json/').then(
    res => {
        return res.json()
    }
).then(res=>{
    console.log(res)
    console.log(res.lat)
    console.log(res.lon)
    getTimeZone(res.lat,res.lon)
})

// GOOGLE_MAP_KEY = 'AIzaSyCi0KROfNWeD1BVDLPLduHdaX0_EbnJU_k'

// async function getAddress(latlng,longitude) {
//     await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latlng,longitude}&key=${GOOGLE_MAP_KEY}`).then(res=> {
//         return res.json()
//     }).then(data => {
//         console.log(data)
//     })
// }

//get time zone by ipgeolocation.io api

async function getTimeZone(lat,lon) {
    fetch(`https://api.ipgeolocation.io/timezone?apiKey=53fc290514154a1aaff766e493e74b94&lat=${lat}&long=${lon}`).then(res=>{
    return res.json()
    }).then(data=> {
        console.log(data)
        document.getElementById("time").innerHTML = data.date_time_wti
    })
}


