import InsightsDemo from "../../components/InsightsDemo/InsightsDemo";
import "./PurchaseInsights.scss";

const PurchaseInsights = () => {
  return (
    <>
      <div className="comment-hero">
        <div className="comment-hero__info">
          <h4 className="comment-hero__heading">AI TOOLS FOR YOUR BUSINESS</h4>
          <h2>SmartSales Insights</h2>
          <p>
            SmartSales Insights simplifies your sales data analysis. It
            processes your sales transactions, customer interactions, and
            marketing results to provide clear, actionable insights, helping you
            make informed decisions quickly.
          </p>
        </div>
        <div className="comment-hero__card">
          <h3>How can it help your business?</h3>
          <h4>IDENTIFY TRENDS</h4>
          <p>
            View key sales patterns and customer behaviors on an easy-to-read
            dashboard. Spot top products and market shifts with ease.
          </p>
          <h4>RECEIVE STRATEGIC ADVICE</h4>
          <p>
            Get tailored recommendations for optimizing your sales approach,
            from targeting key customer segments to refining your product
            lineup.
          </p>
        </div>
      </div>
      <InsightsDemo />
    </>
  );
};

export default PurchaseInsights;
