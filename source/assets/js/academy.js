$("document").ready(function(){
    var hipaaButton = $("#clickHipaa");
    var fhirButton = $("#clickFhir");
    var hl7Button = $("#clickHl7");
    var glossaryButton = $("#clickGlossary");

    var jsTagHippa = $(".js-tag-hipaa");
    var jsTagFhir = $(".js-tag-fhir");
    var jsTagHl7 = $(".js-tag-hl7");
    var jsTagGlossary = $(".js-tag-glossary");
    // Remove this once all entries are tagged properly
    var jsTagCompany = $(".js-tag-company");

    hipaaButton.click(function(e){
        e.preventDefault();
        // Add the active class to the button being clicked
        $(this).toggleClass("active");
        // Hide
        jsTagFhir.addClass("visibility-none");
        jsTagHl7.addClass("visibility-none");
        jsTagCompany.addClass("visibility-none");
        jsTagGlossary.addClass("visibility-none");
        // Show
        jsTagHipaa.toggle(
            function(){
                $(this).show(0);
            },
            function(){
                jsTagFhir.removeClass("visibility-none");
                jsTagHl7.removeClass("visibility-none");
                jsTagCompany.removeClass("visibility-none");
                jsTagGlossary.removeClass("visibility-none");
            }
        )
    });
});
