import { useState } from "react";
import pricingData, { currencies } from "../../data/pricing";
import { calculatePrice } from "../../utils/pricingCalculator";
import BillingToggle from "./BillingToggle";
import CurrencySelector from "./CurrencySelector";
import PriceCard from "./PriceCard";
import "./Pricing.css";

function Pricing() {
  // Local state strictly isolated to this component
  const [currency, setCurrency] = useState("USD");
  const [yearly, setYearly] = useState(false);

  // Get current currency object to pass down the correct symbol and rate
  const currentCurrency = currencies[currency];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-header">
        <h2>Choose Your Plan</h2>
        
        <div className="pricing-controls">
          <BillingToggle yearly={yearly} setYearly={setYearly} />
          <CurrencySelector currency={currency} setCurrency={setCurrency} />
        </div>
      </div>

      <div className="pricing-grid">
        {pricingData.map((tier) => {
          // Compute price dynamically based on base price, exchange rate, and billing cycle
          const computedPrice = calculatePrice(
            tier.basePrice,
            currentCurrency.rate,
            yearly
          );

          return (
            <PriceCard
              key={tier.id}
              name={tier.name}
              price={computedPrice}
              currencySymbol={currentCurrency.symbol}
              features={tier.features}
              isPopular={tier.name === "Pro"} // Automatically highlights the Pro tier
            />
          );
        })}
      </div>
    </section>
  );
}

export default Pricing;