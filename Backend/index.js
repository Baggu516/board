const cors=require("cors")
const express=require("express")
const app =express()
require("./database/db.js")
app.use(express.json())
app.use(cors())

app.use("/board",require("./routers/AddItemsRoute.js"))
app.use("/board",require("./routers/AddItemHeadingRoute.js"))
app.use("/card",require("./routers/AddCardRoute.js"))
app.use("/data",require("./routers/GetDataRoute.js"))
const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server listened" +" "+ port ));