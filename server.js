const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

const wordList =[{'front': 'Bonjour', 
'back': 'Hello'}, {'front': 'Au Revoir', 
'back': 'Bye'},{'front': 'Merci',
'back': 'Thank You'}]
// app.get('/', (req, res) => res.send('Bonjour tout le monde!'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/french', (req, res) => {
    console.log(wordList)
    res.send(wordList)
})

app.get("/french", (req, res) => {
    res
      .json(wordList)
      .end();
  });

app.use('/public', express.static('./public'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))