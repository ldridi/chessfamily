function AddEvent() {
    
    var id_utilisateur = sessionStorage.getItem("identifiant");
    var type_event = document.getElementById("type_event").value;
    var type_meeting = document.getElementById("type_meeting").value;
    var name = document.getElementById("name").value;
    var organizer = document.getElementById("organizer").value;
    var start_date = document.getElementById("start_date").value;
    var end_date = document.getElementById("end_date").value;
    var is_rated = document.getElementById("is_rated").value;
    
    var description = document.getElementById("description").value;
    var prize_fund = document.getElementById("prize_fund").value;
    var phone_number = document.getElementById("phone_number").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;


// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'authentication=chessfemily&action=event_add&announcer_id='+id_utilisateur+
                     '&type_id='+type_event + 
                     '&meeting_placeid='+type_meeting+
                     '&name='+name + 
                     '&organizer='+organizer+
                     '&start_date='+start_date +
                     '&end_date='+end_date +
                     '&is_rated='+is_rated +
                     '&description='+description +
                     '&prize_fund='+prize_fund +
                     '&phone_number='+phone_number +
                     '&email='+email +
                     '&website='+website;

    
        var HOST = "http://epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'event_add',
          url: HOST + "EventWebService/eventAdd.php",
          success:function(result){
                  /*if(result.success == 1){
                      //$('.testlogin').html(' success connexion');
                      $('.info_requis').fadeOut();
                      $('.inscritok').fadeIn();
                      $('.inscritok').fadeOut(4000);
                      $('#myModal').hide();
                  }else{
                      $('.info_requis').fadeIn();
                  }*/
                  console.log(result);

                  
          }
        });
        
    
    return false;
}
