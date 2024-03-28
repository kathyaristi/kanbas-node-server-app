//equivalent to an Object Relational Object but here its Object Data Mapping

import mongoose from "mongoose"
import courseSchema from "./schema.js"
const courseModel = mongoose.model("Course",courseSchema);

courseModel //create,delete,update,