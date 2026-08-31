import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
      default: '',
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      default: 'General Inquiry',
    },
    courseInterested: {
      type: String,
      default: 'General / Any Course',
    },
    preferredBranch: {
      type: String,
      enum: ['New Bus Stand Branch', 'Cherry Road Branch', 'Online Training', 'Not Sure'],
      default: 'New Bus Stand Branch',
    },
    message: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['New', 'Contacted', 'Counseling Scheduled', 'Enrolled', 'Closed'],
      default: 'New',
    },
  },
  {
    timestamps: true,
  }
);

export const Inquiry = mongoose.model('Inquiry', inquirySchema);
