import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCourses = async (params = {}) => {
  const response = await API.get('/courses', { params });
  return response.data;
};

export const getCourseBySlug = async (slug) => {
  const response = await API.get(`/courses/${slug}`);
  return response.data;
};

export const submitInquiry = async (inquiryData) => {
  const response = await API.post('/inquiries', inquiryData);
  return response.data;
};

export const getInquiries = async (params = {}) => {
  const response = await API.get('/inquiries', { params });
  return response.data;
};

export const updateInquiryStatus = async (id, status) => {
  const response = await API.patch(`/inquiries/${id}`, { status });
  return response.data;
};

export const deleteInquiry = async (id) => {
  const response = await API.delete(`/inquiries/${id}`);
  return response.data;
};

export const getCertificate = async (id) => {
  const response = await API.get(`/certificates/${id}`);
  return response.data;
};

export const generateCertificate = async (certData) => {
  const response = await API.post('/certificates', certData);
  return response.data;
};

export default API;
