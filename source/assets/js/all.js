$("document").ready(function(){ 
    // if (Foundation.MediaQuery.atLeast('medium-large')) {
    //     const element = document.querySelector('.menu-aim')
    //     const options = {
    //         menuItemSelector: '.menu-aim__item',
    //         menuItemActiveClassName: 'menu-aim__item--active',
    //         delayingClassName: 'menu-aim--delaying'
    //     };
    //     menuAim(element, options);
    // }
    const element = document.querySelector('.menu-aim')
    const options = {
        menuItemSelector: '.menu-aim__item',
        menuItemActiveClassName: 'menu-aim__item--active',
        delayingClassName: 'menu-aim--delaying'
    }
    menuAim(element, options);
        // const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    const observer = lozad('.lozad', {
        rootMargin: '100px 0px', // like css margin
        // threshold: 0.1 // ratio of element convergence
        loaded: function(el) {
            // Custom implementation on a loaded element
            el.classList.add('loaded');
            // el.classList.remove('loading-blur');
        }
    });
    observer.observe();
    // init foundation stuff - interchange, close box, etc.
    if (Foundation.MediaQuery.current == 'small' || Foundation.MediaQuery.current == 'medium') {
      $('.sticky').removeAttr('data-sticky');
    }
    $(document).foundation();
    
    // Cookie config for modal
    // following string is now rendered in _alert-ribbon.slim
    //var currPromoCookie = 'promo-c3-2018-09-14';
    // If no cookie with our chosen class...
    if($.cookie(currPromoCookie) == null){
        $('#alertTop').removeClass("hide");
    }else{
        $('#alertTop').addClass("hide");
    }
    // $(".dismiss").click(function(){
    $(document).on("click touchend", ".dismiss", function() {
        $.cookie(currPromoCookie, 'true', { expires: 14, path: '/' });
        $('#alertTop').addClass("hide");
    });

    // not for prod!
    // $(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
    //     console.log(newSize + ' breakpoint');
    // });
});

// $(document).foundation();