import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    diensten: [
      { label: 'AI Readiness Scan', path: '/diensten#readiness-scan' },
      { label: 'ISO AI Beleid', path: '/diensten#iso-ai-beleid' },
      { label: 'AI Implementatie', path: '/diensten#implementatie' }
    ],
    bedrijf: [
      { label: 'Over Ons', path: '/over-ons' },
      { label: 'Blog', path: '/blog' },
      { label: 'Werken Bij', path: '/carriere' }
    ],
    juridisch: [
      { label: 'Privacy Verklaring', path: '/privacy' },
      { label: 'Algemene Voorwaarden', path: '/voorwaarden' }
    ]
  };

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-bold text-xl mb-4">Tomorrow Minds</div>
            <p className="text-gray-600 mb-4">
              Praktische AI implementatie voor elke organisatie.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-gray-600">
                Part of REDLAB Group
              </div>
              <div className="text-sm text-gray-600">
                Utrecht, Nederland
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Diensten</h3>
            <ul className="space-y-2">
              {footerLinks.diensten.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Bedrijf</h3>
            <ul className="space-y-2">
              {footerLinks.bedrijf.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                Neem contact op via het contactformulier.
              </p>
              <div className="mt-4 space-y-2">
                {footerLinks.juridisch.map((link) => (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-blue-600 text-sm"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Tomorrow Minds. Alle rechten voorbehouden.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;