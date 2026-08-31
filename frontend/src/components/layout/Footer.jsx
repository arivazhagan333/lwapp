import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-livewire-red">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Cards: Contact Info & Branches */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-slate-800">
          {/* Branch 1 */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-red-950/60 text-livewire-red rounded-lg shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Salem Branch 1</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                2nd Floor, Dwaraka Center, New Bus Stand Rd, beside KVB ATM, Meyyanur, Salem, Tamil Nadu 636009
              </p>
            </div>
          </div>

          {/* Branch 2 */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-red-950/60 text-livewire-red rounded-lg shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Salem Branch 2</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                272-C Cherry Road, Mullvadygate Bus Stop, Near SKB Book Shop, Salem, Tamil Nadu 636001
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-red-950/60 text-livewire-red rounded-lg shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Call Us Directly</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                <a href="tel:+919842745854" className="hover:text-white transition font-medium block">+91 98427 45854</a>
                <a href="tel:+919788581828" className="hover:text-white transition font-medium block">+91 97885 81828</a>
                <span className="text-[11px] text-slate-500">Toll Free: 1800-425-0220</span>
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-slate-900/90 p-5 rounded-xl border border-slate-800 flex items-start gap-4">
            <div className="p-3 bg-red-950/60 text-livewire-red rounded-lg shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Official Email</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                <a href="mailto:info@livewiresalem.com" className="hover:text-white transition block">
                  info@livewiresalem.com
                </a>
                <span className="text-[11px] text-slate-500">www.livewiresalem.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-slate-800 text-sm">
          {/* About Widget */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-livewire-red flex items-center justify-center text-white font-black text-xl">
                LW
              </div>
              <span className="text-xl font-black text-white tracking-tight">LIVEWIRE SALEM</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              LIVEWIRE promotes niche training in IT, Electronics & Electrical technologies, creating skilled experts for emerging industries. As a specialized division of CADD Centre (Asia’s largest CAD/CAM/CAE training network), LIVEWIRE has trained over 100,000+ engineers across 100 locations in India and 8 international centers.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 bg-slate-900 py-2 px-3 rounded-lg border border-slate-800 inline-flex">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>ISO 29990:2010 Quality Certified Learning Center</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-livewire-red flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-livewire-red" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-livewire-red flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-livewire-red" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-livewire-red flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-livewire-red" />
                  <span>Trending Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-livewire-red flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-livewire-red" />
                  <span>Gallery & Events</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-livewire-red flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-livewire-red" />
                  <span>Contact & Locations</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ArrowRight className="w-3 h-3 text-amber-400" />
                  <span>Admin Lead Manager</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Courses */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="text-white font-bold text-sm uppercase tracking-wider border-b border-slate-800 pb-2">
              Popular Programs
            </h5>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <Link to="/courses/python-programming" className="hover:text-white transition">&bull; Python Developer</Link>
              <Link to="/courses/full-stack-development" className="hover:text-white transition">&bull; Full Stack MERN</Link>
              <Link to="/courses/data-science-python" className="hover:text-white transition">&bull; Data Science AI</Link>
              <Link to="/courses/ethical-hacking" className="hover:text-white transition">&bull; Ethical Hacking</Link>
              <Link to="/courses/power-bi-analytics" className="hover:text-white transition">&bull; Power BI Analytics</Link>
              <Link to="/courses/etap-electrical-design" className="hover:text-white transition">&bull; ETAP Electrical</Link>
              <Link to="/courses/plc-scada-automation" className="hover:text-white transition">&bull; PLC & SCADA</Link>
              <Link to="/courses/networking-routing-switching" className="hover:text-white transition">&bull; CCNA Routing</Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Livewire Salem. All rights reserved. MERN Application Replica.</p>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-slate-400">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-slate-400">Terms of Training</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
