import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/ui/header";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Home from "@/components/pages/Home";
import { Footer } from "@/components/ui/footer";
import Services from "@/components/pages/Services";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}
