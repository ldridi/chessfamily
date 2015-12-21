$(document).ready(function(){
    function memberFind() {
          
          var url = window.location.search;
  
          var m_id = url.substring(url.lastIndexOf("=")+1);

          var dataString = 'authentication=chessfemily&action=member_get&id_member='+m_id;

        var HOST = "http://epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_get',
          url: HOST + "MemberWebService/MemberGet.php",
          beforeSend: function(){
              $('.affiche_profile_member').hide();
              $('.load_profil_member').show();
          },
          success:function(result){

              if(result.member.availability == '1'){
                  $('.yourid').html("<i class='fa fa-circle' style='font-size:15px;color:#98BF0A'></i>");
              }else{
                $('.yourid').html("<i class='fa fa-circle' style='font-size:15px;color:red'></i>");
              }


              if(result.member.is_player == '1'){
                  $('.icone_player').html("<i class='fa fa-check-circle' style='color:green'></i>");
              }else{
                $('.icone_player').html("<i class='fa fa-check-circle' style='color:grey'></i>");
              }
              if(result.member.is_titled_player == '1'){
                  $('.titre_player').html("Title " +result.member.title);
              }
              
              
              if(result.member.is_arbiter == '1'){
                  $('.icone_arbiter').html("<i class='fa fa-check-circle' style='color:green'></i>");
              }else{
                $('.icone_arbiter').html("<i class='fa fa-check-circle' style='color:grey'></i>");
              }

              if(result.member.is_trainer == '1'){
                  $('.icone_trainer').html("<i class='fa fa-check-circle' style='color:green'></i>");
              }else{
                $('.icone_arbiter').html("<i class='fa fa-check-circle' style='color:grey'></i>");
              }
              $('.titre_trainer').html(result.member.lesson_level);


              if(result.member.organizer == '1'){
                  $('.icone_organizer').html("<i class='fa fa-check-circle' style='color:green'></i>");
              }else{
                $('.icone_organizer').html("<i class='fa fa-check-circle' style='color:grey'></i>");
              }

              $('#age').html(result.member.birthday);
              $('.nom_profil').html(result.member.name + " " + result.member.last_name);
              $('.image_profil').html("<img src='"+ result.member.image +"' class='img-responsive img-circle center-block' width='130' style='border:3px solid white;margin-bottom:20px;'>");
              if(result.member.gender == '1'){
                  $('#gender').html('<b>Male</b>');
              }else{
                 $('#gender').html('<b>Female</b>');
              }
          },
          complete: function(){
              
              $('.load_profil_member').hide();
              $('.affiche_profile_member').show();
          }
        });
    }



    memberFind();
});
