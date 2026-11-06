import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppChatButton from "./components/WhatsAppChatButton";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./AppRoutes";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isStandalonePage =
    location.pathname === "/" ||
    location.pathname.toLowerCase() === "/productos" ||
    location.pathname.toLowerCase() === "/servicios" ||
    location.pathname.toLowerCase() === "/services" ||
    location.pathname.toLowerCase() === "/ecosistema" ||
    location.pathname.toLowerCase() === "/ecosystem" ||
    location.pathname.toLowerCase() === "/arquitectura" ||
    location.pathname.toLowerCase() === "/architecture" ||
    location.pathname.toLowerCase() === "/experiencia" ||
    location.pathname.toLowerCase() === "/experience" ||
    location.pathname.toLowerCase() === "/nosotros" ||
    location.pathname.toLowerCase() === "/about";

  useEffect(() => {
    const redirectPath = sessionStorage.redirect;
    if (redirectPath) {
      sessionStorage.removeItem("redirect");
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return (
    <>
      <ScrollToTop />
      {!isStandalonePage && <Navbar />}
      <AppRoutes />
      {!isStandalonePage && <Footer />}
      {!isStandalonePage && <WhatsAppChatButton />}
    </>
  );
};

export default App;
