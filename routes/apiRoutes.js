const uuidv1 = require('uuid/v1');
const noteData = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {


    fs.readFile("./db/db.json", "utf8",function (error, data) {
      var notes=JSON.parse(data)
      app.get('/api/notes', (req, res) => {
        res.json(notes)
    })
});

app.post('/api/notes', (req, res) => {
  fs.readFile('db/db.json',(err, data) => {
    if (err) throw err;
    let json = JSON.parse(data);
    let note = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv1()
    }
    json.push(note);
    fs.writeFile('db/db.json', JSON.stringify(json, null, 2), (err) => {
      if (err) throw err;
      res.send('200');
    });
  });
});


  app.delete('/api/notes/:id', (req, res) => {

    fs.readFile('db/db.json',(err, data) => {

      if (err) throw err;
      let itemDelete = req.params.id;
      let json = JSON.parse(data);
      json.forEach((item, i) =>{
        if (item.id.includes(itemDelete)){ 
          json.splice(i, 1);       
        }
      });
  });
});
};