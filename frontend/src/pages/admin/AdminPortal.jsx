import React, { useState } from 'react';
import { LayoutDashboard, Users, Award, BookOpen, Sparkles } from 'lucide-react';
import AdminLeads from './AdminLeads';
import AdminCertificates from './AdminCertificates';
import AdminCourses from './AdminCourses';

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'certificates', 'courses'

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Livewire Salem Administrator Portal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white">
              Admin &amp; Admissions Management Hub
            </h1>
            <p className="text-xs text-slate-400">
              Manage student lead inquiries, verify workshop certificates, and update courses catalog.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'leads'
                  ? 'bg-livewire-red text-white shadow-md shadow-red-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Student Leads</span>
            </button>

            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'certificates'
                  ? 'bg-livewire-red text-white shadow-md shadow-red-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Workshop Certificates</span>
            </button>

            <button
              onClick={() => setActiveTab('courses')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                activeTab === 'courses'
                  ? 'bg-livewire-red text-white shadow-md shadow-red-600/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Courses Catalog</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Workspace */}
      <div className="max-w-7xl mx-auto px-4">
        {activeTab === 'leads' && <AdminLeads />}
        {activeTab === 'certificates' && <AdminCertificates />}
        {activeTab === 'courses' && <AdminCourses />}
      </div>
    </div>
  );
}
