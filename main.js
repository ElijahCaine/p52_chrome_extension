jQuery(function($) {
    $("#rss-feeds").rss("http://people.oregonstate.edu/~voigte/rss.xml", {
            ssl: true,
            entryTemplate: '<a href={url}><div id="post"><h3>{title}</h3><p>{shortBody}</p></div></a>'
        }
    )}
)
