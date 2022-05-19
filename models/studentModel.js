const mongoose =  require("mongoose")

const scheme = mongoose.Schema

const examsArr = [{
    name : String,
    date : Date,
    grade: Number
}]

const studentScheme = new scheme ({
    name : String,
    email: String,
    faculty: String,
    birth: Date,
    exams: examsArr
})

module.exports = mongoose.model("studend" , studentScheme)