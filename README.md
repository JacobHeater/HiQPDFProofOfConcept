# Html2PdfExample
A basic example showing how to use 
[PhantomJS](http://phantomjs.org/screen-capture.html) to generate
PDFs using the built in page rendering functionality that
PhantomJS provides. There are two ways to render PDFs, but the
ideal way to do so is to use the inline mode to strip out any
additional styling details that are not relevant to the output.

## Getting Started

1. Open a command prompt.
1. `cd` to the project directory.
1. Run `npm run setup`.
    1. This will run `npm install && npm install -g phantomjs-prebuilt`.
1. Run `npm start`.
1. Open a browser window to `http://localhost:4444`.
    1. There is also pdf mode, which is what the PDF generator uses.
    `http://localhost:4444/?pdf-mode=1`
1. Verify the page loads.
1. From the command line run `npm run make-pdf`.
1. Verify output file `test.pdf` is generated in the project folder.

## Additional Information

You can look through the `render-pdf.js` file to understand more
about how the PDF rendering works with PhantomJS. It's fairly simple.
There are a couple of other formats you can render to with PhantomJS
other than PDF.

## Documentation
[PhantomJS Website](http://phantomjs.org/screen-capture.html)

## Cleaning Up Test Files

You can run `npm run clean` to clean up all of the generated test files.