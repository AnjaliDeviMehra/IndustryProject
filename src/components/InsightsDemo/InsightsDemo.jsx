import "./InsightsDemo.scss";
import { useState } from "react";

const initialSummary = (
  <div>
    <h2>AI-Generated Strategy Recommendations:</h2>

    <div>
      <h3>Targeted Marketing:</h3>
      <ul>
        <li>
          For Young Adults: Increase advertising spend on electronics and
          clothing.
        </li>
        <li>
          For Seniors: Promote home goods and beauty products with targeted
          discounts.
        </li>
      </ul>
    </div>

    <div>
      <h3>Product Inventory:</h3>
      <ul>
        <li>
          Electronics: Increase stock for top-selling items based on projected
          growth.
        </li>
        <li>
          Beauty Products: Plan for seasonal promotions to counteract predicted
          decline.
        </li>
      </ul>
    </div>

    <div>
      <h3>How It Works:</h3>
      <p>
        AI analyzes customer data to recommend marketing strategies and
        inventory adjustments.
      </p>
    </div>
  </div>
);

const InsightsDemo = () => {
  const [summary, setSummary] = useState(null);

  const handleSummarize = () => {
    setSummary(initialSummary);
  };

  return (
    <div className="container">
      <div className="content-items">
        <div className="content">
          <h2 className="insight-title">Retail Sales Data</h2>
          <p>Total Sales: $120,000</p>

          <h3>Top Categories:</h3>
          <ul>
            <li>Electronics: $40,000</li>
            <li>Clothing: $35,000</li>
            <li>Home Goods: $25,000</li>
            <li>Beauty Products: $15,000</li>
          </ul>

          <h3>Customer Segments:</h3>
          <ul>
            <li>Young Adults (18-34): $50,000</li>
            <li>Adults (35-54): $45,000</li>
          </ul>

          <button className="button__Summarize" onClick={handleSummarize}>
            Generate AI Recommendations
          </button>
        </div>
        {summary && <div className="insights-summary">{summary}</div>}
      </div>
    </div>
  );
};

export default InsightsDemo;
