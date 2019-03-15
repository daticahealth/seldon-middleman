$("document").ready(function(){
    function registerSeries (/*boolean*/boolean) {
        var article = document.getElementById("series");
        article.setAttribute('data-registered', boolean);
        console.log('registered == ' + boolean);
    }
    if($.cookie('seriesReg') == null){
        registerSeries(false);
    } else if($.cookie('seriesReg') == seriesId) {
        registerSeries(true);
    } else {
        registerSeries(false);
    }
});
