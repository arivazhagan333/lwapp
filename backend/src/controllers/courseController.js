import { Course } from '../models/Course.js';
import { initialCourses } from '../data/seedCourses.js';
import { getMongoStatus } from '../config/db.js';

let memoryCourses = [...initialCourses];

export const seedDatabaseIfEmpty = async () => {
  if (getMongoStatus()) {
    try {
      const count = await Course.countDocuments();
      if (count === 0) {
        await Course.insertMany(initialCourses);
        console.log('🌱 Seeded courses into MongoDB successfully');
      }
    } catch (err) {
      console.error('Error checking/seeding courses:', err.message);
    }
  }
};

// @desc    Get all courses with optional category & trending filter
// @route   GET /api/courses
export const getCourses = async (req, res) => {
  try {
    const { category, isTrending, search } = req.query;

    if (getMongoStatus()) {
      const query = {};
      if (category && category !== 'All') query.category = category;
      if (isTrending === 'true') query.isTrending = true;
      if (search) {
        query.$or = [
          { title: { $regex: search, $options: 'i' } },
          { overview: { $regex: search, $options: 'i' } },
        ];
      }
      const courses = await Course.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: courses.length, data: courses });
    }

    // Fallback Memory filtering
    let results = memoryCourses;
    if (category && category !== 'All') {
      results = results.filter((c) => c.category.toLowerCase() === category.toLowerCase());
    }
    if (isTrending === 'true') {
      results = results.filter((c) => c.isTrending);
    }
    if (search) {
      const term = search.toLowerCase();
      results = results.filter(
        (c) => c.title.toLowerCase().includes(term) || c.overview.toLowerCase().includes(term)
      );
    }

    return res.json({ success: true, count: results.length, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single course by slug
// @route   GET /api/courses/:slug
export const getCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    if (getMongoStatus()) {
      const course = await Course.findOne({ slug: slug.toLowerCase() });
      if (!course) {
        return res.status(404).json({ success: false, message: 'Course not found' });
      }
      return res.json({ success: true, data: course });
    }

    const course = memoryCourses.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
    if (!course) {
      return res.status(404).json({ success: false, message: 'Course not found' });
    }
    return res.json({ success: true, data: course });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Add new course (Admin)
// @route   POST /api/courses
export const createCourse = async (req, res) => {
  try {
    const courseData = req.body;
    if (!courseData.slug) {
      courseData.slug = courseData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    if (getMongoStatus()) {
      const course = await Course.create(courseData);
      return res.status(201).json({ success: true, data: course });
    }

    memoryCourses.unshift({
      ...courseData,
      _id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    });
    return res.status(201).json({ success: true, data: memoryCourses[0] });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
