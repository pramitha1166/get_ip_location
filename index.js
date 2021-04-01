console.log('Hello')

fetch("https://ipinfo.io/json?token=c3220d5b0e7c41").then(
  (response) => response.json()
).then(
  (jsonResponse) => { 

    console.log(jsonResponse)
    console.log(jsonResponse.ip, jsonResponse.country)

    document.getElementById("ipaddress").innerHTML = jsonResponse.ip
    document.getElementById("location").innerHTML = jsonResponse.region

  }
)
