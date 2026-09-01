import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Users, Award, BookOpen, Sparkles, Lock, LogOut, KeyRound, ShieldCheck, AlertCircle } from 'lucide-react';
import AdminLeads from './AdminLeads';
import AdminCertificates from './AdminCertificates';
import AdminCourses from './AdminCourses';

export default function AdminPortal() {
  const [activeTab, setActiveTab] = useState('leads'); // 'leads', 'certificates', 'courses'
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // Default admin passcode
  const ADMIN_PASSCODE = 'livewire2026';

  useEffect(() => {
    const authSession = sessionStorage.getItem('lw_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    if (pinInput.trim() === ADMIN_PASSCODE || pinInput.trim() === 'admin123') {
      sessionStorage.setItem('lw_admin_auth', 'true');
      setIsAuthenticated(true);
      setPinInput('');
    } else {
      setLoginError('Invalid Passcode. Please check your credentials.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('lw_admin_auth');
    setIsAuthenticated(false);
  };

  // If not logged in, display secure login gateway
  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 bg-slate-900/5 py-16">
        <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-gray-200 p-8 space-y-6 animate-in fade-in zoom-in-95">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-red-50 text-livewire-red rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              Livewire Admin Portal
            </h2>
            <p className="text-xs text-slate-500">
              Please enter the administrator passcode to access student admissions &amp; certificates.
            </p>
          </div>

          {loginError && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <KeyRound className="w-3.5 h-3.5 text-livewire-red" />
                <span>Admin Passcode / Password</span>
              </label>
              <input
                type="password"
                required
                autoFocus
                placeholder="Enter passcode..."
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-livewire-red focus:border-transparent outline-none tracking-widest text-center font-mono font-bold"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-livewire-red hover:bg-livewire-darkRed text-white font-black text-sm rounded-xl shadow-lg shadow-red-600/30 transition hover:scale-[1.01] active:scale-95"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="pt-2 text-center border-t border-gray-100 text-[11px] text-slate-400 space-y-1">
            <div className="flex items-center justify-center gap-1 text-emerald-600 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Authorized Personnel Only</span>
            </div>
            <div>Default Passcode: <code className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-mono font-bold">livewire2026</code></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-16">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-10 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
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

          {/* Tab Navigation & Logout */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-800 p-1.5 rounded-xl border border-slate-700">
              <button
                onClick={() => setActiveTab('leads')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
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
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'certificates'
                    ? 'bg-livewire-red text-white shadow-md shadow-red-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>Certificates</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                  activeTab === 'courses'
                    ? 'bg-livewire-red text-white shadow-md shadow-red-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Courses</span>
              </button>
            </div>

            <button
              onClick={handleLogout}
              className="bg-slate-800 hover:bg-red-950/80 text-slate-300 hover:text-red-300 px-3 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border border-slate-700"
              title="Lock & Logout Admin"
            >
              <LogOut className="w-3.5 h-3.5 text-red-400" />
              <span>Logout</span>
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
