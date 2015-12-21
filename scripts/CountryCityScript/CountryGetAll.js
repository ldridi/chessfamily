$(document).ready(function(){
    var HOST = "http://epavia.com/proxy/";
    function CountryGetAll() {
        
        $.ajax({
          type: 'GET',
          contentType: "application/json",
          async: false,
          //data: 'authentication=chessfemily&action=find_members&distance=5&latitude=35.6829986572&longitude=10.8500003815&profile=player',
          dataType: 'jsonp',
          jsonpCallback: 'country_get_all',
          url: HOST + "CountryCityWebService/CountryGetAll.php",
          success:function(result){
            $.each(result.country, function (index, item) { 
                $('#country').append("<option ='" + item.id + "'>" + item.name +"</option>")

            });

            
          }
        });
    }



    CountryGetAll();
});
