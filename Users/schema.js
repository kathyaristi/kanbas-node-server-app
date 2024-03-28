import mongoose from "mongoose"

const userSchema =mongoose.Schema(
    {
        id:String,
        username: {type: String, unique:true, required:true}
    }
)