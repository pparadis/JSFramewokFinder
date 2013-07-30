$(document).ready(function(){
    console.log($('h1').text());
       
    $.ajax({
        url: "https://github.com/search?q=created%3A%3E2013-07-29+language%3Ajavascript+framework+&type=Repositories&ref=searchresults",
        context: document.body
    }).done(function() {
        $("#Result")
            .addClass("done");
    });
});