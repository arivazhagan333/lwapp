import React, { useState, useEffect } from 'react';
import { BookOpen, PlusCircle, Clock, CheckCircle, Sparkles } from 'lucide-react';
import { getCourses } from '../../services/api';
import API from '../../services/api';

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Software Development',
    duration: '60 Hours',
    overview: '',
  });
  const [msg, setMsg] = useState('');

  const fetchCourseList = async () => {
    setLoading(true);
    try {
      const res = await getCourses();
      setCourses(res.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourseList();
  }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/courses', formData);
      if (res.data.success) {
        setMsg('Course added successfully!');
        setCourses([res.data.data, ...courses]);
        setShowAddForm(false);
        setFormData({
          title: '',
          category: 'Software Development',
          duration: '60 Hours',
          overview: '',
        });
        setTimeout(() => setMsg(''), 2500);
      }
    } catch (err) {
      alert('Failed to add course');
    }
  };

  return (
    <div className="space-y-6">
      {msg && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{msg}</span>
        </div>
      )}

      {/* Header & Add Button */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-slate-900">Total Courses: {courses.length}</h3>
          <p className="text-xs text-slate-500">Live catalog shown on the website</p>
        </div>

        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="bg-livewire-red hover:bg-livewire-darkRed text-white px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-red-600/20"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{showAddForm ? 'Cancel' : 'Add New Course'}</span>
        </button>
      </div>

      {/* Add Course Form */}
      {showAddForm && (
        <form onSubmit={handleAddCourse} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4 animate-in fade-in">
          <h4 className="font-bold text-sm text-slate-900">Create New Course Entry</h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Course Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Flutter Mobile App Development"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none bg-white"
              >
                <option value="Software Development">Software Development</option>
                <option value="Special Programs">Special Programs</option>
                <option value="IT Infrastructure Management">IT Infrastructure Management</option>
                <option value="Industrial Automation">Industrial Automation</option>
                <option value="Electronic Design Automation">Electronic Design Automation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Duration</label>
              <input
                type="text"
                placeholder="e.g. 60 Hours"
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Course Overview & Syllabus Summary</label>
            <textarea
              rows="3"
              required
              placeholder="Detailed description of what students will learn..."
              value={formData.overview}
              onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-livewire-red hover:bg-livewire-darkRed text-white px-5 py-2.5 rounded-lg text-xs font-bold transition shadow"
          >
            Save Course
          </button>
        </form>
      )}

      {/* Courses List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course._id || course.slug} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold">
              <span className="bg-red-50 text-livewire-red px-2 py-0.5 rounded">{course.category}</span>
              <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{course.duration}</span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm leading-snug">{course.title}</h4>
            <p className="text-xs text-slate-500 line-clamp-2">{course.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
