import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ServicesPage, AboutPage, BlogPage, CareersPage, PrivacyPolicy, TermsAndConditions } from '../pages';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ServicesPage />} />
    <Route path="/diensten" element={<ServicesPage />} />
    <Route path="/over-ons" element={<AboutPage />} />
    <Route path="/blog" element={<BlogPage />} />
    <Route path="/carriere" element={<CareersPage />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/voorwaarden" element={<TermsAndConditions />} />
  </Routes>
);

export default AppRoutes;