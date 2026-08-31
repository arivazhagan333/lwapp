import express from 'express';
import {
  submitInquiry,
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from '../controllers/inquiryController.js';

const router = express.Router();

router.route('/').post(submitInquiry).get(getInquiries);
router.route('/:id').patch(updateInquiryStatus).delete(deleteInquiry);

export default router;
