//=== Variable definitions ====//
// Hover markers
var product = $('#productDropdown');
var resources = $('#resourcesDropdown');
var company = $('#companyDropdown');
// Hover content
var productContent = $('.dropdown-product');
var resourcesContent = $('.dropdown-resources');
var companyContent = $('.dropdown-company');

var fadeInTime = 150;
var fadeOutTime = 150;
var hoverOutDelay = 550;

var ww = $(window).width();
if(ww > 1010){
    // There's probably a more elegent way to do this
    // Product hover
    product.hover(function(){
        productContent.stop(true).fadeIn(fadeInTime);
        companyContent.stop(true).fadeOut(fadeOutTime);
        resourcesContent.stop(true).fadeOut(fadeOutTime);
    }, function(){
        productContent.stop(true).delay(hoverOutDelay).fadeOut(fadeOutTime);
    });

    // Resources hover
    resources.hover(function(){
        resourcesContent.stop(true).fadeIn(fadeInTime);
        companyContent.stop(true).fadeOut(fadeOutTime);
        productContent.stop(true).fadeOut(fadeOutTime);
    }, function(){
        resourcesContent.stop(true).delay(hoverOutDelay).fadeOut(fadeOutTime);
    });

    // Company hover
    company.hover(function(){
        companyContent.stop(true).fadeIn(fadeInTime);
        resourcesContent.stop(true).fadeOut(fadeOutTime);
        productContent.stop(true).fadeOut(fadeOutTime);
    }, function(){
        companyContent.stop(true).delay(hoverOutDelay).fadeOut(fadeOutTime);
    });
}

// Reload page so the nav works again
$(window).resize(function(){
    if(ww > 1010 && $(window).width() < 1010){
        location.reload();
    }
    else if(ww < 1010 && $(window).width() > 1010){
        location.reload();
    }
});

// Responsive bits
var menuButton = $('.mobile-menu');
var nav = $('.main-header nav.left');
menuButton.click(function(){
    nav.fadeToggle(fadeInTime);
});
