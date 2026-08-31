import express from 'express';
import { getCertificate, generateCertificate } from '../controllers/certificateController.js';

const router = express.Router();

router.route('/').post(generateCertificate);
router.route('/:id').get(getCertificate);

export default router;
