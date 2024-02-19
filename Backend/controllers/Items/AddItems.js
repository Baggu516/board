const { customResponse } = require("../../utilities/customResponse.js");
const todo=require("../../modals/todo.js")
const AddItems = async (req, res) => {
  
  try {
    let {id,text}=req.body
    let exist=await todo.findById(id)

    if(!exist){
      return customResponse(res,200,false,"NOT FOUND","")
    }
    exist.items.push(text)
    let updated_user=await exist.save()
     return customResponse(res,200,true,"Successfully ADDED",updated_user)
  }
    catch (error) {
    console.log("err",error)
  }

}
module.exports=AddItems