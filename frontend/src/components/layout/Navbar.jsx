import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, BookOpen, Sparkles, UserCheck, PhoneCall, LayoutDashboard, Award } from 'lucide-react';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const courseCategories = [
    {
      category: 'Software Development',
      items: [
        { name: 'Python Programming', slug: 'python-programming' },
        { name: 'Full Stack Web Dev (MERN/MEAN)', slug: 'full-stack-development' },
        { name: 'Java Developer', slug: 'java-developer' },
        { name: 'C / C++ Programming', slug: 'python-programming' },
        { name: 'Django Framework', slug: 'python-programming' },
      ],
    },
    {
      category: 'Special & Premier Programs',
      items: [
        { name: 'Data Science with Python', slug: 'data-science-python' },
        { name: 'Machine Learning & DL', slug: 'machine-learning' },
        { name: 'Power BI Analytics', slug: 'power-bi-analytics' },
        { name: 'Digital Marketing', slug: 'digital-marketing' },
        { name: 'Selenium Test Automation', slug: 'test-automation-selenium' },
      ],
    },
    {
      category: 'IT Infrastructure & Cyber',
      items: [
        { name: 'Ethical Hacking & Security', slug: 'ethical-hacking' },
        { name: 'CCNA Routing & Switching', slug: 'networking-routing-switching' },
        { name: 'Linux Server Administration', slug: 'ethical-hacking' },
        { name: 'Cloud Computing', slug: 'full-stack-development' },
      ],
    },
    {
      category: 'Automation & EDA',
      items: [
        { name: 'Electrical System Design (ETAP)', slug: 'etap-electrical-design' },
        { name: 'PLC & SCADA Automation', slug: 'plc-scada-automation' },
        { name: 'AutoCAD Electrical', slug: 'etap-electrical-design' },
        { name: 'Embedded Systems & Microcontroller', slug: 'plc-scada-automation' },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-slate-900 text-white shadow-lg border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3.5 py-2 rounded-md text-sm font-semibold transition ${
                isActive('/') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              onMouseLeave={() => setCoursesDropdownOpen(false)}
            >
              <Link
                to="/courses"
                className={`px-3.5 py-2 rounded-md text-sm font-semibold flex items-center gap-1.5 transition ${
                  location.pathname.startsWith('/courses')
                    ? 'bg-livewire-red text-white'
                    : 'text-slate-200 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>Courses Offered</span>
                <ChevronDown className="w-4 h-4 opacity-75 group-hover:rotate-180 transition duration-200" />
              </Link>

              {/* Mega Menu Dropdown Panel */}
              <div className="absolute left-0 top-full pt-2 w-[720px] hidden group-hover:block transition-all duration-200 z-50">
                <div className="bg-white text-slate-800 rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-6">
                  {courseCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-livewire-red border-b border-red-100 pb-1 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{cat.category}</span>
                      </div>
                      <ul className="space-y-1.5 text-sm">
                        {cat.items.map((item, iIdx) => (
                          <li key={iIdx}>
                            <Link
                              to={`/courses/${item.slug}`}
                              className="text-slate-600 hover:text-livewire-red hover:translate-x-1 transition duration-150 block py-0.5"
                            >
                              &bull; {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Over 36+ Industry-aligned courses with 100% placement support</span>
                    <Link to="/courses" className="font-bold text-livewire-red hover:underline">
                      View All Courses &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`px-3.5 py-2 rounded-md text-sm font-semibold transition ${
                isActive('/about') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              About Us
            </Link>

            <Link
              to="/gallery"
              className={`px-3.5 py-2 rounded-md text-sm font-semibold transition ${
                isActive('/gallery') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              Gallery &amp; Events
            </Link>

            {/* Download Certificate Menu Item */}
            <Link
              to="/download"
              className={`px-3.5 py-2 rounded-md text-sm font-semibold flex items-center gap-1.5 transition ${
                isActive('/download') ? 'bg-livewire-red text-white' : 'text-amber-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4 text-amber-400" />
              <span>Download Certificate</span>
            </Link>

            <Link
              to="/contact"
              className={`px-3.5 py-2 rounded-md text-sm font-semibold transition ${
                isActive('/contact') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:text-white hover:bg-slate-800'
              }`}
            >
              Contact Us
            </Link>

            <Link
              to="/admin"
              className={`px-3 py-1.5 ml-2 rounded-md text-xs font-semibold flex items-center gap-1.5 border border-slate-700 transition ${
                isActive('/admin') ? 'bg-slate-800 text-amber-400 border-amber-400' : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-amber-400" />
              <span>Admin Portal</span>
            </Link>
          </div>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-sm shadow-md hover:shadow-lg transition duration-200 flex items-center gap-1.5"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Enquire Course</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              to="/download"
              className="bg-amber-500 text-slate-950 text-xs font-bold px-2.5 py-1.5 rounded flex items-center gap-1"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certificate</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-4 pt-3 pb-6 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Home
          </Link>
          <Link
            to="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/courses') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Courses Catalog
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/about') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            About Us
          </Link>
          <Link
            to="/gallery"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/gallery') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Gallery &amp; Events
          </Link>
          <Link
            to="/download"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/download') ? 'bg-livewire-red text-white' : 'text-amber-300 hover:bg-slate-800'
            }`}
          >
            Download Workshop Certificate
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded-md text-base font-semibold ${
              isActive('/contact') ? 'bg-livewire-red text-white' : 'text-slate-200 hover:bg-slate-800'
            }`}
          >
            Contact Us
          </Link>
          <Link
            to="/admin"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-semibold text-amber-400 hover:bg-slate-800"
          >
            Admin Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
}
