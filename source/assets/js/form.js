$(window).on('load', function(){
    var absoluteForm = $("#absoluteForm");
    var setHeight = $("#setHeight");
    var height = absoluteForm.height() - 100;

    var ww = $(window).width();
    console.log(absoluteForm.height());
    if(ww > 640){
        setHeight.css({height: height});
    }
});
