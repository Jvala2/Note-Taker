

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

let data = "saveNote"
fs.writeFile("./db/db.json", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("./db/db.json", "utf8"));
  }
});



  app.delete('/api/notes', (req, res) => {
// .filter
    noteData.length = 0;

    res.json({ ok: true });
  });
};
