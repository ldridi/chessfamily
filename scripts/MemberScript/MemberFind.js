              $(document).ready(function(){
 
                    function meetingPlaceFind(){
                      $.ajax({
                        dataType:"text",
                        url:"webservice/MemberWebService/MemberFind.php",
                        success:function(data){
                              var d = jQuery.parseJSON(data);
                              
                                $.each(d, function (key, data) {
                                    console.log(key)
                                    $.each(data, function (index, data) {
                                       // console.log("id : "+ );
                                    //$('.list-menu-events').append("<li class='list-group-item'>" + d.favorite_events[index].event_id + "</li>");

                                    $('.players').append("<div class='col-xs-6'><div class='panel panel-default' style='background:#E5E5E5'><div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'><b>" + d.members[index].name +" "+ d.members[index].last_name + "</b></br><font> "+ d.members[index].last_name + " </font><font class='pull-right'> "+ d.members[index].distance + " KM </font></div><div class='panel-body' style='padding:0;'><img src='"+ d.members[index].image + "' class='img-responsive  center-block' style='widht:200px; height:150px;'></div><div class='panel-footer' style='background:#F1D6A1'><i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i><i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i></div></div></div>")
                                    })
                                })
                        }
                      });
                    }
 
                    meetingPlaceFind();
              });
