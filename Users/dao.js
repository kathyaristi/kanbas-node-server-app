import userModel from "./model.js"

///CRUD 
export const findAllUsers = () => userModel.find();
//find user by user name
export const findUserByUsername = (username) => userModel.findOne({username});
export const findUserByCredentials = (username, password) => userModel.findOne({username,password});
