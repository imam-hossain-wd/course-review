import { Router } from "express";
import { CourseControllers } from "./course.controller";

const router = Router()


router.post('/course', CourseControllers.createCourse)
router.get('/course', CourseControllers.getCourses)


export const CourseRoutes = router