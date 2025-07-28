import React from "react";
import "./App.css";
/* import { HashRouter } from "react-router-dom";*/
import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <browserRouter>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </browserRouter>
  );
}

export default App;
