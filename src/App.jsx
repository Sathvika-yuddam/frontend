import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BentoGrid from "./components/BentoGrid/BentoGrid";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer"; // <-- NEW IMPORT
import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* Structural layout block: Header */}
      <Navbar />

      {/* Main contextual document body folds */}
      <main>
        <Hero />
        <BentoGrid />
        <Pricing />
        <Testimonials />
      </main>

      {/* Structural layout block: Footer */}
      <Footer /> {/* <-- NEW PLACEMENT */}
    </div>
  );
}

export default App;