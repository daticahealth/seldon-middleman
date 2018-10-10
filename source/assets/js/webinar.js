$("document").ready(function(){
    var webinarId = $('#webinar').data('webinar');
    function showWebinar(){
        // $('nav.nav-desktop').attr('data-theme', 'dark');
        $('#webinar').attr('data-theme', 'dark');
        $('#webinar').addClass("container-gray-3");
        $('#webinar-play').removeClass("hide");
        $('#webinar-authors').addClass("hide");
        $('.preview-bg').addClass("hide");
        // $('#webinar-play').addClass("group");
        $('#preview-register').addClass("hide");
        // $('#preview-registered').removeClass("hide");
        // $('#webinar-title').removeClass("hide");
        $('.is-registered').removeClass("hide");
        $('#report-form').addClass("hide");
        console.log('show it');
    }
    function hideWebinar(){
        // $('nav.nav-desktop').attr('data-theme', 'dark');
        $('#webinar').attr('data-theme', 'light');
        $('#webinar').removeClass("container-gray-3");
        $('#webinar-play').addClass("hide");
        $('#webinar-authors').removeClass("hide");
        $('.preview-bg').removeClass("hide");
        // $('#preview-register').removeClass("hide");
        // $('#preview-registered').addClass("hide");
        // $('#webinar-title').addClass("hide");
        $('.is-registered').add("hide");
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
        Foundation.SmoothScroll.scrollToLoc('#report-form', {
          threshold: 50,
          offset: 0
        }, function(){
          console.log('scrolled');
        });
    });
});
