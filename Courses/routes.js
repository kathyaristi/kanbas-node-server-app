import db from "../Kanbas/Database/index.js"

export default function CourseRoutes(app){
  //   //CRUD create, Read, Update, Delete
  //  const findAllCourses = (req,res) =>{
  //   res.json(db.courses);
  //   const course = dao.findAllCourses(course);

  //  };
  //  const findCourseById = (req,res) =>{
  //   //User sends id as a query parameter
  //   const  id = req.params.id;
  //   // const course = db.courses.find((course)=> course.id == course._id);
  //   // res.json(course);

  //   const course = dao.findCourseById(course);

  //  }s;
  //  const updateCourse  = (req,res) =>{};
  //  const deleteCourse  = (req,res) =>{};
  //  const createCourse = (req,res) => {
  //   const course ={...req.body, _id: Date.now().toString()};
  //   db.courses.push(course);
  //   res.json(course);
  // };

  // const status = await dao.updateUser(id,user);
  // res.json(status); //whether we successfully updated or it failed

  // app.post("/api/courses", createCourse);
  //  app.get("/api/courses", findAllCourses);
  //  app.get("/api/courses/:id", findCourseById);

};