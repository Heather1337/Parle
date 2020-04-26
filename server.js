const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// app.get('/', (req, res) => res.send('Bonjour tout le monde!'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//Static page for site
// app.use('/public', express.static('./public'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))