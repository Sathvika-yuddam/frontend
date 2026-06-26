import { useState, useEffect } from "react";
import "./BentoGrid.css";

const bentoData = [
  {
    id: 0,
    icon: "📊",
    title: "Advanced AI Analytics",
    badge: "Hot",
    description: "Predict user behavior, automate reporting, and unearth deep insights with our trained proprietary LLM models.",
    className: "card-large"
  },
  {
    id: 1,
    icon: "⚡",
    title: "Real-time Sync",
    badge: "Core",
    description: "Zero lag. Global state synchronizes across all active nodes in under 45ms flat.",
    className: "card-tall"
  },
  {
    id: 2,
    icon: "🔒",
    title: "Bank-Grade Security",
    badge: "Enterprise",
    description: "End-to-end AES-256 encryption out of the box with automated compliance audits.",
    className: "card-small"
  },
  {
    id: 3,
    icon: "🔌",
    title: "Extensive Integrations",
    badge: "Ecosystem",
    description: "Connect seamlessly with GitHub, Slack, Linear, Vercel, and over 2,000+ developer tools instantly.",
    className: "card-wide"
  },
  {
    id: 4,
    icon: "🌍",
    title: "Global Edge Network",
    badge: "Infrastructure",
    description: "Deployed natively on the edge closest to your user base for sub-second delivery anywhere.",
    className: "card-small"
  }
];

function BentoGrid() {
  // Shared state tracking the index for BOTH bento hover and accordion expansion
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track window resizing to seamlessly synchronize states
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth <= 992;
      setIsMobile(mobileView);
    };

    // Run immediately on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bento-section" id="features">
      <div className="bento-header">
        <span className="bento-badge">Features Blueprint</span>
        <h2>Engineered for Next-Gen Workflows</h2>
        <p>A unified infrastructure built to scale seamlessly across device layouts.</p>
      </div>

      {/* DESKTOP BENTO GRID MODE */}
      {!isMobile && (
        <div className="bento-grid">
          {bentoData.map((item) => (
            <div
              key={item.id}
              className={`bento-card ${item.className} ${activeIndex === item.id ? "active-bento" : ""}`}
              onMouseEnter={() => setActiveIndex(item.id)}
            >
              <div className="card-content">
                <div className="card-top">
                  <span className="icon">{item.icon}</span>
                  {activeIndex === item.id && <span className="live-pill">{item.badge}</span>}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* MOBILE ACCORDION MODE (Preserves Context Lock) */}
      {isMobile && (
        <div className="accordion-wrapper">
          {bentoData.map((item) => {
            const isOpen = activeIndex === item.id;
            return (
              <div 
                key={item.id} 
                className={`accordion-item ${isOpen ? "expanded" : ""}`}
              >
                <button 
                  className="accordion-trigger" 
                  onClick={() => setActiveIndex(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="trigger-title">
                    <span className="accordion-icon">{item.icon}</span>
                    {item.title}
                  </span>
                  <span className="chevron-arrow">{isOpen ? "−" : "+"}</span>
                </button>
                
                <div className="accordion-content">
                  <div className="accordion-content-inner">
                    <span className="accordion-badge">{item.badge}</span>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default BentoGrid;