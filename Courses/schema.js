import mongoose from "mongoose"
const courseSchema =  mongoose.Schema({
    id:String,
    name: String,
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    description: String,
}, 
{collection: "courses"} //what collection are we accessing
);

export default courseSchema;