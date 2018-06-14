$("document").ready(function(){
    // init foundation stuff - interchange, close box, etc.
    $(document).foundation();
    
    // Cookie config for modal
    // If no cookie with our chosen class...
    if($.cookie("dismiss-promo-top") == null){
        $('#alertTop').removeClass("hide");
    }else{
        $('#alertTop').addClass("hide");
    }
    $("#promo-dismiss").click(function(){
        $.cookie('dismiss-promo-top', 'true', { expires: 30 });
        $('#alertTop').addClass("hide");
    });

    if($.cookie("gdpr-notice") == null){
        $('#gdpr-banner').removeClass("hide");
    }else{
        $('#gdpr-banner').addClass("hide");
    }
    $(".dismiss-gdpr-notice").click(function(){
        $.cookie('gdpr-notice', 'true', { expires: 120 });
        $('#gdpr-banner').addClass("hide");
    });
    // not for prod!
    // $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    //     console.log(newSize + ' breakpoint');
    // });
});
