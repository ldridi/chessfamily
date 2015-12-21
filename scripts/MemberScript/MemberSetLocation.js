

    function memberSetLocation() {
        
        var HOST = "http://epavia.com/proxy/";
        var latitude = document.getElementById("lat").value;
        var longitude = document.getElementById("long").value;
        var member_id = sessionStorage.getItem("identifiant");
        var dataString = 'authentication=chessfemily&action=member_location_set&member_id='+member_id+'&latitude='+latitude+'&longitude='+longitude;
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_set_location',
          url: HOST + "MemberWebService/MemberSetLocation.php",
          success:function(result){
              alert('votre position est à jour');
          }
        });
    }




