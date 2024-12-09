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
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-green-50 p-6 rounded-lg text-center">
        <h3 className="text-green-800 font-medium text-lg mb-2">Bericht verstuurd!</h3>
        <p className="text-green-700">Bedankt voor uw bericht. We nemen zo spoedig mogelijk contact met u op.</p>
      </div>
    );
  }

  return (
    <form 
      name="tomorrow-minds-contact" 
      method="POST" 
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
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

const Website = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Section */}
      <div id="contact" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Neem contact op</h2>
              <p className="text-gray-600 mb-8">
                Wilt u meer weten over hoe Tomorrow Minds uw organisatie kan helpen met AI? 
                Neem contact op voor een vrijblijvend gesprek.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Website;