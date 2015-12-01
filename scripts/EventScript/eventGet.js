
                $(document).ready(function(){
 
                    function eventGet(){
                      $.ajax({
                        dataType:"text",
                        url:"webservice/EventWebService/eventGet.php",
                        success:function(data){
                              var d = jQuery.parseJSON(data);
                              //console.log("name  : " + d.event.id);
                              $('.titre_haut').html(d.event.name);
                              $('.event_type').html(d.event.id);
                              $('.date_start').html(" " + d.event.start_date);
                              $('.date_end').html(" " + d.event.end_date);
                              $('.site').html(" " + d.event.website);
                              $('.email').html(" " + d.event.email);
                              $('.tel').html(" " + d.event.phone_number);
                              $('.description').html(" " + d.event.description);
                        }
                      });
                    }
 
                    eventGet();
              });
