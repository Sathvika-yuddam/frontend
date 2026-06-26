import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Intersection Observer to update the active link based on scroll position
  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const options = { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || "hero");
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Smooth scroll handler with offset fallback
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu on click
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Brand Logo */}
        <div className="nav-logo" onClick={(e) => handleScroll(e, "hero")}>
          AI<span>Flow</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "mobile-open" : ""}`}>
          <a 
            href="#features" 
            className={activeSection === "features" ? "active-link" : ""}
            onClick={(e) => handleScroll(e, "features")}
          >
            Features
          </a>
          <a 
            href="#pricing" 
            className={activeSection === "pricing" ? "active-link" : ""}
            onClick={(e) => handleScroll(e, "pricing")}
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            className={activeSection === "testimonials" ? "active-link" : ""}
            onClick={(e) => handleScroll(e, "testimonials")}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active-link" : ""}
            onClick={(e) => handleScroll(e, "contact")}
          >
            Contact
          </a>
          
          {/* Mobile action button layout insertion */}
          <button className="nav-btn mobile-btn">Get Started</button>
        </div>

        {/* Action Button (Desktop) */}
        <button className="nav-btn desktop-btn">Get Started</button>

        {/* Touch-Optimized Hamburger Menu Icon */}
        <button 
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;