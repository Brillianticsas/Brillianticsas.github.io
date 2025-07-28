// src/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./components/Banner";
import Team from "./components/Team";
import Services from "./components/Services";
import Contact from "./components/Contact";
import DataPolitics from "./components/DataPolitics";
import OrganicEvolution from "./components/OrganicEvolution";
import ClientSlider from "./components/ClientSlider";
import Cluster from "./components/Cluster";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route
        path="/"
        element={
          <>
            <Hero id="hero" />
            <ClientSlider />
            <OrganicEvolution />
            <Services id="services" />
            <Team />
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
