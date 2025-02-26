import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import SolarROICalculator from "./pages/SolarROICalculator"
import NotFound from "./pages/NotFound"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import ScrollToTop from "./helpers/ScrollToTop";
import ScrollTopButton from "./components/common/ScrollTopButton";
import ChatBot from "./components/ChatBot";

const validRoutes = ["/", "/about", "/our-services", "/contact", "/solar-energy-faqs", "/solar-roi-calculator"];

const App = () => {

  const location = useLocation();
  const isNotFoundPage = !validRoutes.includes(location.pathname);


  return (
    <div className="overflow-x-clip">
      <ScrollToTop />
      {!isNotFoundPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solar-energy-faqs" element={<FAQs />} />
        <Route path="/solar-roi-calculator" element={<SolarROICalculator />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      {!isNotFoundPage ? <Footer /> : ""}
      <ScrollTopButton />
      <ChatBot />
    </div>
  );
};

export default App;
