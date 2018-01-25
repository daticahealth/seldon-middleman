    // Content-only transformations and more. These deal only with contentful-driven stuff
document.addEventListener("DOMContentLoaded", function(event) {
    // wrap iframes in article.content-dynamic with responsive classes.
    $( "article.content-dynamic iframe" ).wrap( "<div class='responsive-embed widescreen'></div>" );
    // Figure Caption === Markdown must have a class added, like ![alt text](https://flinhong.com/image.jpg "Title Text"){:.tofigure}
    $( ".content-dynamic img.tofigure" ).wrap( "<figure class=\"img-caption\"></figure>" );
    $('figure.img-caption').children('img').each(function() {
        var caption;
        caption = $(this).attr('alt');
        $(this).after('<figcaption class="caption">' + caption + '</figcaption>');
    });
});