import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  CheckCircle,
  Clock,
  Phone,
  Mail,
  MapPin,
  Trash2,
  Download,
  Filter,
  RefreshCw,
  BookOpen,
} from 'lucide-react';
import { getInquiries, updateInquiryStatus, deleteInquiry } from '../../services/api';

export default function AdminLeads() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [actionMsg, setActionMsg] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await getInquiries({
        status: statusFilter !== 'All' ? statusFilter : undefined,
        search: searchTerm || undefined,
      });
      setInquiries(res.data || []);
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [statusFilter, searchTerm]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await updateInquiryStatus(id, newStatus);
      if (res.success) {
        setInquiries((prev) =>
          prev.map((item) => (item._id === id ? { ...item, status: newStatus } : item))
        );
        setActionMsg(`Lead status updated to ${newStatus}`);
        setTimeout(() => setActionMsg(''), 2500);
      }
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this lead record?')) return;
    try {
      const res = await deleteInquiry(id);
      if (res.success) {
        setInquiries((prev) => prev.filter((item) => item._id !== id));
        setActionMsg('Lead record deleted successfully');
        setTimeout(() => setActionMsg(''), 2500);
      }
    } catch (err) {
      alert('Failed to delete lead');
    }
  };

  const exportCSV = () => {
    if (inquiries.length === 0) return alert('No inquiries to export');
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Course Interested', 'Branch', 'Status', 'Date'];
    const rows = inquiries.map((i) => [
      `"${i.firstName}"`,
      `"${i.lastName || ''}"`,
      `"${i.email}"`,
      `"${i.phone}"`,
      `"${i.courseInterested || ''}"`,
      `"${i.preferredBranch || ''}"`,
      `"${i.status}"`,
      `"${new Date(i.createdAt).toLocaleString()}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `livewire_leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const statusColors = {
    New: 'bg-red-100 text-livewire-red border-red-200',
    Contacted: 'bg-blue-100 text-blue-800 border-blue-200',
    'Counseling Scheduled': 'bg-amber-100 text-amber-800 border-amber-200',
    Enrolled: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Closed: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const counts = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === 'New').length,
    contacted: inquiries.filter((i) => i.status === 'Contacted').length,
    enrolled: inquiries.filter((i) => i.status === 'Enrolled').length,
  };

  return (
    <div className="space-y-6">
      {actionMsg && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2 animate-in fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{actionMsg}</span>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-xs font-bold text-slate-400 uppercase">Filtered Leads</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{counts.total}</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-xs font-bold text-livewire-red uppercase">New Enquiries</div>
          <div className="text-2xl font-black text-livewire-red mt-1">{counts.new}</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-xs font-bold text-blue-600 uppercase">In Contact</div>
          <div className="text-2xl font-black text-blue-600 mt-1">{counts.contacted}</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <div className="text-xs font-bold text-emerald-600 uppercase">Enrolled Students</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">{counts.enrolled}</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by student name, phone, course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs border border-gray-300 rounded-lg focus:ring-2 focus:ring-livewire-red outline-none"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-400 shrink-0" />
          {['All', 'New', 'Contacted', 'Counseling Scheduled', 'Enrolled', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                statusFilter === st
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {st}
            </button>
          ))}
          <button
            onClick={exportCSV}
            className="bg-slate-800 hover:bg-slate-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ml-2"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 text-center text-slate-500 text-xs">
            Loading student leads...
          </div>
        ) : inquiries.length === 0 ? (
          <div className="py-16 text-center text-slate-400 text-xs space-y-2">
            <Users className="w-8 h-8 mx-auto text-slate-300" />
            <p className="font-bold text-slate-600">No student inquiry records found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 text-slate-500 font-bold border-b border-gray-200 uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Student</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4">Course & Branch</th>
                  <th className="p-4">Message</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-slate-50/80 transition">
                    <td className="p-4">
                      <div className="font-bold text-slate-900 text-sm">
                        {inq.firstName} {inq.lastName}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(inq.createdAt).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="p-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Phone className="w-3.5 h-3.5 text-livewire-red" />
                        <a href={`tel:${inq.phone}`} className="hover:underline font-semibold">
                          {inq.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <a href={`mailto:${inq.email}`} className="hover:underline">
                          {inq.email}
                        </a>
                      </div>
                    </td>
                    <td className="p-4 space-y-1">
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-livewire-red shrink-0" />
                        <span>{inq.courseInterested}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{inq.preferredBranch}</span>
                      </div>
                    </td>
                    <td className="p-4 max-w-xs">
                      <p className="text-slate-600 line-clamp-2 text-[11px]">
                        {inq.message || inq.subject || 'No extra notes provided.'}
                      </p>
                    </td>
                    <td className="p-4">
                      <select
                        value={inq.status}
                        onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                        className={`px-2.5 py-1 text-xs font-bold rounded-lg border outline-none cursor-pointer ${
                          statusColors[inq.status] || 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Counseling Scheduled">Counseling Scheduled</option>
                        <option value="Enrolled">Enrolled</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDelete(inq._id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
