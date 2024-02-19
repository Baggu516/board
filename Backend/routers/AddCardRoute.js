const express=require("express")
const router=express.Router()
const AddCard=require("../controllers/AddCard.js")
router.post("/addcard",AddCard)
module.exports=router