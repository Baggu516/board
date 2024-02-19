const express=require("express")
const router=express.Router()
const GetData=require("../controllers/GetData.js")
router.get("/getdata",GetData)
module.exports=router