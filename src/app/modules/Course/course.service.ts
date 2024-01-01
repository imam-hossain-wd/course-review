import { CourseModel } from './course.model';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICourse } from "./course.interface";


const createCourseIntoDB = async (payload: ICourse) : Promise<any> => {
const result = await CourseModel.create(payload)
return result
}

const getCourses = async ()=> {
    const result  = await CourseModel.find();
    return result;

}

export const CourseServices = {
    createCourseIntoDB,
    getCourses
}