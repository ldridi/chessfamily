function myFunction() {
    
    var name = document.getElementById("name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_conf = document.getElementById("password_conf").value;
    var birthday = document.getElementById("birthday").value;
    var genre = document.getElementById("genre").value;
<<<<<<< HEAD
<<<<<<< HEAD
    var os = document.getElementById("detect_os").value;
	var device_token = document.getElementById("detect_UUID").value;
    
	if ((name == '') && (last_name == '') && (email == ''))
    {
        $('.info_requis').fadeIn();
    }
    else
    {
		$.ajax({
	
				type:"POST",
				url:urlWS,
				data:{authentication:"chessfemily",
					action:"member_add",
					name:name,
					last_name:last_name,
					email:email,
					password:password, 
					password_conf:password_conf,
					birthday:birthday,
					genre:genre,
					os:os,
					device_token:device_token},
				dataType:"json",
				success:function(data){
					if(data.success == 1){
						  //$('.testlogin').html(' success connexion');
						  $('.info_requis').fadeOut();
						  $('.inscritok').fadeIn();
						  $('.inscritok').fadeOut(4000);
					  }else{
						  $('.info_requis').fadeIn();
					  }
					
				},
				error:function()
				{
					alert('error');
				}
			});
	}
=======
    var os = document.getElementById("detext_os").value;
    
>>>>>>> fe4d97e5d60224cf58c3c11e5b6449ecc5982cc9
=======
    var os = document.getElementById("detext_os").value;
    
>>>>>>> fe4d97e5d60224cf58c3c11e5b6449ecc5982cc9
// Returns successful data submission message when the entered information is stored in database.
    var dataString = 'authentication=chessfemily&action=member_add&name='+name+'&last_name='+last_name + 
                     '&email='+email+'&password='+password + 
                     '&password_conf='+password_conf+'&birthday='+birthday +
                     '&gender='+genre+'&os='+os;

    if ((name == '') && (last_name == '') && (email == ''))
    {
        $('.info_requis').fadeIn();
    }
    else
    {
//AJAX code to submit form.
        var HOST = "http://epavia.com/proxy/";
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          data: dataString,
          dataType: 'jsonp',
          jsonpCallback: 'member_add',
          url: HOST + "MemberWebService/memberAdd.php",
          success:function(result){
                  console.log(result);

                  
          }
        });
        
    }
    return false;
}
