$(document).ready(function(){


    var url = window.location.search;
  
    var m_id = url.substring(url.lastIndexOf("=")+1);

    var dataString = 'authentication=chessfemily&action=meeting_place_get&meeting_place_id='+m_id;

    var HOST = "http://epavia.com/proxy/";
    function meetingGET() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'meeting_places',
          url: HOST + "MeetingWebService/meetingPlaceGet.php",
          success:function(result){
                              $('.titre_haut').html(result.meeting_place.name);
                              $('.website').html(result.meeting_place.website);
                              $('.email').html(result.meeting_place.email);
                              $('.adresse').html(result.meeting_place.adress);
                              $('.type_location').html(result.meeting_place.type);
          }
        });
    }



    meetingGET();

});
