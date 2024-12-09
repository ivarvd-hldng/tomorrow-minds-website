import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/diensten', label: 'Diensten' },
    { path: '/over-ons', label: 'Over Ons' },
    { path: '/blog', label: 'Blog' },
    { path: '/carriere', label: 'Werken Bij' },
  ];

  return (
    <header className="fixed w-full bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Home Link */}
          <Link to="/" className="font-bold text-xl">
            Tomorrow Minds
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contact">
                Neem Contact Op
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu (hidden by default) */}
        <div className="hidden">
          <div className="py-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;