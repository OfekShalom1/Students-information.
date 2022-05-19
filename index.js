const express = require("express")
const app = express()

const cors = require("cors")

const connectDB = require("./configs/db")

const controller = require ("./controller/controller.js")

connectDB()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/students" ,controller)

app.listen(8000, () => {
    console.log("Server is listening");
})