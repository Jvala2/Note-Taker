

const noteData = require('../db/db.json');
const fs = require('fs');

module.exports = (app) => {


  app.get('/api/notes', (req, res) => {
    fs.readFileAsync(path.join(__dirname, "./db/db.json"), "utf8")
    .then((data)=> {
        return res.json(JSON.parse(data));
    });
});


  app.post('/api/notes', (req, res) => {

      noteData.push(req.body);
      res.json(true);
  });




  app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  });
};
