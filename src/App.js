import"bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contacto from './components/Contacto';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
