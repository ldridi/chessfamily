$(document).ready(function(){


    var url = window.location.search;
  
    var e_id = url.substring(url.lastIndexOf("=")+1);

    var dataString = 'authentication=chessfemily&action=event_get&event_id='+e_id;

    var HOST = "http://epavia.com/proxy/";
    function eventGET() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'event_get',
          url: HOST + "EventWebService/eventGet.php",
          success:function(result){
                              $('.titre_haut').html(result.event.name);
                              $('.event_type').html(result.event.id);
                              $('.date_start').html(" " + result.event.start_date);
                              $('.date_end').html(" " + result.event.end_date);
                              $('.site').html(" " + result.event.website);
                              $('.email').html(" " + result.event.email);
                              $('.tel').html(" " + result.event.phone_number);
                              $('.description').html(" " + result.event.description);
          }
        });
    }



    eventGET();

});
