import React, { useState } from 'react';
import {
  Award,
  Download,
  ShieldCheck,
  Sparkles,
  CheckCircle,
  AlertCircle,
  User,
  Phone,
  Building,
  MapPin,
} from 'lucide-react';
import { generateCertificate } from '../services/api';
import CertificatePreview from '../components/common/CertificatePreview';

export default function CertificateDownloadPage() {
  const [formData, setFormData] = useState({
    studentName: '',
    phone: '',
    college: '',
    location: '',
  });

  const [loading, setLoading] = useState(false);
  const [certificate, setCertificate] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!formData.studentName.trim()) {
      setErrorMsg('Please enter your full name');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please enter your phone number');
      return;
    }
    if (!formData.college.trim()) {
      setErrorMsg('Please enter your college name');
      return;
    }
    if (!formData.location.trim()) {
      setErrorMsg('Please enter your location');
      return;
    }

    setLoading(true);
    try {
      const res = await generateCertificate(formData);
      if (res.success && res.data) {
        setCertificate(res.data);
        setSuccessMsg(`Certificate successfully generated for ${res.data.studentName}!`);
        // Smooth scroll to certificate preview
        setTimeout(() => {
          window.scrollTo({ top: 500, behavior: 'smooth' });
        }, 150);
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to generate certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Livewire Salem Credentials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Download Workshop Certificate
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Enter your name, phone number, college, and location to instantly download your official Livewire Certificate of Participation.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-black text-slate-900">
              Enter Participant Details
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill in your details below to get your personalized certificate.
            </p>
          </div>

          {errorMsg && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-livewire-red" />
                  <span>Participant Full Name *</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="e.g. Rahul .S"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-livewire-red" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 98427 45854"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* College / Institution */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-livewire-red" />
                  <span>College / Institution *</span>
                </label>
                <input
                  type="text"
                  name="college"
                  required
                  placeholder="e.g. Sona College of Technology"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-livewire-red" />
                  <span>Location / City *</span>
                </label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g. Salem"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-livewire-red hover:bg-livewire-darkRed text-white font-black text-sm rounded-xl shadow-xl shadow-red-600/30 hover:scale-[1.01] active:scale-95 transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Generating Certificate...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Generate &amp; Download Certificate</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Certificate Display Area */}
        {certificate && (
          <div className="space-y-6 pt-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-black text-slate-900">
                Your Livewire Certificate of Participation
              </h3>
              <p className="text-xs text-slate-500">
                Click below to download your high-resolution certificate image.
              </p>
            </div>

            <CertificatePreview certificate={certificate} />
          </div>
        )}
      </div>
    </div>
  );
}
