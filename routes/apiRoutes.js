const { v4: uuidv4 } = require('uuid');
console.log(uuidv4());
const noteData = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {


    
      app.get('/api/notes', (req, res) => {
        fs.readFile("./db/db.json", "utf8",function (error, data) {
          var notes=JSON.parse(data)
        res.json(notes);
    });
});

app.post('/api/notes', (req, res) => {
  fs.readFile('db/db.json',(error, data) => {
    if (error) throw error;
    let json = JSON.parse(data);
    let note = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4()
    }
    json.push(note);
    fs.writeFile('db/db.json', JSON.stringify(json, null, 2), (error) => {
      if (error) throw error;
      res.send('200');
    });
  });
});


  app.delete('/api/notes/:id', (req, res) => {

    fs.readFile('db/db.json',(error, data) => {

      if (error) throw error;
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