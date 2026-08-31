import React from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  ShieldCheck,
  CheckCircle,
  Users,
  Target,
  Globe,
  Building,
  MapPin,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 pb-16">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Excellence in Technology Education</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            About Livewire Salem
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Empowering students and engineering professionals with industry-recognized certifications, hands-on software labs, and corporate career pathways.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-livewire-red uppercase tracking-wider">
              Our Heritage & Pedigree
            </div>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              A Flagship Brand of <span className="text-livewire-red">CADD Centre</span> Network
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              LIVEWIRE is a specialized division of CADD Centre Training Services, which is Asia's largest CAD/CAM/CAE training institute network. For more than 30 years, CADD Centre has transformed technical engineering education across the globe.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              In Salem, Livewire operates state-of-the-art training centers at <strong>New Bus Stand (Dwaraka Center)</strong> and <strong>Cherry Road</strong>. We bridge the gap between academic theory and enterprise expectations by delivering hands-on expertise in next-generation technologies like Artificial Intelligence, Full Stack Web Development, Python, Data Science, Ethical Hacking, PLC & SCADA, ETAP, and Embedded Systems.
            </p>

            <div className="p-4 bg-red-50 border border-red-100 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-livewire-red font-bold text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>ISO 29990:2010 Quality Benchmark</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Livewire Salem is certified under ISO 29990:2010 for learning service providers, guaranteeing structured curriculum delivery, modern laboratory infrastructure, and validated competency testing.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl space-y-2 border border-slate-800">
              <div className="text-3xl font-black text-amber-400">100+</div>
              <div className="text-sm font-bold">Centers Across India</div>
              <p className="text-xs text-slate-400">Extensive reach connecting students to nationwide tech job openings.</p>
            </div>

            <div className="bg-livewire-red text-white p-6 rounded-2xl shadow-xl space-y-2">
              <div className="text-3xl font-black text-white">8</div>
              <div className="text-sm font-bold">International Locations</div>
              <p className="text-xs text-red-100">Global footprint ensuring internationally relevant curriculum standards.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 space-y-2">
              <div className="text-3xl font-black text-slate-900">100K+</div>
              <div className="text-sm font-bold text-slate-800">Alumni Network</div>
              <p className="text-xs text-slate-500">Graduates working in Fortune 500 tech companies and research labs.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 space-y-2">
              <div className="text-3xl font-black text-livewire-red">36+</div>
              <div className="text-sm font-bold text-slate-800">Specialized Courses</div>
              <p className="text-xs text-slate-500">Covering Software Development, IT Infra, EDA & Industrial Automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-livewire-red uppercase tracking-wider">
              How We Teach
            </div>
            <h2 className="text-3xl font-black text-slate-900">
              Our 4-Pillar Learning Methodology
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Structured to take complete beginners to confident, job-ready professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-livewire-red flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base">Concept Foundation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thorough breakdown of core fundamentals with illustrated architecture diagrams and clean coding standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-livewire-red flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base">Hands-on Lab Practicals</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Daily instructor-guided coding exercises, test setups, and debugging on modern development systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-livewire-red flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base">Capstone Live Project</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Designing and deploying an end-to-end industry case study project for your professional GitHub portfolio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-livewire-red flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-slate-900 text-base">Placement & Interview Prep</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Mock technical interviews, aptitude assessments, resume optimization, and direct placement drives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Salem Centers */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-bold text-livewire-red uppercase tracking-wider">
            Convenient Locations
          </div>
          <h2 className="text-3xl font-black text-slate-900">
            Our Two Dedicated Training Centers in Salem
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Equipped with modern computer labs, high-speed connectivity, and dedicated trainer cabins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-4">
            <div className="flex items-center gap-3 text-livewire-red font-black text-lg">
              <MapPin className="w-6 h-6 shrink-0" />
              <span>Center 1: New Bus Stand Branch</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              2nd Floor, Dwaraka Center, New Bus Stand Road, beside KVB ATM, Meyyanur, Salem, Tamil Nadu 636009
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>&bull; <strong>Call:</strong> +91 98427 45854</div>
              <div>&bull; <strong>Timings:</strong> 9:00 AM - 7:30 PM (Mon - Sat)</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md space-y-4">
            <div className="flex items-center gap-3 text-livewire-red font-black text-lg">
              <MapPin className="w-6 h-6 shrink-0" />
              <span>Center 2: Cherry Road Branch</span>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              272-C Cherry Road, Mullvadygate Bus Stop, Near to SKB Book Shop, Salem, Tamil Nadu 636001
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>&bull; <strong>Call:</strong> +91 97885 81828</div>
              <div>&bull; <strong>Timings:</strong> 9:00 AM - 7:30 PM (Mon - Sat)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="bg-slate-900 text-white rounded-3xl p-8 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-black">
            Join the Next Batch at Livewire Salem
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Take the first step towards a rewarding career in software engineering, cloud computing, cyber defense, or automation.
          </p>
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('About Page Admission Inquiry')}
            className="bg-livewire-red hover:bg-livewire-darkRed text-white px-8 py-3 rounded-xl font-bold text-sm shadow-xl shadow-red-600/30 transition"
          >
            Apply for Admission Counseling
          </button>
        </div>
      </section>
    </div>
  );
}
