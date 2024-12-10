// src/app/layout.jsx
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">{children}</main>
      <Footer />
    </div>
  );
}