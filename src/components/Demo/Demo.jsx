import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Demo.scss"; // Ensure you have appropriate styles for keyword highlighting

const initialComments = [
  "I highly recommend this store. Their customer service is excellent. The product quality consistently exceeds my expectations.",
  "The store was clean and well-organized.",
  "The fabric is so soft and comfortable. It feels like it's made with high-quality materials.",
  "The staff was rude during my visit, and the checkout process was slow.",
  "The price is reasonable for the quality, but I would love to see more discounts.",
  "The store location is convenient, but I wish they had a wider variety of products.",
  "The layout could be more intuitive.",
  "The sizing is a bit off. I had to exchange for a different size.",
];

const initialSummary = {
  total: (
    <p>
      Overall, the store receives positive reviews for{" "}
      <span className="keyword">excellent customer service</span>,{" "}
      <span className="keyword">high-quality products</span>, and a{" "}
      <span className="keyword">clean, well-organized environment</span>.
      However, some customers noted{" "}
      <span className="keyword">staff rudeness</span>,{" "}
      <span className="keyword">slow checkout</span>,{" "}
      <span className="keyword">high prices</span>,{" "}
      <span className="keyword">limited variety</span>, and a{" "}
      <span className="keyword">non-intuitive layout</span>.
    </p>
  ),
  positive: (
    <p>
      Customers highly recommend this store due to{" "}
      <span className="keyword">excellent customer service</span>,{" "}
      <span className="keyword">high-quality products</span>, and a{" "}
      <span className="keyword">clean, well-organized environment</span>.
    </p>
  ),
  negative: (
    <p>
      Some customers expressed concerns about{" "}
      <span className="keyword">staff rudeness</span>,{" "}
      <span className="keyword">slow checkout</span>,{" "}
      <span className="keyword">high prices</span>,{" "}
      <span className="keyword">limited product variety</span>, and a{" "}
      <span className="keyword">non-intuitive store layout</span>.
    </p>
  ),
};

export const Demo = () => {
  const [comments, setComments] = useState(initialComments);
  const [summary, setSummary] = useState(null);
  const [activeSummary, setActiveSummary] = useState("total");

  const handleSummarize = () => {
    setSummary(initialSummary);
  };

  return (
    <div className="container">
      <h2 className="comments__header">Customer Feedback</h2>
      <div className="content-row">
        <div className="comments">
          <h2>Comments</h2>
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="summary">
          <h2>Summary</h2>
          {summary ? (
            <div>
              <div className="summary__types">
                <button
                  className="summary__button"
                  onClick={() => setActiveSummary("total")}
                >
                  Total Summary
                </button>
                <button
                  className="summary__button"
                  onClick={() => setActiveSummary("positive")}
                >
                  Positive Summary
                </button>
                <button
                  className="summary__button"
                  onClick={() => setActiveSummary("negative")}
                >
                  Negative Summary
                </button>
              </div>
              <div style={{ marginTop: "0.625rem" }}>
                {summary[activeSummary]}
              </div>
            </div>
          ) : (
            <p>Click "Summarize" to see the summary of comments.</p>
          )}
          <div className="comment-button__container">
            {!summary && (
              <button className="button__Summarize" onClick={handleSummarize}>
                Summarize
              </button>
            )}
          </div>
        </div>
      </div>

      <Link to="/consultations">
        <button className="button__AI">
          Book a consultation with our AI experts.
        </button>
      </Link>
    </div>
  );
};

export default Demo;
