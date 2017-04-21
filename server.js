(() => {

    'use strict';
    

    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 4444;

    const staticPaths = [
        '/scripts',
        '/styles'
    ];

    staticPaths.forEach(p => app.use(p, express.static(`${__dirname}${p}`)));

    app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));


    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));


})();
