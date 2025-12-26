import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

