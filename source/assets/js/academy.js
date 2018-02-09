function hideWidgets() {
    $('.discovery-link').addClass("js-hidden");
    $('.discovery-link').removeClass("js-visible");
}
function showWidget(tag) {
    hideWidgets();
    $('#discovery-'+tag).addClass("js-visible");
    $('#discovery-'+tag).removeClass("js-hidden");
}
function filterList() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toLowerCase();
    hideWidgets();
    // map certain keywords to discovery topic slugs
    switch (filter) {
        case "hipaa": case "compliance":
            showWidget("hipaa-compliance");
            break;
        case "cloud":
            showWidget("healthcare-cloud");
            break;
        case "integration": case "integrate": case "integrat": case "ehr":
            showWidget("ehr-integrations");
            break;
        case "hitrust":
            showWidget("hitrust");
            break;
        // default:
        //     hideWidgets();
    }
    ul = document.getElementById("articleList");
    li = ul.getElementsByClassName('article-list--item');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            // $(li).addClass("js-visible");
            // $(li).removeClass("js-hidden");
        } else {
            li[i].style.display = "none";
            // $(li).addClass("js-hidden");
            // $(li).removeClass("js-visible");
        }
    }
}





// // $("document").ready(function(){

// // }
// filterSelection("all");
// function filterSelection(c) {
//     var x, i;
//     x = document.getElementsByClassName("article-list--item");
//     if (c == "all") c = "";
//     for (i = 0; i < x.length; i++) {
//         listRemoveClass(x[i], "js-visible");
//         if (x[i].className.indexOf(c) > -1) listAddClass(x[i], "js-visible");
//     }
//     // console.log("filterSelection");
// }

// function listAddClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         if (arr1.indexOf(arr2[i]) == -1) {
//             element.className += " " + arr2[i];
//         }
//     }
//     // console.log("listAddClass");
// }

// function listRemoveClass(element, name) {
//     var i, arr1, arr2;
//     arr1 = element.className.split(" ");
//     arr2 = name.split(" ");
//     for (i = 0; i < arr2.length; i++) {
//         while (arr1.indexOf(arr2[i]) > -1) {
//             arr1.splice(arr1.indexOf(arr2[i]), 1);
//         }
//     }
//     element.className = arr1.join(" ");
//     // console.log("listRemoveClass");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("filterButtonGroup");
// var btns = btnContainer.getElementsByClassName("js-tag");
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//         // console.log(this);
//     });
// }
