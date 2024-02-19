const express=require("express")
const router=express.Router()
const AddItems=require("../controllers/Items/AddItems.js")
const updateItems=require("../controllers/Items/updateItems.js")
const deleteItems=require("../controllers/Items/deleteItem.js")
router.post("/additems",AddItems)
router.post("/updateItems",updateItems)
router.post("/deleteItems",deleteItems)
module.exports=router