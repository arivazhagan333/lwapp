import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        'IT Infrastructure Management',
        'Software Development',
        'Electronic Design Automation',
        'Industrial Automation',
        'Special Programs',
        'Premier Livewire Programs',
      ],
    },
    duration: {
      type: String,
      required: true,
    },
    durationHours: {
      type: Number,
      default: 40,
    },
    overview: {
      type: String,
      required: true,
    },
    curriculum: [
      {
        moduleTitle: String,
        topics: [String],
      },
    ],
    features: [String],
    careerRoles: [String],
    isTrending: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      default: 'Industry Certified',
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model('Course', courseSchema);
