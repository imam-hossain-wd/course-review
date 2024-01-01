import { Router } from 'express';
import { CourseRoutes } from '../modules/Course/course.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: CourseRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
