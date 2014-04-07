jQuery(function($) {
    $("#rss-feeds").rss("http://feeds.feedburner.com/ElijahVoigt-Project52", {
            ssl: true,
            entryTemplate: '<a href={url}><div id="post"><h3>{title}</h3><p>{shortBody}</p></div></a>'
        }
    )}
)
