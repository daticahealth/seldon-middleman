$("document").ready(function(){
    var webinarId = $('#webinar').data('webinar');
    function showWebinar(){
        // $('nav.nav-desktop').attr('data-theme', 'dark');
        $('#webinar').attr('data-theme', 'dark');
        $('#webinar').addClass("bg-gray-2 link--white-parent");
        $('.show-for-registered').removeClass("hide");
        $('.hide-for-registered').addClass("hide");
        $.cookie(currPromoCookie, 'true', { expires: 14, path: '/' });
        $('#alertTop').addClass("hide");
        // console.log('show it');

    }
    function hideWebinar(){
        // $('nav.nav-desktop').attr('data-theme', 'dark');
        $('#webinar').attr('data-theme', 'light');
        $('#webinar').removeClass("bg-gray-2 link--white-parent");
        $('.show-for-registered').addClass("hide");
        $('.hide-for-registered').removeClass("hide");
        // console.log('default');
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

