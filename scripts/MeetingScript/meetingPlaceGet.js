function getDayById(DayId){
	switch(DayId){
		case "1" : return  "Mon";break;
		case "2" : return  "Tue";break;
		case "3" : return  "Wed";break;
		case "4" : return  "Thu";break;
		case "5" : return  "Fri";break;
		case "6" : return  "Sat";break;
		case "7" : return  "Sun";break;
		default: return "";
	}
}

$(document).ready(function(){
    var url = window.location.search;
    var m_id = 8;//url.substring(url.lastIndexOf("=")+1);
	
	//variable host declarer dans templateGenerator.js
	var urlWS = "http://api.chessfamily.net/api/query";
	
    function meetingGET() {
        
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{authentication:"chessfemily",action:"meeting_place_get",meeting_place_id:m_id},
            dataType:"json",
			success:function(result){
			  $('.titre_haut').html(result.meeting_place.name);
			  $('.website').html(result.meeting_place.website);
			  $('.email').html(result.meeting_place.email);
			  $('.adresse').html(result.meeting_place.adress);
			  $('.type_location').html(result.meeting_place.type);
			  $.each(result.meeting_place_opening_time, function (index, item) { 
			  		$('#openingTimeDiv').append("<b>"+getDayById(item.day_ofweek)+" : "+item.start+" - "+item.end+"<br></b>")
			});
			$.each(result.photos, function (index, item) { 
				$('.rslides').append("<li><img src='"+item.image+"' alt=''></li>")
			});
			  //alert(result.meeting_place.toSource());
          }
        });
    }



    meetingGET();

});

