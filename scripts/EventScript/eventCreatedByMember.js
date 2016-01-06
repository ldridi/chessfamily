$(document).ready(function(){
    
    var id_utilisateur = sessionStorage.getItem("identifiant");

    var dataString = 'authentication=chessfemily&action=member_events&member_id='+id_utilisateur ;
    //variable host declarer dans templateGenerator.js
    function eventCreatedByMember() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_events',
          url: HOST + "EventWebService/eventCreatedByMember.php",
          beforeSend: function(){
              $('.load_my_events').show();
          },
          success:function(result){
            if(result.success == 1){
                $.each(result.events, function (index, item) { 
            var li = "<li class='list-group-item ' id='" + item.id + "'>" +
                        
                        "<span class='badge' style='background:white;'>" +
                            "<i data-toggle='modal' data-target='#myModalModif' class='fa fa-pencil-square modif_event' id='" + item.id + "' style='font-size:25px;color:#4B2618;'></i>" +
                        "</span>" +
                        "<b class='events' id='" + item.id + "'>" + item.name +
                            " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i>" +
                        "</b>" +
                        "<br>" +
                        "<font style='font-size:12px;color:grey;'> "+ item.start_date + "   8:00PM - " + item.end_date + "   2:00AM</font>" +
                    "</li>";     
                $('.list-menu-myevents').append(li);
                
                
            });
            }else{
              $('.cre_event').show();
            }
            
          },
          complete: function(){
              $('.load_my_events').hide();

          }
        });
    }



    eventCreatedByMember();


    $(document).on('click','.events', function(){
        document.location.href = 'eventdetails.html?event_id=' + $(this).attr('id'); 
    });

    $(document).on('click','.modif_event', function(){
        var eventId = $(this).attr('id');
        var id_utilisateur = sessionStorage.getItem("identifiant");
        var dataStringDelete = 'authentication=chessfemily&action=event_get&event_id='+eventId;
        

        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataStringDelete,
          dataType: 'jsonp',
          jsonpCallback: 'event_get',
          url: HOST + "EventWebService/eventGet.php",
          success:function(result){
               
                $('#name_modif').val(result.event.name);
                $('#organizer_modif').val(result.event.organizer);
                $('#start_date_modif').val(result.event.start_date);
                $('#end_date_modif').val(result.event.end_date);
                $('#is_rated_modif').val(result.event.is_rated);
                $('#description_modif').val(result.event.description);
                $('#prize_fund_modif').val(result.event.prize_fund);
                $('#phone_number_modif').val(result.event.phone_number);
                $('#email_modif').val(result.event.email);
                $('#website_modif').val(result.event.website);
                
                              
          }
        }); 
    });
});
