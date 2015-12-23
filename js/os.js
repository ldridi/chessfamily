function testMobileOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    $('#detect_os').val("IOS");

  }
  else if( userAgent.match( /Android/i ) )
  {

    $('#detect_os').val("Android");
  }
  else
  {
    $('#detect_os').val("Autres");
  }
}

/*function getDeviceInfo(info){
   switch (info) {
  		case 1: return device.name; break;
		case 2: return device.cordova; break;
		case 3: return device.platform; break;
		case 4: return device.uuid; break;
		case 5: return device.version; break;
   }
}*/