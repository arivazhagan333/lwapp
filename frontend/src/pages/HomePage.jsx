import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  BookOpen,
  Award,
  Users,
  ChevronRight,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  TrendingUp,
  Globe2,
  Building2,
  GraduationCap,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { getCourses } from '../services/api';

export default function HomePage({ onOpenEnquiry }) {
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      badge: 'Leading Software Training Institute in Salem',
      title: 'Accelerate Your IT Career with Industry-Ready Skills',
      subtitle:
        'Master Python, Full Stack MERN, Data Science, Artificial Intelligence, Ethical Hacking & Industrial Automation with certified trainers & 100% placement support.',
      bgGradient: 'from-slate-950 via-slate-900 to-red-950',
      actionText: 'Explore Trending Courses',
      actionLink: '/courses',
    },
    {
      badge: 'Part of CADD Centre Global Network',
      title: '30+ Years of Excellence & 100k+ Students Trained',
      subtitle:
        'Authorized learning partner for engineering colleges and tech enterprises across 6 countries and 100+ centers.',
      bgGradient: 'from-slate-950 via-red-950 to-slate-900',
      actionText: 'Schedule Free Career Counseling',
      actionLink: '/contact',
    },
    {
      badge: 'ISO 29990:2010 Quality Certified',
      title: 'Comprehensive Practical Labs & Real-World Projects',
      subtitle:
        'Build live applications, gain verifiable portfolio projects, and get direct interview opportunities with leading IT employers.',
      bgGradient: 'from-slate-900 via-slate-950 to-slate-900',
      actionText: 'Enquire for Next Batch',
      actionLink: '/courses',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        const res = await getCourses({ isTrending: 'true' });
        setCourses(res.data || []);
      } catch (err) {
        console.error('Error fetching trending courses:', err);
      } finally {
        setLoadingCourses(false);
      }
    };
    fetchCoursesData();
  }, []);

  const accordionItems = [
    {
      title: 'Learn from Industry Experts',
      content:
        'With over three decades of educational legacy, Livewire stands out as Salem’s premier training hub. Our instructors bring real-world corporate development and engineering experience to every batch.',
    },
    {
      title: 'Guaranteed Career Growth & High Demand Portfolio',
      content:
        'Our product curriculum is regularly updated with current technologies in high demand in the IT job market, ensuring students and working professionals gain a competitive hiring advantage.',
    },
    {
      title: '100K+ Trained Students & Global Alumni Network',
      content:
        'Our strong alumni network spans top software firms and industrial enterprises globally, offering mentorship, referral opportunities, and career guidance to upcoming graduates.',
    },
    {
      title: 'ISO 29990:2010 Quality Certified Learning Provider',
      content:
        'Livewire Salem complies with international quality benchmarks for learning service providers, guaranteeing structured curriculum delivery and practical evaluation standards.',
    },
  ];

  const collegePartners = [
    'Sona College of Technology',
    "Narasu's Sarathy Institute of Technology",
    'Dhirajlal Gandhi College of Technology',
    'Government Engineering College',
    'Knowledge Institute of Technology (KIOT)',
    'Mahendra Engineering College',
  ];

  return (
    <div className="space-y-16">
      {/* 1. HERO CAROUSEL SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[540px] flex items-center">
        <div className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} transition-all duration-1000 opacity-95`}></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 z-10 w-full">
          <div className="max-w-3xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center gap-2 bg-livewire-red/20 border border-livewire-red/40 text-red-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-livewire-accent" />
              <span>{heroSlides[currentSlide].badge}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white text-shadow">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry && onOpenEnquiry('General Inquiry')}
                className="bg-livewire-red hover:bg-livewire-darkRed text-white px-6 py-3 rounded-xl font-bold text-sm shadow-xl shadow-red-600/30 hover:scale-105 transition duration-200 flex items-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/courses"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 px-6 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Browse All Courses</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-livewire-red' : 'w-2.5 bg-slate-600 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS (4 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1.5 transition duration-200 group">
            <div className="w-13 h-13 p-3.5 rounded-xl bg-red-50 text-livewire-red group-hover:bg-livewire-red group-hover:text-white transition">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base">Trending Courses</h4>
              <p className="text-xs text-slate-500 mt-0.5">AI, Full Stack, Python, Cyber</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1.5 transition duration-200 group">
            <div className="w-13 h-13 p-3.5 rounded-xl bg-red-50 text-livewire-red group-hover:bg-livewire-red group-hover:text-white transition">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base">Low Cost, High Value</h4>
              <p className="text-xs text-slate-500 mt-0.5">Affordable fees & deep practicals</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1.5 transition duration-200 group">
            <div className="w-13 h-13 p-3.5 rounded-xl bg-red-50 text-livewire-red group-hover:bg-livewire-red group-hover:text-white transition">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base">Certified Mentors</h4>
              <p className="text-xs text-slate-500 mt-0.5">10+ Years Industry Experience</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 hover:-translate-y-1.5 transition duration-200 group">
            <div className="w-13 h-13 p-3.5 rounded-xl bg-red-50 text-livewire-red group-hover:bg-livewire-red group-hover:text-white transition">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-slate-900 text-base">Global Certification</h4>
              <p className="text-xs text-slate-500 mt-0.5">ISO 29990 & CADD Centre</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT LIVEWIRE SALEM & ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-livewire-red uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
              <span>Why Choose LiveWire Salem?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Top Rated Software & IT Training Center in Salem
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              LiveWire Salem is a premier software training institute offering classroom and live online interactive training. We specialize in beginner-to-advanced certifications in <strong>Python, Java, Full Stack Development, Data Science, Machine Learning, Digital Marketing, PLC & SCADA, ETAP, Embedded Systems, and Ethical Hacking</strong>.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              As part of CADD Centre—Asia's largest technical training network—LiveWire is committed to empowering students and professionals with actionable, industry-grade skills and dedicated placement interview support.
            </p>

            {/* Feature bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-livewire-red shrink-0" />
                <span>100% Practical Lab Training</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-livewire-red shrink-0" />
                <span>Dedicated Placement Cell</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-livewire-red shrink-0" />
                <span>Flexible Weekend & Weekday Batches</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-livewire-red shrink-0" />
                <span>Resume & Mock Interview Coaching</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-sm text-livewire-red hover:text-livewire-darkRed hover:underline"
              >
                <span>Read More About Our Story</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-6 space-y-3">
            <div className="space-y-3">
              {accordionItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                    className="w-full p-4 text-left font-bold text-slate-800 text-sm flex items-center justify-between hover:bg-slate-50 transition"
                  >
                    <span>{item.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 ${
                        activeAccordion === idx ? 'rotate-90 text-livewire-red' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === idx && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-gray-100 pt-3 bg-slate-50/50">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRENDING COURSES SHOWCASE */}
      <section className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-livewire-red uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Job-Oriented Training</span>
              </div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Trending Software & Tech Courses
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Curated curriculum designed to match hiring requirements across leading tech companies.
              </p>
            </div>

            <Link
              to="/courses"
              className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All 36+ Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.slice(0, 8).map((c, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Category Badge */}
                  <div className="p-4 pb-2 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-livewire-red bg-red-50 px-2 py-0.5 rounded">
                      {c.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {c.duration}
                    </span>
                  </div>

                  {/* Title & Overview */}
                  <div className="p-4 pt-1 space-y-2">
                    <h3 className="font-black text-slate-900 text-base leading-snug hover:text-livewire-red transition">
                      <Link to={`/courses/${c.slug}`}>{c.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {c.overview}
                    </p>
                  </div>
                </div>

                {/* Footer action buttons */}
                <div className="p-4 pt-2 border-t border-gray-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenEnquiry && onOpenEnquiry(c.title)}
                    className="flex-1 py-2 bg-livewire-red hover:bg-livewire-darkRed text-white text-xs font-bold rounded-lg shadow-sm transition"
                  >
                    Enquire Now
                  </button>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition"
                    title="View Course Details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACHIEVEMENTS & STATS COUNTER */}
      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2 className="text-3xl font-black tracking-tight text-white">
              Our Proven Track Record
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Numbers that reflect our dedication to student success and engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl card-3d">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">100K+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">Trained Students</div>
              <div className="text-[11px] text-slate-400 mt-1">Across Salem & Global Network</div>
            </div>

            {/* Stat 2 */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl card-3d">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">36+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">Technologies</div>
              <div className="text-[11px] text-slate-400 mt-1">IT, EDA & Automation</div>
            </div>

            {/* Stat 3 */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl card-3d">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">6</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">Countries</div>
              <div className="text-[11px] text-slate-400 mt-1">International Presence</div>
            </div>

            {/* Stat 4 */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl card-3d">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">50+</div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">College MOUs</div>
              <div className="text-[11px] text-slate-400 mt-1">Value-Added Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. COLLEGE PARTNERSHIPS & ASSOCIATIONS */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-bold text-livewire-red uppercase tracking-wider">
            Academic Associations
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Trusted by Top Engineering Colleges
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Conducting faculty development programs, workshops, and student internships across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {collegePartners.map((college, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center text-center hover:border-livewire-red/50 hover:shadow-md transition"
            >
              <Building2 className="w-6 h-6 text-livewire-red mb-2 opacity-80" />
              <span className="text-[11px] font-bold text-slate-800 leading-tight">
                {college}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA ENROLMENT BANNER */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="bg-gradient-to-r from-livewire-darkRed via-livewire-red to-red-600 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Ready to Master In-Demand Tech Skills?
            </h3>
            <p className="text-xs sm:text-sm text-red-100 leading-relaxed">
              Book a 1-on-1 counseling session with our senior technical advisors at New Bus Stand or Cherry Road branch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry('General Counseling')}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-livewire-red font-black px-6 py-3.5 rounded-xl text-sm shadow-lg transition duration-200"
            >
              Enquire for Admissions
            </button>
            <a
              href="tel:+919842745854"
              className="w-full sm:w-auto bg-slate-900/80 hover:bg-slate-900 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>+91 98427 45854</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
