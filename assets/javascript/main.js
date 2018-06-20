$(document).ready(function () {
   
    var start = "2004-01-01";
    var end = "2004-06-01"; 
    ///function launchLibinfo(start,end){
        var xhr = $.get("https://launchlibrary.net/1.4/launch/" + start + "/" + end);
    
        xhr.done(function(Info){
            for (i=0; i<Info.launches.length; i++){
                var results = $("<div class='result'>");
                var loco  = Info.launches[i].location.name;
                //var rocket = Info.launches[i].rocket.name;
                var miss = Info.launches[i].name;
                var img = Info.launches[i].rocket.imageURL;
    
                var lcI= Info.launches[i].location.infoURLs;
                results.append(miss);
                results.append(loco);
                results.append(img);
                console.log(loco);
                console.log(miss);
                console.log(lcI);
            };
        });
    
    
    //}




});