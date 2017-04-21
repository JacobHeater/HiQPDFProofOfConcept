(() => {

    'use strict';

    const express = require('express');
    const app = express();

    const staticPaths = [
        '/scripts',
        '/styles'
    ];

    staticPaths.forEach(p => app.use(p, express.static(`${__dirname}${p}`)));

    app.get('/', (req, res) => res.sendFile(`${__dirname}/index.html`));


    app.listen(process.env.PORT || 4444);


})();
