              $(document).ready(function(){
 
                    function eventFavorite(){
                      $.ajax({
                        dataType:"text",
                        url:"webservice/EventWebService/eventFavorite.php",
                        success:function(data){
                              var d = jQuery.parseJSON(data);
                              
                                $.each(d, function (key, data) {
                                    console.log(key)
                                    $.each(data, function (index, data) {
                                       // console.log("id : "+ );
                                    //$('.list-menu-events').append("<li class='list-group-item'>" + d.favorite_events[index].event_id + "</li>");

                                    $('.list-menu-events').append("<li class='list-group-item'><span class='badge' style='background:white;'><i class='fa fa-map-marker' style='font-size:30px;color:grey;'></i></span><b> " + d.favorite_events[index].name + " <i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i></b><br><font style='font-size:12px;color:grey;'> "+ d.favorite_events[index].start_date + " &nbsp;&nbsp;8:00PM - " + d.favorite_events[index].end_date + " &nbsp;&nbsp;2:00AM</font></li>")
                                    })
                                })
                        }
                      });
                    }
 
                    eventFavorite();
              });
