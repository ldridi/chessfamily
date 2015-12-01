              $(document).ready(function(){
 
                    function meetingPlaceFind(){
                      $.ajax({
                        dataType:"text",
                        url:"webservice/MeetingWebService/meetingPlaceFind.php",
                        success:function(data){
                              var d = jQuery.parseJSON(data);
                              
                                $.each(d, function (key, data) {
                                    console.log(key)
                                    $.each(data, function (index, data) {
                                       // console.log("id : "+ );
                                    //$('.list-menu-events').append("<li class='list-group-item'>" + d.favorite_events[index].event_id + "</li>");

                                    $('.list-menu-location').append("<li class='list-group-item'><span class='badge' style='background:white;color:grey;margin-top:5px;'><font style='font-size:20px;'> " + d.meeting_places[index].type + " </font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-arrow-right' style='font-size:20px;color:grey;'></i></span><b> " + d.meeting_places[index].name + " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i></b><br><font style='font-size:12px;color:grey;'> " + d.meeting_places[index].distance + " KM</font></li>")
                                    })
                                })
                        }
                      });
                    }
 
                    meetingPlaceFind();
              });
