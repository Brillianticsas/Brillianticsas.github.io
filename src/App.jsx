import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </HashRouter>
  );
}

export default App;
