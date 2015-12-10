function evaluate(e){
   //read what is in the input field and give it back to whoever is using 
}






$( document ).ready(function() {    
    $("#searchButton").click(function (evaluate){
       console.log ($("#genreSearch").val());
        SC.get('/tracks', { q: $("#genreSearch").val(), license: 'cc-by-sa' }, function(tracks) {
          console.log(tracks);
        });
    })
    
    
});
    