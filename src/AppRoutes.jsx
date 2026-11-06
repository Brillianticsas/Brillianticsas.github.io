// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import InicioBrilliantic from "./pages/InicioBrilliantic";
import Productos from "./pages/Productos";
import Servicios from "./pages/Servicios";
import Arquitectura from "./pages/Arquitectura";
import Experiencia from "./pages/Experiencia";
import Nosotros from "./pages/Nosotros";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal - Pantalla de inicio */}
      <Route path="/" element={<InicioBrilliantic />} />

      {/* Pantallas del Ecosistema */}
      <Route path="/Productos" element={<Productos />} />
      <Route path="/Servicios" element={<Servicios />} />
      <Route path="/Services" element={<Servicios />} />
      <Route path="/Ecosistema" element={<Arquitectura />} />
      <Route path="/Ecosystem" element={<Arquitectura />} />
      <Route path="/Experiencia" element={<Experiencia />} />
      <Route path="/Experience" element={<Experiencia />} />
      <Route path="/Nosotros" element={<Nosotros />} />
      <Route path="/About" element={<Nosotros />} />
    </Routes>
  );
};

export default AppRoutes;
