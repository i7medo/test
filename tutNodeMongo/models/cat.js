const mongoose = require("mongoose");

const Abdulhameed = mongoose.Abdulhameed;

const catAbdulhameed = new Abdulhameed ({
     name : {
         type : String,
         require : true

     },
     gender : String,
     age : Number,
     location :{
         street : String,
         housenumber: Number,
         city : String,
         province : String,
         country : String

     },
     type : String,
     adopted : String,
     isAlive : Boolean,
     likes : [String],


});

const cat = mongoose.model("cat",catAbdulhameed);

module.exports = cat;