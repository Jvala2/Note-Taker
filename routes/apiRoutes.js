

const noteData = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => {
    fs.readFile("./db/db.json", "utf8",function (error, data) {
      let parsedNotes;
      console.log(data);
      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(data));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    })
});


  app.post('/api/notes', (req, res) => {

      noteData.push(req.body);
      res.json(true);
  });




  app.delete('/api/notes', (req, res) => {

    noteData.length = 0;

    res.json({ ok: true });
  });
};
