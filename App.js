import express from "express";
import Hello from "./hello.js";

//const express = require("express") //require means import
// import CourseRoutes from "./Courses/routes.js"
// import cors from "cors"
// import mongoose from "mongoose"

const app = express();
Hello(app)
app.listen(4000)



// mongoose.connect("mongodb://localhost:27017/kanban-sp24-wed")

// app.use(cors()); // allow anything to come in from anywhere
// app.use(express.json());
// app.use(session({
//     secret: "secret",
//     resave: false,
//     cookie: {secure: false}, //says that we use HTTP (not HTTPSecured)
// }))
// Hello(app);
// CourseRoutes(app);
// // Lab5(app);

// app.listen(4000);         // listen at port 4000