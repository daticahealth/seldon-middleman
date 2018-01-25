// parse RSS feed from Jobvite | Source: https://github.com/sdepold/jquery-rss
jQuery(function($) {
    $("#job-feed").rss(
      "http://source.jobvite.com/TalentNetwork/action/feed/v1/job?c=qnhaVfwt",
      {
        // how many entries do you want?
        // default: 4
        limit: 50,

        // will request the API via https
        // default: false
        // valid values: false, true
        ssl: true,
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='feed-container'>{entries}</div>",
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h4><a href="{url}" title="Read full job description">{title} <i class="fa fa-angle-right"></i></h4></a>',
        // entryTemplate: '<div class="job-item"><h3><a href="{url}" title="Read full job description">{title}</a></h3><h4 class="job-type">{category}</h4><p>{bodyPlain}</p><p><a class="button button-small hollow" href="{url}" title="Read full job description">Read full job description</a></p></div>',
        // formats the date with moment.js (optional)
        // default: 'dddd MMM Do'
        // valid values: see http://momentjs.com/docs/#/displaying/
        dateFormat: 'MMMM Do, YYYY',
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'show',

        // a callback, which gets triggered when everything was loaded successfully
        // this is an alternative to the next parameter (callback function)
        success: function(){
          console.log('success');
        },

      }
    );
});
