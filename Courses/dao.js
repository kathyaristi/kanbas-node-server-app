import courseModel from ".model.js"

export const findAllCourses = () => courseModel.find();
export const findCourseById = (id) => courseModel.findById(id);
export const findCoursesByDepartment = (department) => courseModel.find({department});
export const findCoursesByInstructor = (instructor) => courseModel.find({instructor})
export const updateCourse = (id,course) => courseModel.updateOne({_id: id}, {$set: course});