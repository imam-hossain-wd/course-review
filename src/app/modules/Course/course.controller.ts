import { Request, Response } from "express";

import { CourseServices } from "./course.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createCourse = catchAsync(async (req:Request, res : Response) => {
    const course = req.body
    const result = await CourseServices.createCourseIntoDB(course)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course is created succesfully',
        data: result,
      });
})
const getCourses = catchAsync(async (req:Request, res : Response) => {
    const result = await CourseServices.getCourses()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Course Retrived succesfully',
        data: result,
      });
})

export const CourseControllers = {
    createCourse,
    getCourses
}