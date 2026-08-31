import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import courseRoutes from './routes/courseRoutes.js';
import inquiryRoutes from './routes/inquiryRoutes.js';
import certificateRoutes from './routes/certificateRoutes.js';
import { seedDatabaseIfEmpty } from './controllers/courseController.js';
import { seedCertificatesIfEmpty } from './controllers/certificateController.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB().then(() => {
  seedDatabaseIfEmpty();
  seedCertificatesIfEmpty();
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/courses', courseRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/certificates', certificateRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    app: 'Livewire Salem MERN Backend',
    timestamp: new Date().toISOString(),
  });
});

// Serve frontend static assets in production (for Render single-service deployment)
const frontendDistPath = path.resolve(__dirname, '../../frontend/dist');
app.use(express.static(frontendDistPath));

app.get('*', (req, res) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(frontendDistPath, 'index.html'));
  } else {
    res.status(404).json({ success: false, message: 'API Route not found' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({ success: false, message: err.message || 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Livewire Application running on http://localhost:${PORT}`);
});
