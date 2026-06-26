import "./Pricing.css";

function CurrencySelector({ currency, setCurrency }) {

  return (

    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value)}
      className="currency-select"
    >

      <option value="USD">USD ($)</option>

      <option value="EUR">EUR (€)</option>

      <option value="INR">INR (₹)</option>

    </select>

  );

}

export default CurrencySelector;