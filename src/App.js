import React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Dashboard />
          <div className="Form">
          <Form />
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
