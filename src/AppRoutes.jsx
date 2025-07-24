// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Banner";
import Team from "./components/Team";
import Services from "./components/Services";
import Contact from "./components/Contact";
import DataPolitics from "./components/DataPolitics";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Team />
            <Services id="services" />
            <Contact id="contacto" />
          </>
        }
      />

      {/* Ruta para política de datos */}
      <Route path="/DataPolitics" element={<DataPolitics />} />
    </Routes>
  );
};

export default AppRoutes;
