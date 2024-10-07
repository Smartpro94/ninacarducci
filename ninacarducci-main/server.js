const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
