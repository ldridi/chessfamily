$(document).ready(function(){
    var urlWS = "http://api.chessfamily.net/api/query";
	function CountryGetAll() {
	$.ajax({

			type:"POST",
			url:urlWS,
			data:{authentication:"chessfemily",action:"country_get_all"},
			dataType:"json",
			success:function(result)
			{
				 $.each(result.country, function (index, item) { 
					$('#country').append("<option ='" + item.id + "'>" + item.name +"</option>")
				});
				
			},
			error:function()
			{
				alert('Erreur Country Get All');
			}
		});
	}
	


    CountryGetAll();
});
