const express      = require('express');
const path         = require('path');

require('./environment');

// This is the asset folder to be served.
const assetFolder  = path.resolve(__dirname, 'dist');

const app          = express();
const port         = process.env.PORT;

app.use(express.static(assetFolder));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(assetFolder, 'index.html'));
});

app.listen(port, () => console.log('Server is listening on port', port));
