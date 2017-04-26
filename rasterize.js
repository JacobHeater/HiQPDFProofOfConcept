"use strict";
var page = require('webpage').create(),
    system = require('system'),
    address, output, size, pageWidth, pageHeight;

if (system.args.length < 0 || system.args.length > 5) {
    console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
    console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
    console.log('  image (png/jpg output) examples: "1920px" entire page, window width 1920px');
    console.log('                                   "800px*600px" window, clipped to 800x600');
    phantom.exit(1);
} else {
    address = system.args[1];
    output = system.args[2];
    page.viewportSize = { width: (8.5 * 96), height: (11 * 96) };
    
    page.paperSize.orientation = 'portrait';
    page.onConsoleMessage = function() {
        var args = [].slice.call(arguments, 0);
        var str = JSON.stringify(args);

        if (str.indexOf("Done!") > -1) {
            console.log(str);
            setTimeout(function() {
                page.render('test.pdf');
                page.render('test.png');
                phantom.exit();
            }, 200);
        }

    };

    page.onLoadFinished = function() {
        console.log([].slice.call(arguments, 0));
        //phantom.exit();
    };
    page.open('http://localhost:4444/?headless=1', function (status) {
        if (status !== 'success') {
            console.log('Unable to load the resource!');
            phantom.exit(1);
        }
    });
}