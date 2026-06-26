import "./Pricing.css";

function PriceCard({ name, price, currencySymbol, features, isPopular }) {
  return (
    <div className={`price-card ${isPopular ? "popular-card" : ""}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      
      <h3 className="tier-name">{name}</h3>
      
      <div className="price-container">
        <span className="currency-symbol">{currencySymbol}</span>
        <span className="price-amount">{price}</span>
      </div>
      
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <span className="checkmark">✔</span> {feature}
          </li>
        ))}
      </ul>
      
      <button className={`cta-button ${isPopular ? "primary" : "secondary"}`}>
        Get Started
      </button>
    </div>
  );
}

export default PriceCard;