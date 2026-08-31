import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Clock,
  Briefcase,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle,
} from 'lucide-react';
import { getCourses } from '../services/api';

export default function CoursesPage({ onOpenEnquiry }) {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const categories = [
    'All',
    'Software Development',
    'Special Programs',
    'IT Infrastructure Management',
    'Industrial Automation',
  ];

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await getCourses({
          category: selectedCategory !== 'All' ? selectedCategory : undefined,
          search: searchTerm || undefined,
        });
        setCourses(res.data || []);
      } catch (err) {
        console.error('Failed to load courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [selectedCategory, searchTerm]);

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>36+ Industry-Standard Curriculum</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Courses Offered at Livewire Salem
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Learn from certified industry mentors. Master in-demand programming languages, cybersecurity, data science, and industrial automation tools.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search by course name (e.g. Python, Full Stack, Java, ETAP)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-900/90 border border-slate-700 text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-livewire-red transition placeholder-slate-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1 mr-2" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat
                  ? 'bg-livewire-red text-white shadow-md shadow-red-500/20'
                  : 'bg-white border border-gray-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses List */}
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-sm">
            Loading courses catalog...
          </div>
        ) : courses.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-2xl border border-gray-200 p-8 space-y-3">
            <p className="text-slate-600 font-bold text-base">No courses found matching "{searchTerm}"</p>
            <p className="text-slate-400 text-xs">Try selecting a different category or clearing search terms.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-livewire-red text-white px-4 py-2 rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {courses.map((course) => (
              <div
                key={course._id || course.slug}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-livewire-red bg-red-50 px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{course.duration}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 hover:text-livewire-red transition leading-snug">
                      <Link to={`/courses/${course.slug}`}>{course.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                      {course.overview}
                    </p>
                  </div>

                  {/* Highlights/Features */}
                  {course.features && course.features.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-gray-100">
                      {course.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Career Roles */}
                  {course.careerRoles && course.careerRoles.length > 0 && (
                    <div className="bg-slate-50 p-2.5 rounded-lg text-[11px] text-slate-600 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-livewire-red shrink-0" />
                      <span className="truncate">
                        <strong>Roles:</strong> {course.careerRoles.join(', ')}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions Bottom Bar */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(course.title)}
                    className="flex-1 py-2.5 bg-livewire-red hover:bg-livewire-darkRed text-white text-xs font-bold rounded-lg shadow-sm transition"
                  >
                    Enquire Syllabus & Fees
                  </button>
                  <Link
                    to={`/courses/${course.slug}`}
                    className="px-3 py-2.5 bg-white border border-gray-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold transition flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
