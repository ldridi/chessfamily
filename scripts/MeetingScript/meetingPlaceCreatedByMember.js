$(document).ready(function(){

    var id_utilisateur = sessionStorage.getItem("identifiant");

    var dataString = 'authentication=chessfemily&action=member_meeting_places&member_id='+id_utilisateur ;
    var HOST = "http://epavia.com/proxy/";
    function meetingPlaceCreatedByMember() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_place',
          url: HOST + "MeetingWebService/meetingPlaceCreatedByMember.php",
          beforeSend: function(){
              $('.load_my_location').show();
          },
          success:function(result){
            $.each(result.meeting_places, function (index, item) { 
            var li = "<li class='list-group-item '><span class='badge' style='background:white;color:grey;margin-top:5px;'><font style='font-size:20px;'> " + item.type + " </font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i  class='fa fa-pencil-square modif_location' id='" + item.id + "' style='font-size:25px;color:#4B2618;' data-toggle='modal' data-target='#myModalEdit'></i></span><b class='mycrealocation' id='" + item.id +"'> " + item.name + " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i></b><br><font style='font-size:12px;color:grey;'> " + item.latitude + " KM</font></li>";     
                $('.list-menu-mylocation').append(li);
                
            });
           
          },
          complete: function(){
              $('.load_my_location').hide();
          }
        });
    }



    meetingPlaceCreatedByMember();


    $(document).on('click','.mycrealocation', function(){
        document.location.href = 'locationdetails.html?meeting_place_id=' + $(this).attr('id'); 
    });
    $(document).on('click','.modif_location', function(){

        var meetingId = $(this).attr('id');
        var id_utilisateur = sessionStorage.getItem("identifiant");
        var dataStringEdit = 'authentication=chessfemily&action=meeting_place_get&meeting_place_id='+meetingId


        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataStringEdit,
          dataType: 'jsonp',
          jsonpCallback: 'meeting_places',
          url: HOST + "MeetingWebService/meetingPlaceGet.php",
          success:function(result){
                              $('#name_meeting_edit').val(result.meeting_place.name);
                              $('#adress_meeting_edit').val(result.meeting_place.adress);
                              $('#latitude_meeting_edit').val(result.meeting_place.latitude);
                              $('#longitude_meeting_edit').val(result.meeting_place.longitude);
                              $('#id_meeting_edit').val(meetingId);

                             
                              
          }
        }); 
        
    });
});
