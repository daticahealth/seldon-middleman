// create TOC from content scan
document.addEventListener('DOMContentLoaded', function () {
    var link,
        contents,
        eventEmitter;        
    var contents = gajus.Contents({
        articles: $('#content').find('h2').get()
    });
    eventEmitter = contents.eventEmitter();

    $('.article-toc').append('<h4 class="headline-6 spaced-out">Table of Contents</h4>');
    $('.article-toc').append(contents.list());
    // $('.article-toc').append('');
    // $('#article-toc').addClass('group');
});
