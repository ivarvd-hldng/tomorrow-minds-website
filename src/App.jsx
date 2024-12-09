import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRoutes from './routes';

const App = () => (
  <Router>
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AppRoutes />
      </main>
    </div>
  </Router>
);

export default App;