$(document).ready(function(){
	var HOST = "http://www.epavia.com/proxy/";
	//Header
	$.ajax({
            url: "templateParts/header.html",
            dataType : "html",
            success: function( data ) {
                $('#header').html(data);
            }
     });
	
	
	
	
	//Footer
	$.ajax({
            url: "templateParts/footer.html",
            dataType : "html",
            success: function( data ) {
                $('#footer').html(data);
            }
     });
	 
	 
	 //JavaScript for all pages
	 /*$.ajax({
            url: "templateParts/MainJS.html",
            dataType : "html",
            success: function( data ) {
                $('#mainjs').html(data);
            }
     });*/
});

document.addEventListener("deviceready", getMobileInfo, true);
// PhoneGap is ready
function getMobileInfo() {
  //alert("checking...");
  $('#detect_os').val(device.platform+" "+device.version);
  $('#detect_UUID').val(device.uuid);
}

// a function to test the connectivity
document.addEventListener("offline", checkConnectivity, true);
function checkConnectivity(){
	alert("please activate the connectivity");
	
}

function checkUpdateGPS(){
	
}

//geo.js
/*
navigator.geolocation.getCurrentPosition(onSuccess, onError);
function onSuccess(position) {
	var element = document.getElementById('geolocation');
	element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
						'Longitude: '          + position.coords.longitude             + '<br />';
						
}

// onError Callback receives a PositionError object
function onError(error) {
	alert('code: '    + error.code    + '\n' +
		  'message: ' + error.message + '\n');
}
*/

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    $('#lat').val(position.coords.latitude);
    $('#long').val(position.coords.longitude);
}



/*
<script type="text/javascript" charset="utf-8">
      document.addEventListener('deviceready', this.onDeviceReady, false);
      function onDeviceReady(){
        document.addEventListener("pause", onPause, false);
                document.addEventListener("resume", onResume, false);
        document.addEventListener("online", onOnline, false);
        document.addEventListener("offline", onOffline, false);
      }
      function onPause() {
        alert("Application is not Available")
      }
      function onResume() {
        alert("Application is Available")
      }
      function onOnline() {
        alert("onOnline")
      }
      function onOffline() {
        alert("onOffline")
      }
</script>
*/