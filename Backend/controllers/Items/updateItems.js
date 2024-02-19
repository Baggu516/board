const { customResponse } = require("../../utilities/customResponse.js");
const todo=require("../../modals/todo.js")
const updateItems = async (req, res) => {
  
    try {
        let {id,index,text}=req.body
        let exist=await todo.findById(id)
        console.log("exist",exist)
        if(!exist){
          return customResponse(res,200,false,"NOT FOUND","")
        }
        let temp_arr=[... exist.items]
        temp_arr.splice(index,1,text)
        exist.items=[...temp_arr]
        
        let updated_user=await exist.save()
         return customResponse(res,200,true,"Successfully ADDED",updated_user)
      } catch (error) {
        console.log("err",error)
      }
}
module.exports=updateItems