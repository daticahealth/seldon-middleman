// create TOC from content scan
document.addEventListener('DOMContentLoaded', function () {
    var link,
        contents,
        eventEmitter;        
    var contents = gajus.Contents({
        articles: $('#content').find('h2, h3').get()
    });
    eventEmitter = contents.eventEmitter();

    $('#article-toc').append('<hr><p class="subheader-small">In This Article</p>');
    $('#article-toc').append(contents.list());
    $('#article-toc').append('<hr>');
    // $('#article-toc').addClass('group');
});
