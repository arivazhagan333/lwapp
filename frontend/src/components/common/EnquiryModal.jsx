import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { submitInquiry } from '../../services/api';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    courseInterested: defaultCourse || 'Python Programming Language',
    preferredBranch: 'New Bus Stand Branch',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    try {
      const res = await submitInquiry(formData);
      if (res.success) {
        setSuccessMsg(res.message || 'Thank you! Your inquiry has been submitted successfully.');
        setTimeout(() => {
          onClose();
          setSuccessMsg('');
        }, 2200);
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-full hover:bg-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Fast Track Career Enrollment</span>
          </div>
          <h3 className="text-xl font-black text-white">Enquire About Courses</h3>
          <p className="text-xs text-slate-300 mt-1">
            Fill in your details to get course syllabus, fee discounts & placement counseling.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {successMsg && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-sm rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g. Rahul"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g. Kumar"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="rahul@example.com"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98427 45854"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Course of Interest</label>
              <select
                name="courseInterested"
                value={formData.courseInterested}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none bg-white transition"
              >
                <option value="Python Programming Language">Python Programming</option>
                <option value="Full Stack Web Development (MERN & MEAN)">Full Stack Web Development</option>
                <option value="Data Science using Python">Data Science using Python</option>
                <option value="Machine Learning & Deep Learning">Machine Learning & DL</option>
                <option value="Digital Marketing Specialist">Digital Marketing</option>
                <option value="Java Developer Program">Java Developer</option>
                <option value="Ethical Hacking & Cybersecurity">Ethical Hacking</option>
                <option value="Test Automation with Selenium">Test Automation with Selenium</option>
                <option value="Data Analytics using Power BI">Data Analytics (Power BI)</option>
                <option value="Electrical System Design Using ETAP">Electrical Design (ETAP)</option>
                <option value="PLC & SCADA Industrial Automation">PLC & SCADA Automation</option>
                <option value="Networking Engg - Routing & Switching (CCNA)">CCNA Networking</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Branch</label>
              <select
                name="preferredBranch"
                value={formData.preferredBranch}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none bg-white transition"
              >
                <option value="New Bus Stand Branch">New Bus Stand Branch</option>
                <option value="Cherry Road Branch">Cherry Road Branch</option>
                <option value="Online Training">Online Live Interactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Your Query / Timing Preference</label>
            <textarea
              name="message"
              rows="2"
              value={formData.message}
              onChange={handleChange}
              placeholder="e.g. Please share weekend batch details and syllabus..."
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 px-4 bg-livewire-red hover:bg-livewire-darkRed text-white font-bold rounded-lg shadow-md shadow-red-500/20 transition duration-200 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
            >
              {loading ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Course Enquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
