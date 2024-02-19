const { customResponse } = require("../../utilities/customResponse.js");
const todo=require("../../modals/todo.js")
const deleteItems = async (req, res) => {
  
  try {
    let {id,index}=req.body
    let exist=await todo.findById(id)
    console.log("exist",exist)
    if(!exist){
      return customResponse(res,200,false,"NOT FOUND","")
    }
    let temp_arr=[... exist.items]
    temp_arr.splice(index,1)
    exist.items=[...temp_arr]
    
    let updated_user=await exist.save()
     return customResponse(res,200,true,"Successfully ADDED",updated_user)
  } catch (error) {
    console.log("err",error)
  }

}
module.exports=deleteItems