const express=require("express")
const router=express.Router()
const AddItemHeading=require("../controllers/heading/AddItemHeading.js")
router.post("/additemheading",AddItemHeading)
module.exports=router