
 


      $(document).ready( function () {
        $("#connexionForm").submit( function() {


            var login = document.getElementById("login").value;
            var pass = document.getElementById("pass").value;
    
// Returns successful data submission message when the entered information is stored in database.
            var dataString = 'authentication=chessfemily&action=member_connect&email='+login+'&password='+pass;


           var HOST = "http://epavia.com/proxy/";
            $.ajax({
              type: 'GET',
              contentType: "application/json",
              async: false,
              data: dataString,
              dataType: 'jsonp',
              jsonpCallback: 'member_connect',
              url: HOST + "MemberWebService/memberConnect.php",
              success:function(result){
                      if(result.success == 1){
                         /*db.transaction(function (tx) {
                          tx.executeSql("INSERT INTO user (firstname, lastname , id_member) VALUES (?,?,?)", [login, pass, result.member.id]);
                        });*/
                          sessionStorage.setItem("identifiant", result.member.id);
                          window.location.href="home.html";
                          //console.log('ok');
                          //console.log(result.member.id);
                      }else{
                          $('.testlogin').html("<center><b><font color='red'>Veuillez vérifier votre login/mot de passe</font></b></center></br>");
                         // console.log('non');
                      }
                      

                      
              }
            });
                   return false; 
        });
      });                  
     