import mongoose from 'mongoose';

let isMongoConnected = false;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/livewire_salem', {
      serverSelectionTimeoutMS: 2500, // Quick timeout if MongoDB is not active locally
    });
    isMongoConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.warn(`⚠️ MongoDB connection warning: ${error.message}. Running in fallback memory mode.`);
  }
};

export const getMongoStatus = () => isMongoConnected;
