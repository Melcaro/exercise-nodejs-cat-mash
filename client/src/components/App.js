import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import { PlayZone } from './PlayZone';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route component={PlayZone} />
      </BrowserRouter>
    </div>
  );
}

export default App;
