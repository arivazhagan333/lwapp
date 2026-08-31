import { Inquiry } from '../models/Inquiry.js';
import { getMongoStatus } from '../config/db.js';

let memoryInquiries = [
  {
    _id: 'inq_101',
    firstName: 'Karthik',
    lastName: 'Rajan',
    email: 'karthik.r@example.com',
    phone: '+91 98765 43210',
    subject: 'Course Fee Inquiry',
    courseInterested: 'Python Programming Language',
    preferredBranch: 'New Bus Stand Branch',
    message: 'Interested in weekend batch timings and syllabus details.',
    status: 'New',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    _id: 'inq_102',
    firstName: 'Priya',
    lastName: 'Dharshini',
    email: 'priya.d@example.com',
    phone: '+91 94432 10987',
    subject: 'Placement Support',
    courseInterested: 'Full Stack Web Development (MERN & MEAN)',
    preferredBranch: 'Cherry Road Branch',
    message: 'Looking for 100% placement assurance course starting next month.',
    status: 'Contacted',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

// @desc    Submit a new inquiry / lead
// @route   POST /api/inquiries
export const submitInquiry = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, courseInterested, preferredBranch, message } = req.body;

    if (!firstName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide required fields: First Name, Email, and Phone.',
      });
    }

    const payload = {
      firstName,
      lastName: lastName || '',
      email,
      phone,
      subject: subject || 'Course Inquiry',
      courseInterested: courseInterested || 'General Inquiry',
      preferredBranch: preferredBranch || 'New Bus Stand Branch',
      message: message || '',
      status: 'New',
    };

    if (getMongoStatus()) {
      const inquiry = await Inquiry.create(payload);
      return res.status(201).json({
        success: true,
        message: 'Thank you! Your inquiry has been received. Our counselor will contact you shortly.',
        data: inquiry,
      });
    }

    // Fallback Memory Save
    const newInquiry = {
      ...payload,
      _id: 'inq_' + Date.now(),
      createdAt: new Date().toISOString(),
    };
    memoryInquiries.unshift(newInquiry);

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your inquiry has been received. Our counselor will contact you shortly.',
      data: newInquiry,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all inquiries (Admin)
// @route   GET /api/inquiries
export const getInquiries = async (req, res) => {
  try {
    const { status, search } = req.query;

    if (getMongoStatus()) {
      const query = {};
      if (status && status !== 'All') query.status = status;
      if (search) {
        query.$or = [
          { firstName: { $regex: search, $options: 'i' } },
          { lastName: { $regex: search, $options: 'i' } },
          { email: { $regex: search, $options: 'i' } },
          { phone: { $regex: search, $options: 'i' } },
          { courseInterested: { $regex: search, $options: 'i' } },
        ];
      }
      const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
      return res.json({ success: true, count: inquiries.length, data: inquiries });
    }

    let results = memoryInquiries;
    if (status && status !== 'All') {
      results = results.filter((i) => i.status === status);
    }
    if (search) {
      const term = search.toLowerCase();
      results = results.filter(
        (i) =>
          i.firstName.toLowerCase().includes(term) ||
          i.lastName.toLowerCase().includes(term) ||
          i.email.toLowerCase().includes(term) ||
          i.phone.includes(term) ||
          i.courseInterested.toLowerCase().includes(term)
      );
    }

    return res.json({ success: true, count: results.length, data: results });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update lead status (Admin)
// @route   PATCH /api/inquiries/:id
export const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (getMongoStatus()) {
      const inquiry = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
      if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
      return res.json({ success: true, data: inquiry });
    }

    const inq = memoryInquiries.find((i) => i._id === id);
    if (!inq) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    inq.status = status;
    return res.json({ success: true, data: inq });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete lead (Admin)
// @route   DELETE /api/inquiries/:id
export const deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;

    if (getMongoStatus()) {
      await Inquiry.findByIdAndDelete(id);
      return res.json({ success: true, message: 'Inquiry deleted successfully' });
    }

    memoryInquiries = memoryInquiries.filter((i) => i._id !== id);
    return res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
