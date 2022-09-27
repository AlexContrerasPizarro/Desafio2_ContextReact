import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favoritos from './views/Favoritos'
import Home from './views/Home'
import Navbar from './components/Navbar'
import Context from './Context'

export default function App() {
  const [imagenes, setImagenes] = useState([]);

  const endpoint = "/fotos.json";

  const galeriaImagenes = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    let filteredData = data.photos.map((e) => ({
      id: e.id, src: e.src.medium,
      desc: e.alt, fav: false
    }));
    setImagenes(filteredData);
  };

  useEffect(() => {
    galeriaImagenes();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{ imagenes, setImagenes }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>

  );
}