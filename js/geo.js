var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    alert (" lat : " + lat + " lon : " + lon);
}