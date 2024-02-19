const mongoose = require('mongoose');
// import mongoose from "mongoose"
mongoose.connect("mongodb+srv://board:board@cluster0.joh9mvo.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log('Connected!')).catch((err)=>{
    console.log(err,"error")
  })