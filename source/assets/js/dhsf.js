var firstSection = "compliance-does-hipaa-matter";
var firstSectionLabel = "#" + firstSection + "-label";
$("document").ready(function(){
    if( !location.hash ) {
        $(firstSectionLabel + " span.df-badge").addClass("attention");
    }
});
function clearSection (msg){
    // console.log("clearSelection: "+msg);
    $("section").removeClass("df-section--active");
    $(firstSectionLabel + " .df-badge").removeClass("attention");
    $(".df-series--container").removeClass("is-first");
}
$("[data-tabs]").on("change.zf.tabs", function() {
    clearSection ("tabchange");
    // clear and then add white-color class to sections, several levels up
    $(this).closest( "section" ).addClass( "df-section--active" );
    // $(this).closest( "section .df-stage--timeline-series" ).addClass( "df-series--active" );

});
$("[data-tabs]").on("collapse.zf.tabs", function() {
    clearSection ("collapsed");
});
// $(".df-phase--title").click(function() {
//     clearSection ("toggle lead intro");
//     $(this).closest( "section" ).addClass( "df-section--active" );
// });
