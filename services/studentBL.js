const studentmodel = require("../models/studentModel");

const getallstudents = () => {
  return new Promise((resolve, reject) => {
    studentmodel.find({}, (err, students) => {
      if (err) {
        reject(err);
      } else {
        resolve(students);
      }
    });
  });
};

const getbyid = (id) => {
  return new Promise((resolve, reject) => {
    studentmodel.findById(id, (err, student) => {
      if (err) {
        reject(err);
      } else {
        resolve(student);
      }
    });
  });
};
//create
const addstudent = (newstudent) => {
  return new Promise((resolve, reject) => {
    const student = new studentmodel(newstudent);
    student.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Added student successfully");
      }
    });
  });
};
//update
const updateStudent = (id, updateStudent) => {
  return new Promise((resolve, reject) => {
    studentmodel.findByIdAndUpdate(id, updateStudent, (err) => {
      if (err) {
        reject(err);
      } else {resolve("Student updated seccessfully")};
    });
  });
};
//delete
const deleteStudent = (id) => {
  return new Promise((resolve, reject) => {
    studentmodel.findByIdAndRemove(id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Student deleted seccessfully");
      }
    });
  });
};

module.exports ={
    getallstudents,
    getbyid,
    addstudent,
    updateStudent,
    deleteStudent
}