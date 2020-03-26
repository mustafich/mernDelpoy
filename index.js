const express = require("express");
const config = require("config")
const mongoose = require("mongoose");
const session = require("express-session")
const bodyParser = require("body-parser");
const flash = require("connect-flash")
const varMiddleware = require("./middleware/variables")
const app = express();
const path = require('path')

app.use(express.json({extended:true}))
const PORT = config.get("port") || 4000
app.use(session({
  secret:"some secre value",
  resave:false,
  saveUninitialized:false,
}))
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
app.use(varMiddleware)
app.use(flash())
var cors = require('cors')
mongoose.connect("mongodb://localhost/infoblog", { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify: false  });
app.use(cors())

app.use(bodyParser.json());

app.use("/api", require("./api"));



app.listen(PORT, ()=>{
  console.log("server is listening");
});
