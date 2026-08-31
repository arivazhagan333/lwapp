import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HeaderTop from './components/layout/HeaderTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import EnquiryModal from './components/common/EnquiryModal';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import AdminPortal from './pages/admin/AdminPortal';
import CertificateDownloadPage from './pages/CertificateDownloadPage';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState('');

  const handleOpenEnquiry = (courseName = '') => {
    setSelectedCourseForModal(courseName);
    setIsEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryModalOpen(false);
    setSelectedCourseForModal('');
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
        {/* Header Section */}
        <HeaderTop />
        <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Course Enquiry')} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/courses" element={<CoursesPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route
              path="/courses/:slug"
              element={<CourseDetailPage onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route path="/gallery" element={<GalleryPage onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/download" element={<CertificateDownloadPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPortal />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Quick Action Widgets */}
        <FloatingWhatsApp />
        <EnquiryModal
          isOpen={isEnquiryModalOpen}
          onClose={handleCloseEnquiry}
          defaultCourse={selectedCourseForModal}
        />
      </div>
    </Router>
  );
}
