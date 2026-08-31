import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Clock,
  Briefcase,
  CheckCircle,
  BookOpen,
  Award,
  ChevronRight,
  Send,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { getCourseBySlug, submitInquiry } from '../services/api';

export default function CourseDetailPage({ onOpenEnquiry }) {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Sidebar Form State
  const [sidebarForm, setSidebarForm] = useState({
    firstName: '',
    email: '',
    phone: '',
    preferredBranch: 'New Bus Stand Branch',
    message: '',
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const fetchDetail = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await getCourseBySlug(slug);
        if (res.success && res.data) {
          setCourse(res.data);
        } else {
          setError('Course not found.');
        }
      } catch (err) {
        setError('Failed to load course details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [slug]);

  const handleSidebarSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormSuccess('');
    setFormError('');

    try {
      const res = await submitInquiry({
        ...sidebarForm,
        courseInterested: course?.title || slug,
        subject: `Enquiry from Course Page: ${course?.title}`,
      });
      if (res.success) {
        setFormSuccess('Enquiry sent! Our counselor will call you shortly.');
        setSidebarForm({
          firstName: '',
          email: '',
          phone: '',
          preferredBranch: 'New Bus Stand Branch',
          message: '',
        });
      }
    } catch (err) {
      setFormError(err.response?.data?.message || 'Failed to submit enquiry.');
    } finally {
      setFormSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-500 text-sm">
        Loading course curriculum...
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">{error || 'Course not found'}</h2>
        <p className="text-sm text-slate-500">
          The requested course might have moved or is unavailable.
        </p>
        <Link
          to="/courses"
          className="inline-block bg-livewire-red text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow"
        >
          View All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/courses" className="hover:text-white">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-livewire-red font-medium">{course.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>{course.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white max-w-3xl">
            {course.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {course.overview}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs">
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Clock className="w-4 h-4 text-livewire-red" />
              <span>Duration: <strong>{course.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certified by: <strong>Livewire & CADD Centre</strong></span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Placement: <strong>100% Interview Support</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Layout */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Syllabus & Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Key Highlights */}
            {course.features && course.features.length > 0 && (
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-livewire-red" />
                  <span>Key Course Highlights</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-livewire-red shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curriculum Breakdown */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-livewire-red" />
                  <span>Detailed Syllabus & Modules</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Structured learning roadmap crafted by industry practitioners.
                </p>
              </div>

              {course.curriculum && course.curriculum.length > 0 ? (
                <div className="space-y-4">
                  {course.curriculum.map((mod, idx) => (
                    <div
                      key={idx}
                      className="border border-gray-200 rounded-xl overflow-hidden shadow-xs"
                    >
                      <div className="bg-slate-50 p-4 border-b border-gray-200 flex items-center justify-between">
                        <h4 className="font-bold text-sm text-slate-800">
                          Module {idx + 1}: {mod.moduleTitle}
                        </h4>
                        <span className="text-[11px] font-semibold text-livewire-red bg-red-50 px-2 py-0.5 rounded">
                          Practical & Theory
                        </span>
                      </div>
                      <div className="p-4 bg-white">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                          {mod.topics.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-livewire-red shrink-0"></span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600">
                  Comprehensive syllabus includes core fundamentals, hands-on lab exercises, and capstone project deployment.
                </div>
              )}
            </div>

            {/* Career Opportunities */}
            {course.careerRoles && course.careerRoles.length > 0 && (
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-amber-400" />
                  <span>Target Career Roles & Job Profiles</span>
                </h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {course.careerRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="bg-slate-800 border border-slate-700 text-xs px-3 py-1 rounded-lg text-slate-200 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Quick Application Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl border-2 border-livewire-red/20 shadow-xl space-y-4 sticky top-20">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-livewire-red bg-red-50 px-2 py-0.5 rounded">
                  Fast Enrollment
                </span>
                <h3 className="text-xl font-black text-slate-900">Enquire for This Course</h3>
                <p className="text-xs text-slate-500">
                  Get full syllabus PDF, fee breakdown, and schedule your free demo class.
                </p>
              </div>

              {formSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{formSuccess}</span>
                </div>
              )}

              {formError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSidebarSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={sidebarForm.firstName}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, firstName: e.target.value })}
                    placeholder="e.g. Ananya"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={sidebarForm.email}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, email: e.target.value })}
                    placeholder="ananya@example.com"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={sidebarForm.phone}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
                    placeholder="+91 98427 45854"
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Salem Branch Preference</label>
                  <select
                    value={sidebarForm.preferredBranch}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, preferredBranch: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none bg-white"
                  >
                    <option value="New Bus Stand Branch">New Bus Stand (Dwaraka Center)</option>
                    <option value="Cherry Road Branch">Cherry Road (Mullvadygate)</option>
                    <option value="Online Training">Live Online Interactive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Batch / Time Preference</label>
                  <textarea
                    rows="2"
                    value={sidebarForm.message}
                    onChange={(e) => setSidebarForm({ ...sidebarForm, message: e.target.value })}
                    placeholder="e.g. Weekend batch timings..."
                    className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-2.5 bg-livewire-red hover:bg-livewire-darkRed text-white font-bold text-xs rounded-lg shadow-md shadow-red-500/20 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {formSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Request Syllabus & Fee Details</span>
                    </>
                  )}
                </button>
              </form>

              <div className="pt-3 border-t border-gray-100 text-center space-y-1 text-[11px] text-slate-500">
                <div>Need instant phone assistance?</div>
                <a
                  href="tel:+919842745854"
                  className="text-livewire-red font-bold hover:underline flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call +91 98427 45854</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
