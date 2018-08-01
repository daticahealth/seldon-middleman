$("document").ready(function(){
        // const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    const observer = lozad('.lozad', {
        rootMargin: '100px 0px', // like css margin
        // threshold: 0.1 // ratio of element convergence
        loaded: function(el) {
            // Custom implementation on a loaded element
            el.classList.add('loaded');
        }
    });
    observer.observe();
    // init foundation stuff - interchange, close box, etc.
    $(document).foundation();
    
    // Cookie config for modal
    // If no cookie with our chosen class...
    if($.cookie("promo-gdpr-webinar-2018-06-20") == null){
        $('#alertTop').removeClass("hide");
    }else{
        $('#alertTop').addClass("hide");
    }
    // $(".dismiss").click(function(){
    $(document).on("click touchend", ".dismiss", function() {
        $.cookie('promo-gdpr-webinar-2018-06-20', 'true', { expires: 30 });
        $('#alertTop').addClass("hide");
    });

    // not for prod!
    // $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    //     console.log(newSize + ' breakpoint');
    // });
});
