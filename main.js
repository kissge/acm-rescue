var url = 'http://dl.acm.org/citation.cfm?id=' + location.href.split('/')[5];
var done = function (res) {
    if (/FullTextPDF.*href="(.*?)"/i.test(res)) {
        location.href = 'http://dl.acm.org/' + RegExp.$1;
    } else {
        error();
    }
};
var error = function () {
    $('body').append($('<a>Were you looking at this: ' + url + '</a>').prop('href', url));
};

$.ajax({url: url})
    .done(done)
    .fail(error);
