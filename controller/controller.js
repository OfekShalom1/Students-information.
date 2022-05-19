const studentBL = require("../services/studentBL");

const express = require("express");
const { get } = require("mongoose");
const router = express.Router();

router.route("/").get(async (req, res) => {
  try {
    const students = await studentBL.getallstudents();
    return res.json(students);
  } catch (err) {
    return res.json(err);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const id = req.params.id;
    const student = await studentBL.getbyid(id);
    return res.json(student);
  } catch (err) {
    return res.json(err);
  }
});
// POST - create
router.route("/").post(async (req, res) => {
  try {
    const newstudent = req.body;
    const addstudent = await studentBL.addstudent(newstudent);
    return res.json(addstudent);
  } catch (err) {
    return res.json(err);
  }
});
// PUT - update
router.route("/:id").put(async (req, res) => {
  try {
    const id = req.params.id;
    const updatedstudent = req.body;
    const result = await studentBL.updateStudent(id, updatedstudent);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
});

// delete
router.route("/:id").delete(async (req, res) => {
  try {
    const id = req.params.id;
    const result = await studentBL.deleteStudent(id);
    return res.json(result);
  } catch (err) {
    return res.json(err);
  }
});

// this is for the edit exams in the html page= "examsWeb.html"
// router.route("/:id/exams").get(async(req,res) =>{
//   try {
//     const id = req.params.id;
//     const student = await studentBL.getbyid(id)
//     const studentexams = student.exams
//     for (let i = 0; i < studentexams.length; i++) {
//       router.route(`/:id/exams/${i}`).get(async(req,res) => {
//         return res.json(studentexams[i])
//       })
//     }
//    return res.json(studentexams)
//   } catch (err) {
//     return res.json(err)
//   }
// })

// router.route("/:id/exams").put(async(req,res) =>{
//   try {
//     const id = req.params.id;
//     const student = await studentBL.getbyid(id)
//     const studentexams = student.exams
//     for (let i = 0; i < studentexams.length; i++) {
//       router.route(`/:id/exams/${i}`).put(async(req,res) => {
//         return res.json(studentexams[i])
//       })
//     }
//    return res.json(studentexams)
//   } catch (err) {
//     return res.json(err)
//   }
// })

module.exports = router;
