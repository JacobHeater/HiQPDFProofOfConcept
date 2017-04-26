(function () {

    'use strict';

    var html = require('fs').read('./inline.html');
    var page = require('webpage').create();

    page.viewportSize = {
        width: 1700,
        height: 960
    };
    page.paperSize = {
        width: '8.5in',
        height: '11in',
        margin: '0in'
    };
    page.setContent(html, 'localhost:4444');

    setTimeout(function () {
        page.render('test.pdf');
        page.render('test.png');

        phantom.exit();
    }, 2000);

})();