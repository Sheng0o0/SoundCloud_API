SC.initialize({
          client_id: 'f25be05f9d202816ab3f219f0ca8fdfa'
        });
        
$( document ).ready(function() {    
    $("#searchButton").click(function (evaluate){
       console.log ($("#genreSearch").val());
        SC.get('/tracks', { q: $("#genreSearch").val(), license: 'cc-by-sa' }, function(tracks) {
            for (var i = 0;i < tracks.length; i++ ){
             $("#result").append("<li>");
             $("#result").append(tracks[i].title);
             $("#result").append("<br/>");
             $("#result").append(tracks[i].genre);
             $("#result").append("<br/>");
              $("#result").append(tracks[i].permalink_url);
             $("#result").append("</li>");
             
            }
        });
    })
    
    
});
    