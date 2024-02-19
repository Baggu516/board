const mongoose = require('mongoose');
// import mongoose from "mongoose"
mongoose.connect("mongodb+srv://boardy:boardy@cluster0.ihxugnh.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err,"error")
  })