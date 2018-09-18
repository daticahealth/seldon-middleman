$("document").ready(function(){
    var webinarId = $('#webinar').data('webinar');
    function showWebinar(){
        $('#webinar-play').removeClass("hide");
        $('#preview-register').addClass("hide");
        $('#preview-registered').removeClass("hide");
        $('#webinar-title').removeClass("hide");
        $('#report-form').addClass("hide");
        console.log('show it');
    }
    function hideWebinar(){
        $('#webinar-play').addClass("hide");
        $('#preview-register').removeClass("hide");
        $('#preview-registered').addClass("hide");
        $('#webinar-title').addClass("hide");
        $('#report-form').removeClass("hide");
        console.log('default');
    }
    if($.cookie('webinarReg') == null){
        // console.log('no match. hide thing');
        hideWebinar();
    } else if($.cookie('webinarReg') == webinarId) {
        // console.log('match! show thing');
        showWebinar();
    } else {
        hideWebinar();
    }
    $('body').on('hsvalidatedsubmit', '.hs-form', function (e) {
        // set cookie to ID 
        $.cookie('webinarReg', webinarId, { expires: 120 });
        // var form = $(e.target);    
        // var email = form.find('[name=email]').val();
        // $.cookie(webinarCookie, 'true', { expires: 30 });
        showWebinar();
    });
});
