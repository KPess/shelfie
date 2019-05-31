import React from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import './App.css';
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Dashboard />
        <div className="Form"><Form /></div>
      </main>
    </div>
  );
}

export default App;
