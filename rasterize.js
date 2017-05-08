(function () {

    'use strict';

    var page = require('webpage').create();
    var url = 'http://localhost:4444/';
    var queryString = '?pdf-mode=1';
    var CONSOLE_COLOR_RED = '\x1b[31m';

    page.viewportSize = {
        width: 1700,
        height: 960
    };
    page.paperSize = {
        width: '8.5in',
        height: '11in',
        margin: '0in'
    };

    page.paperSize.orientation = 'portrait';
    page.onConsoleMessage = function () {
        var args = [].slice.call(arguments, 0);
        var str = JSON.stringify(args);

        if (str.indexOf('Done!') > -1) {
            console.log(str);
            setTimeout(function () {
                page.render('test.pdf');
                phantom.exit();
            }, 200);
        }

    };

    page.onLoadFinished = function () {
        console.log([].slice.call(arguments, 0));
    };

    page.open(formatString('{0}{1}', url, queryString), function (status) {
        if (status !== 'success') {
            console.log(CONSOLE_COLOR_RED, formatString('Unable to load resource "{0}"!', url));
            phantom.exit(1);
        }
    });

    function formatString() {
        var str = arguments[0];
        var token;

        for (var i = 1; i < arguments.length; i++) {
            token = '{' + (i - 1) + '}';
            str = str.replace(token, arguments[i]);
        }

        return str;
    }

})();