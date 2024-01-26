import React, { useState, useEffect } from 'react';
import './App.css'; 

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={`wip-logo.png`} 
          className={`logo-responsive fade-transition ${isVisible ? 'show' : ''}`}
          alt="logo"
        />
      </header>
    </div>
  );
}

export default App;