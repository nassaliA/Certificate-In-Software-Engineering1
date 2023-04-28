const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose= require("mongoose");
const bodyParser=require("body-parser")


const registerRoutes=require("./KYCGENQ/Routes/registerRoutes");

const config = require("./KYCGENQ/config/database");

mongoose.connect(config.database,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db= mongoose.connection
  db.once("open", ()=>{
    console.log("connected to db")
  })

  app.set("view engine","pug")
  app.set("views", path.join(__dirname,"views"))
  app.use(express.static(path.join(__dirname, "public")));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", registerRoutes)






app.listen(3000, ()=> console.log('listening on port 3000'))