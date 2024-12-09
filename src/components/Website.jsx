import React, { useState } from 'react';
import { ChevronRight, Brain, Users, Rocket, Calendar } from 'lucide-react';

const BlogPreview = ({ title, date, excerpt }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <span className="text-sm text-gray-500">{date}</span>
    <h3 className="text-xl font-semibold mt-2 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{excerpt}</p>
    <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">Lees meer</a>
  </div>
);

const ContactForm = () => {
  return (
    <form 
      name="tomorrow-minds-contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="tomorrow-minds-contact" />
      <input type="hidden" name="bot-field" />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Naam</label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded-lg"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Bericht</label>
        <textarea
          name="message"
          rows="4"
          className="w-full p-2 border rounded-lg"
          required
        ></textarea>
      </div>

      <button 
        type="submit"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 w-full"
      >
        Verstuur bericht
      </button>
    </form>
  );
};

export default function Website() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Rest van de component blijft hetzelfde */}
    </div>
  );
}
