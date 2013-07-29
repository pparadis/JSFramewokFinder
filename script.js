$(document).ready(function(){
    console.log($('h1').text());
    
    $.ajax("https://github.com/search?q=created%3A%3E2013-07-29+language%3Ajavascript+framework+&type=Repositories&ref=searchresults")
        .done(function() { 
            $(this).addClass("done");
    });
    
    
    $.ajax({
        url: "test.html",
        context: document.body
    }).done(function() {
        $("#Result")
            .addClass("done");
    });
});