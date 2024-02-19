const { customResponse } = require("../utilities/customResponse.js");
const todo=require("../modals/todo.js")
const AddCard = async (req, res) => {
  
  try {
    let {heading,color}=req.body
    console.log(heading,"headdddddddddd")
    let exist=await todo.create(req.body)
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
module.exports=AddCard