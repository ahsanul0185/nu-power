import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import SolarROICalculator from "./pages/SolarROICalculator"
import NotFound from "./pages/NotFound"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solar-energy-faqs" element={<FAQs />} />
        <Route path="/solar-roi-calculator" element={<SolarROICalculator />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
