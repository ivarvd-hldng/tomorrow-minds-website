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
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-indigo-600">Tomorrow Minds</div>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-600 hover:text-indigo-600">Over ons</a>
              <a href="#services" className="text-gray-600 hover:text-indigo-600">Diensten</a>
              <a href="#careers" className="text-gray-600 hover:text-indigo-600">Carrière</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">
              Making AI Work For You
            </h1>
            <p className="text-xl mb-8">
              Tomorrow Minds helpt organisaties hun AI-potentieel te realiseren met praktische implementaties en concrete resultaten.
            </p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 flex items-center gap-2">
              Neem contact op
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Brain className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Praktische AI Implementatie</h3>
            <p className="text-gray-600">
              We vertalen complexe AI-technologie naar concrete bedrijfsoplossingen.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Users className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
            <p className="text-gray-600">
              Ons team combineert technische AI-expertise met praktische bedrijfservaring.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-indigo-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Bewezen Resultaten</h3>
            <p className="text-gray-600">
              Als onderdeel van de REDLAB groep bouwen we voort op een netwerk van 360+ tevreden klanten.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
          <p className="text-gray-600">Ontdek de laatste ontwikkelingen in AI en innovatie</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <BlogPreview 
            title="De impact van AI op kwaliteitsmanagement"
            date="28 November 2024"
            excerpt="Hoe kunstmatige intelligentie de toekomst van kwaliteitsmanagement vormgeeft."
          />
          <BlogPreview 
            title="Praktische AI implementatie voor het MKB"
            date="21 November 2024"
            excerpt="Een stapsgewijze aanpak voor het succesvol implementeren van AI in uw organisatie."
          />
          <BlogPreview 
            title="AI & ISO: De volgende stap"
            date="14 November 2024"
            excerpt="De integratie van AI in ISO-managementsystemen biedt ongekende mogelijkheden."
          />
        </div>
      </div>

      {/* Launch Section */}
      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-24">
          <div className="bg-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Start Your AI Journey</h2>
            <p className="text-gray-600 mb-6">
              Tomorrow Minds lanceert in januari 2025. Wees er vroeg bij en ontdek hoe AI uw organisatie kan versterken.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 flex items-center gap-2">
              <Calendar size={20} />
              Plan een gesprek
            </button>
          </div>
        </div>
      </div>

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

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">Tomorrow Minds</h4>
              <p className="text-gray-600">
                Onderdeel van de REDLAB groep
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-600">
                <li>AI Readiness Scan</li>
                <li>Implementatie</li>
                <li>Training & Adoptie</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Carrière</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Junior AI Consultant</li>
                <li>Stage mogelijkheden</li>
                <li>Werken bij Tomorrow Minds</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Utrecht, Nederland</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} Tomorrow Minds. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
