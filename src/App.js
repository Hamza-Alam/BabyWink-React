import React from 'react';
import './App.css';
import Home from './components/layouts/Home';
import PrivacyPolicy from './components/layouts/PrivacyPolicy';
import TermCondition from './components/layouts/TermConditions';

function App() {
  return (
    <div className="App">
      <PrivacyPolicy />
    </div>
  );
}

export default App;
