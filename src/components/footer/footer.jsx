import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">SaaS<span>App</span></div>
          <p>Automating next-gen cloud workflows with intelligent engineering solutions.</p>
          <div className="social-links">
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#github" aria-label="GitHub">🐙</a>
            <a href="#linkedin" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="footer-links-col">
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#changelog">Changelog</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="footer-links-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#docs">Documentation</a></li>
            <li><a href="#guides">Guides</a></li>
            <li><a href="#api">API Reference</a></li>
            <li><a href="#status">System Status</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} SaaSApp Inc. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;