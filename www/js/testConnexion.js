function CheckOnlineStatus(msg) {
            var status = document.getElementById("status");
            var condition = navigator.onLine ?  "ONLINE" : "OFFLINE";           
            var state = document.getElementById("state");
            //state.innerHTML = condition;    
            if(condition == "OFFLINE") {
                alert('please verify your connexion before');
            }else{
                alert('connexion ok');
                $('body').show();
            }     
        }
        function Pageloaded() {
            CheckOnlineStatus("load");
            document.body.addEventListener("offline", function () {
                CheckOnlineStatus("offline")
            }, false);
            document.body.addEventListener("online", function () {
                CheckOnlineStatus("online")
            }, false);
        }

