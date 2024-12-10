import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Tomorrow Minds</h3>
            <p className="text-gray-600">
Making AI Work For You</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Locatie</h3>
            <p className="text-gray-600">Utrecht</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <p className="text-gray-600">Gebruik het contactformulier</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Tomorrow Minds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;