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