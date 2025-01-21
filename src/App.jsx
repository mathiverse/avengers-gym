import Header from "./components/Navbar";
import PricingSection from "./components/Pricing";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FooterGym } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Run animation only once
    });
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FooterGym />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
