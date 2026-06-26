import "./Pricing.css";

function BillingToggle({ yearly, setYearly }) {
  return (
    <div className="billing-toggle">

      <button
        className={!yearly ? "active" : ""}
        onClick={() => setYearly(false)}
      >
        Monthly
      </button>

      <button
        className={yearly ? "active" : ""}
        onClick={() => setYearly(true)}
      >
        Annual
      </button>

    </div>
  );
}

export default BillingToggle;