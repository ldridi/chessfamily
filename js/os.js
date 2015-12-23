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