$(document).ready(function(){
    function memberFind() {
          
          var id_utilisateur = sessionStorage.getItem("identifiant");
          
          var dataString = 'authentication=chessfemily&action=member_get&id_member='+id_utilisateur;

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
          success:function(result){

              
              $('.image_profil').html("<img src='"+ result.member.image +"' class='img-responsive img-circle center-block' width='130' style='border:3px solid white;margin-bottom:20px;'>");
              $('.nom_member').html(result.member.name +" "+ result.member.last_name);
              //console.log(result.member.image);
          }
        });
    }



    memberFind();
});
