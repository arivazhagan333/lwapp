import React, { useState } from 'react';
import { Sparkles, Award, Image as ImageIcon, Calendar, MapPin } from 'lucide-react';

export default function GalleryPage({ onOpenEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const galleryItems = [
    {
      title: 'Value Added Program Certificate Distribution',
      venue: "Narasu's Sarathy Institute of Technology",
      category: 'Certificates',
      date: 'Recent Event',
      desc: 'Distribution of international ISO certified credentials to over 150+ successful engineering graduates.',
    },
    {
      title: 'Placement Technical Skill Training',
      venue: 'Sona College of Technology, Salem',
      category: 'Workshops',
      date: 'Recent Event',
      desc: 'Intensive hands-on Python and Full Stack software development boot camp for pre-final year students.',
    },
    {
      title: 'Machine Learning & AI Hands-on Workshop',
      venue: 'Livewire New Bus Stand Centre',
      category: 'Seminars',
      date: 'Recent Event',
      desc: 'Weekend deep learning lab training covering neural networks, OpenCV image processing, and model deployment.',
    },
    {
      title: 'Academic MOU Signing Ceremony',
      venue: 'Dhirajlal Gandhi College of Technology',
      category: 'MOUs',
      date: 'Annual Partnership',
      desc: 'Collaborative partnership for continuous technical syllabus integration and faculty development training.',
    },
    {
      title: 'Kanavugal Meipada Special Event',
      venue: 'Livewire Salem Auditorium',
      category: 'Seminars',
      date: 'Special Event',
      desc: 'Special guest address by industry veterans on emerging job roles in Cybersecurity and Cloud Infrastructure.',
    },
    {
      title: 'ETAP Industrial Power Workshop',
      venue: 'Livewire New Bus Stand Centre',
      category: 'Workshops',
      date: 'Technical Workshop',
      desc: 'Practical electrical load flow, single-line diagram simulation, and short circuit analysis masterclass.',
    },
  ];

  const categories = ['All', 'Workshops', 'Certificates', 'MOUs', 'Seminars'];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-12 pb-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-14 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Campus Moments & Milestones</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Event Gallery & Achievements
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-xs sm:text-sm">
            Catch glimpses of our student workshops, college partnerships, hackathons, and certificate distribution ceremonies.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeFilter === cat
                  ? 'bg-livewire-red text-white shadow-md shadow-red-500/20'
                  : 'bg-white border border-gray-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between"
            >
              {/* Event Visual Placeholder */}
              <div className="h-48 bg-gradient-to-tr from-slate-900 via-slate-800 to-red-950 p-6 flex flex-col justify-between relative overflow-hidden text-white">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-livewire-red px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <div className="z-10">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.venue}</span>
                  </div>
                  <h3 className="font-black text-white text-base leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* Decorative background circle */}
                <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-livewire-red/20 blur-xl"></div>
              </div>

              {/* Body Description */}
              <div className="p-6 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-livewire-red border-t border-gray-100">
                  <span>Livewire Academic Outreach</span>
                  <Award className="w-4 h-4 text-livewire-red" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
