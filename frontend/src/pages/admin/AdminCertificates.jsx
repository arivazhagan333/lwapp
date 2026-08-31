import React, { useState, useEffect } from 'react';
import { Award, Search, Phone, Building, MapPin, Download, RefreshCw, CheckCircle2 } from 'lucide-react';
import API from '../../services/api';

export default function AdminCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      // In a full system, GET /api/certificates or query
      const res = await API.get('/certificates/LW-WS-2026-001');
      if (res.data.data) {
        setCertificates([
          res.data.data,
          {
            _id: 'cert_102',
            certificateId: 'LW-WS-2026-9728',
            studentName: 'Rahul .S',
            phone: '98427 45854',
            college: 'Sona College of Technology',
            location: 'Salem',
            workshopTitle: 'Professional Skills Development Training',
            issueDate: '31 Aug 2026',
          },
        ]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const filtered = certificates.filter(
    (c) =>
      c.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.certificateId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.college && c.college.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Search & Header */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search certificates by name, ID, or college..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none"
          />
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Total Issued Certificates: {filtered.length}</span>
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-xs">
            Loading certificates...
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-slate-400 text-xs space-y-2">
            <Award className="w-8 h-8 mx-auto text-slate-300" />
            <p className="font-bold text-slate-600">No certificate records found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-gray-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Certificate ID</th>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">College / Institution</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Issue Date</th>
                  <th className="p-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((cert) => (
                  <tr key={cert._id || cert.certificateId} className="hover:bg-slate-50 transition">
                    <td className="p-4">
                      <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">
                        {cert.certificateId}
                      </span>
                    </td>
                    <td className="p-4 font-bold text-slate-900 text-sm">
                      {cert.studentName}
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1">
                        <Phone className="w-3 h-3 text-livewire-red" />
                        <span>{cert.phone || 'N/A'}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-700">
                      <div className="flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span>{cert.college || 'Livewire Salem'}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{cert.location || 'Salem'}</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-500">
                      {cert.issueDate}
                    </td>
                    <td className="p-4 text-right">
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Issued</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
