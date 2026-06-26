import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      {/* Left side text and stats */}
      <div className="hero-left">
        <span className="tag">
          AI Powered Automation
        </span>

        {/* Wrapped text inside a proper h1 heading */}
        <h1>
          Automate Your Data Pipelines
          <br />
          With Artificial Intelligence
        </h1>

        <p>
          Build, automate and monitor enterprise workflows using
          intelligent AI agents that scale with your business.
        </p>

        <div className="hero-buttons">
          <button className="primary">
            Start Free
          </button>
          <button className="secondary">
            Watch Demo
          </button> {/* Fixed: Added missing closed button tag */}
        </div>

        <div className="stats">
          <div>
            <h2>20K+</h2>
            <span>Users</span>
          </div>

          <div> {/* Fixed: Added missing opening div tag */}
            <h2>99.9%</h2>
            <span>Uptime</span>
          </div>

          <div> {/* Fixed: Added missing opening div tag */}
            <h2>150+</h2>
            <span>Integrations</span>
          </div>
        </div> {/* Fixed: Added missing closed stats div tag */}
      </div>

      {/* Right side mock cards matching your screenshot */}
      <div className="hero-right">
        <div className="dashboard">
          <div className="card">
            <h3>Automation</h3>
            <p>98% Success</p>
          </div>

          <div className="card">
            <h3>Analytics</h3>
            <p>Live Dashboard</p>
          </div>

          <div className="card">
            <h3>Security</h3>
            <p>Enterprise Grade</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;