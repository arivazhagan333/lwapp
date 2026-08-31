import { Certificate } from '../models/Certificate.js';
import { getMongoStatus } from '../config/db.js';

let memoryCertificates = [
  {
    _id: 'cert_101',
    certificateId: 'LW-WS-2026-001',
    studentName: 'Rahul .S',
    phone: '+91 98427 45854',
    college: 'Sona College of Technology',
    location: 'Salem',
    workshopTitle: 'Professional Skills Development Training',
    issueDate: '28 Aug 2026',
  },
];

export const seedCertificatesIfEmpty = async () => {
  if (getMongoStatus()) {
    try {
      const count = await Certificate.countDocuments();
      if (count === 0) {
        await Certificate.insertMany(memoryCertificates);
        console.log('📜 Seeded initial workshop certificate into MongoDB');
      }
    } catch (err) {
      console.error('Error seeding certificates:', err.message);
    }
  }
};

// @desc    Generate workshop certificate by asking Name, Phone, College, Location
// @route   POST /api/certificates
export const generateCertificate = async (req, res) => {
  try {
    const { studentName, phone, college, location } = req.body;

    if (!studentName || !phone || !college || !location) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: Name, Phone Number, College, and Location.',
      });
    }

    const certificateId = `LW-WS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newCert = {
      certificateId,
      studentName: studentName.trim(),
      phone: phone.trim(),
      college: college.trim(),
      location: location.trim(),
      workshopTitle: 'Professional Skills Development Training',
      issueDate: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
    };

    if (getMongoStatus()) {
      const saved = await Certificate.create(newCert);
      return res.status(201).json({ success: true, data: saved });
    }

    memoryCertificates.unshift({ ...newCert, _id: 'cert_' + Date.now() });
    return res.status(201).json({ success: true, data: memoryCertificates[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get certificate by ID
// @route   GET /api/certificates/:id
export const getCertificate = async (req, res) => {
  try {
    const query = req.params.id.trim();

    if (getMongoStatus()) {
      const cert = await Certificate.findOne({
        $or: [
          { certificateId: query.toUpperCase() },
          { studentName: { $regex: new RegExp(`^${query}$`, 'i') } },
        ],
      });
      if (!cert) {
        return res.status(404).json({ success: false, message: 'Certificate not found' });
      }
      return res.json({ success: true, data: cert });
    }

    const cert = memoryCertificates.find(
      (c) =>
        c.certificateId.toUpperCase() === query.toUpperCase() ||
        c.studentName.toLowerCase() === query.toLowerCase()
    );

    if (!cert) {
      return res.status(404).json({ success: false, message: 'Certificate not found' });
    }

    return res.json({ success: true, data: cert });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
