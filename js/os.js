   document.addEventListener("deviceready", getMobileInfo, false);

    // PhoneGap is ready
    //
    function getMobileInfo() {
      //alert("checking...");
	  $('#detect_os').val(device.platform+" "+device.version);
	  $('#detect_UUID').val(device.uuid);
    }
  
  
