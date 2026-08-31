import express from 'express';
import { getCourses, getCourseBySlug, createCourse } from '../controllers/courseController.js';

const router = express.Router();

router.route('/').get(getCourses).post(createCourse);
router.route('/:slug').get(getCourseBySlug);

export default router;
