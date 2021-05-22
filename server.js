
const express = require('express');


const app = express();


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))
app.get("/ping",(req,res) => {
  res.send("Hello.")
})
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
