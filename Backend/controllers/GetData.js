const { customResponse } = require("../utilities/customResponse.js");
const todo=require("../modals/todo.js")
const GetData = async (req, res) => {
  
  try {
    // let {heading}=req.body
    console.log("getdata")
    let exist=await todo.find({})
    if(exist != null){
       
     return customResponse(res,200,true,"Successfully ADDED",exist)
    }
    else{
        return customResponse(res,200,false,"Successfully ADDED","")
    }
  } catch (error) {
    console.log("err",error)
  }

}
module.exports=GetData