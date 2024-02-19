const mongoose = require("mongoose");
const schemaa = mongoose.Schema({
        heading: {
          type: String,
        },
        color:{
          type:String
        },
        items: {
          type: [String],
          required: false,
          default: [],
        },
      
});
const todo = mongoose.model("todo", schemaa);
module.exports = todo;

// [{
//     "heading":"vbj",
//     items:[]
// }]
