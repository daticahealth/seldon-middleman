// leadership gallery tab management
$("[data-tabs]").on("change.zf.tabs", function(event, tab) {
    var tabID = $(tab).attr('id');
    // console.log("ID is: " + tabID);
    $(".lg-nav--item").removeClass("is-first");
    scrollToId('#main-content');
});
function scrollToId (id){ // pass id - or class even, like scrollToId('#main-content'); jquery method - https://css-tricks.com/snippets/jquery/smooth-scrolling/
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
}
