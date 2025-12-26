import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;

