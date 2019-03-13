$("document").ready(function(){
    //var seriesId = $('#series-form').data('series');
    function showSeries(){
        $('.is-registered').removeClass("hide");
        $('#series-form').addClass("hide");
        document.getElementById("button_view-series").setAttribute('href', window.location + '/view/');
        console.log('show it');
    }
    function hideSeries(){
        $('.is-registered').add("hide");
        $('#series-form').removeClass("hide");
        console.log('default');
    }
    if($.cookie('seriesReg') == null){
        // console.log('no match. hide thing');
        hideSeries();
    } else if($.cookie('seriesReg') == seriesId) {
        // console.log('match! show thing');
        showSeries();
    } else {
        hideSeries();
    }
    $('body').on('hsvalidatedsubmit', '.hs-form', function (e) {
        // set cookie to ID 
        $.cookie('seriesReg', seriesId, { expires: 120 });
        // var form = $(e.target);    
        // var email = form.find('[name=email]').val();
        // $.cookie(seriesCookie, 'true', { expires: 30 });
        showSeries();
        // console.log('scrolled');
    });
});
