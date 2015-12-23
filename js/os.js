<<<<<<< HEAD
   document.addEventListener("deviceready", getMobileInfo, false);

    // PhoneGap is ready
    //
    function getMobileInfo() {
      //alert("checking...");
	  $('#detect_os').val(device.platform+" "+device.version);
	  $('#detect_UUID').val(device.uuid);
    }
  
  
=======
function test_mobile() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    $('#detext_os').val("IOS");

  }
  else if( userAgent.match( /Android/i ) )
  {

    $('#detext_os').val("Android");
  }
  else
  {
    $('#detext_os').val("autres");
  }
}
>>>>>>> fe4d97e5d60224cf58c3c11e5b6449ecc5982cc9
