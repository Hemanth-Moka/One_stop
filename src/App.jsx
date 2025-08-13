import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services1 from "./sections/Services1";
import Gallery from "./sections/Gallery";
import Pricing from "./pages/pricing";
import Haircut from "./pages/Haircut";
import OnestopGallery from "./pages/OnestopGallery";
// import Contact from "./sections/Contact"; // Example extra page

function App() 
{
  
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/onestop-gallery" element={<OnestopGallery />} />
          <Route path="/service" element={<Services1 />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/haircut" element={<Haircut />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
