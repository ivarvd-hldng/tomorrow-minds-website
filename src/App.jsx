import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AppRoutes from './routes';

const App = () => (
  <Router>
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;