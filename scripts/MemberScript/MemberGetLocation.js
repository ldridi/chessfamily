
        var id_utilisateur = sessionStorage.getItem("identifiant");
$.ajax(
        {

            type:"POST",
            url:"http://api.chessfamily.net/api/query",
            data:{authentication:"chessfemily",action:"member_location_get",member_id:id_utilisateur},
            dataType:"json",
            beforeSend: function(){
              $('.load_players').show();
              },
              success:function(result){
                $('#getlat').val(result.location.latitude);
                $('#getlong').val(result.location.longitude);
                
              },
              complete: function(){
                  $('.load_players').hide();
              }
        }
    );