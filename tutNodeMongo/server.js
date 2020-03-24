const express = require('express');
const PORT = 3000;
const mongoose = require("mongoose")

let c = new cat ({
    name : "string",
    gender : "String",
    age : 0,
    type : "String",
    adopted : "String",
    isAlive : false, //true or false
    likes : ["String"],
});
console.log(c);

const app = express();
//mongodb:////localhost:27017//namedatabase
mongoose.connect(
    "mongodb://localhost:27017/tutorials",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connected to mongodb");
    }
  );

// mangoose
app.listen(PORT, () => console.log('running on ' + PORT));
