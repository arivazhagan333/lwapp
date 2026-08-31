import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Building,
} from 'lucide-react';
import { submitInquiry } from '../services/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    courseInterested: 'General Inquiry',
    preferredBranch: 'New Bus Stand Branch',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await submitInquiry(formData);
      if (res.success) {
        setSuccessMsg(res.message || 'Thank you for reaching out! We will contact you shortly.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          courseInterested: 'General Inquiry',
          preferredBranch: 'New Bus Stand Branch',
          message: '',
        });
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || 'Failed to submit feedback. Please try again.');
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact Livewire Salem
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Visit our training centers in Salem or send us an inquiry for batch schedules, course syllabus, and admission discounts.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Branch 1 Card & Map */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-livewire-red font-black text-lg">
                <Building className="w-6 h-6 shrink-0" />
                <span>Salem Branch 1 (New Bus Stand)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-livewire-red shrink-0 mt-0.5" />
                <span>
                  2nd Floor Dwaraka Center, New Bus Stand Rd, beside KVB ATM, Meyyanur, Salem, Tamil Nadu 636009
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Phone className="w-4 h-4 text-livewire-red shrink-0" />
                <span>+91 98427 45854 / 1800-425-0220</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Mail className="w-4 h-4 text-livewire-red shrink-0" />
                <span>info@livewiresalem.com</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 h-52">
              <iframe
                title="Livewire Salem New Bus Stand"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3824619331313!2d78.13135751376858!3d11.667283959378716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf06a7000b721%3A0x7b6b408b33e39f32!2sLivewire%20Salem!5e0!3m2!1sen!2sin!4v1592365885267!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Branch 2 Card & Map */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-livewire-red font-black text-lg">
                <Building className="w-6 h-6 shrink-0" />
                <span>Salem Branch 2 (Cherry Road)</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-livewire-red shrink-0 mt-0.5" />
                <span>
                  272-c Cherry Road, Mullvadygate Bus Stop, Near to SKB Book Shop, Salem, Tamil Nadu 636001
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Phone className="w-4 h-4 text-livewire-red shrink-0" />
                <span>+91 97885 81828</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-600">
                <Mail className="w-4 h-4 text-livewire-red shrink-0" />
                <span>info@livewiresalem.com</span>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-xl overflow-hidden border border-gray-200 h-52">
              <iframe
                title="Livewire Salem Cherry Road"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.492066224933!2d78.15630931429344!3d11.659498245461746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1cc9b770e63%3A0xb728d8833474a89!2sLivewire%20%7C%20IT%20Training%20Institute%20In%20Salem%20%7C%20Python%20%7C%20Java%20%7C%20Machine%20Learning%20%7C%20Ethical%20Hacking!5e0!3m2!1sen!2sin!4v1596527238598!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact / Leave Comment Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 sm:p-10 max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Leave a Message or Request Callback
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Have questions regarding course fees, demo classes, or placement assistance? Send us your message.
            </p>
          </div>

          {successMsg && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm rounded-xl flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm rounded-xl flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  placeholder="e.g. Vignesh"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="e.g. Selvam"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  placeholder="vignesh@example.com"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
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
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Course of Interest
                </label>
                <select
                  name="courseInterested"
                  value={formData.courseInterested}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none bg-white"
                >
                  <option value="Python Programming Language">Python Programming Language</option>
                  <option value="Full Stack Web Development (MERN & MEAN)">Full Stack Development</option>
                  <option value="Data Science using Python">Data Science using Python</option>
                  <option value="Machine Learning & Deep Learning">Machine Learning & AI</option>
                  <option value="Ethical Hacking & Cybersecurity">Ethical Hacking</option>
                  <option value="Java Developer Program">Java Developer</option>
                  <option value="Digital Marketing Specialist">Digital Marketing</option>
                  <option value="Test Automation with Selenium">Test Automation with Selenium</option>
                  <option value="Electrical System Design Using ETAP">Electrical Design (ETAP)</option>
                  <option value="PLC & SCADA Industrial Automation">PLC & SCADA</option>
                  <option value="General Inquiry">General / Other Programs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Salem Center
                </label>
                <select
                  name="preferredBranch"
                  value={formData.preferredBranch}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none bg-white"
                >
                  <option value="New Bus Stand Branch">New Bus Stand Branch (Dwaraka Center)</option>
                  <option value="Cherry Road Branch">Cherry Road Branch (Mullvadygate)</option>
                  <option value="Online Training">Live Online Interactive</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Weekend Batch Schedule & Fees"
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Message / Specific Questions
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your questions or timing preferences here..."
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3 bg-livewire-red hover:bg-livewire-darkRed text-white font-bold rounded-xl shadow-lg shadow-red-500/20 transition flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
