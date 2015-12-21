$(document).ready(function(){
    var HOST = "http://epavia.com/proxy/";
    function memberGet() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'jsonp',
          jsonpCallback: 'find_members',
          url: HOST + "MemberWebService/MemberFind.php",
          beforeSend: function(){
              $('.load_players').show();
          },
          success:function(result){
            $.each(result.members, function (index, item) { 
              var li = "<div class='col-xs-6 item' id='"+ item.id +"'><div class='panel panel-default' style='background:#E5E5E5'><div class='panel-heading' style='background:#965A36;color:white;font-size:15px;'><b>" + item.name +" "+ item.last_name + "</b></br><font> "+ item.last_name + " </font><font class='pull-right'> "+ item.distance + " KM </font></div><div class='panel-body' style='padding:0;'><img src='"+ item.image + "' class='img-responsive  center-block' style='widht:200px; height:150px;'></div><div class='panel-footer' style='background:#F1D6A1'><i class='fa fa-gamepad' style='font-size:25px;color:grey;'></i><i class='fa fa-star-o pull-right' style='font-size:25px;color:grey;'></i></div></div></div>";     
                $('.players').append(li);
            });
          },
          complete: function(){
              $('.load_players').hide();
          }
        });
    }



    memberGet();


    $(document).on('click','.item', function(){
        document.location.href = 'profile.html?id_member=' + $(this).attr('id'); 
    });
});
