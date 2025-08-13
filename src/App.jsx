import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services1 from "./sections/Services1";
import Gallery from "./sections/Gallery";
import Pricing from "./pages/Pricing";
import Haircut from "./pages/Haircut";
import NotFound from "./pages/NotFound";
// import OnestopGallery from "./pages/OnestopGallery";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/service" element={<Services1 />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Haircut" element={<Haircut />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/OnestopGallery" element={<OnestopGallery />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
