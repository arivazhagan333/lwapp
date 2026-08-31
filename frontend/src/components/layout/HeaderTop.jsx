import React from 'react';
import { Phone, Mail, Clock, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderTop() {
  return (
    <div>
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contact info left */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <div className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-livewire-red" />
              <span>Toll Free: <strong className="text-white">1800-425-0220</strong></span>
            </div>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="flex items-center gap-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-livewire-red" />
              <span>Direct: <a href="tel:+919842745854" className="hover:underline text-white">+91 98427 45854</a> / <a href="tel:+919788581828" className="hover:underline text-white">+91 97885 81828</a></span>
            </div>
          </div>

          {/* Social / Cert right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-amber-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>ISO 29990:2010 Certified Center</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/916374817034?text=Hello%20Livewire%20Salem,%20I%20am%20interested%20in%20courses"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-0.5 rounded text-[11px] font-semibold transition"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Bar */}
      <div className="bg-white py-3.5 px-4 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-livewire-red to-red-600 flex items-center justify-center shadow-md shadow-red-500/20 text-white font-black text-2xl tracking-tighter">
              LW
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                LIVE<span className="text-livewire-red">WIRE</span>
              </div>
              <div className="text-[10px] font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                Salem &bull; Skill Development Hub
              </div>
            </div>
          </Link>

          {/* Middle Info / Email */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-livewire-red">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Mail Us</div>
                <a href="mailto:info@livewiresalem.com" className="text-sm font-semibold text-slate-800 hover:text-livewire-red transition">
                  info@livewiresalem.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center text-livewire-red">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Training Hours</div>
                <div className="text-sm font-semibold text-slate-800">
                  Mon - Sat: 9:00 AM - 7:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* Badge & Quick CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-700 font-medium">
              <Award className="w-4 h-4 text-livewire-red" />
              <span>A Part of <strong className="text-slate-900">CADD Centre</strong></span>
            </div>
            <Link
              to="/contact"
              className="bg-livewire-red hover:bg-livewire-darkRed text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-red-500/20 transition duration-200 flex items-center gap-1.5"
            >
              <span>Get Free Counseling</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
