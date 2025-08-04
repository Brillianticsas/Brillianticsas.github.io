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
import Acordeon from "./components/Acordeon";
import BrillianticketsCard from "./components/BrillianticketsCard";
import QuienesSomos from "./components/QuienesSomos";
// import Consulting from "./components/Consulting";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta principal */}
      <Route
        path="/"
        element={
          <>
            <Hero id="hero" />
            <Cluster id="cluster" />
            <ClientSlider />
            <Acordeon id="acordeon" />
            <BrillianticketsCard />
            <Contact id="contacto" />
          </>
        }
      />

      {/* Ruta para política de datos */}
      <Route path="/DataPolitics" element={<DataPolitics />} />
      <Route path="/QuienesSomos" element={<QuienesSomos />} />
    </Routes>
  );
};

export default AppRoutes;
