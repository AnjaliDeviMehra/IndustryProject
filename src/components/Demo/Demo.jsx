import React, { useState } from "react";
import "./Demo.scss";

const initialComments = [
  "I highly recommend this store. Their customer service is second to none. The product quality consistently exceeds my expectations.",
  "The staff was attentive and polite.",
  "The store was clean and well-organized.",
  "The staff was rude during my visit, and the checkout process was slow.",
  "The prices seem high for everyday items.",
  "The store location is convenient, but I wish they had a wider variety of products.",
  "The layout could be more intuitive.",
];

const initialSummary = {
  total:
    "Overall, the store receives positive reviews for excellent customer service, high-quality products, and a clean, well-organized environment. However, some customers noted staff rudeness, slow checkout, high prices, limited variety, and a non-intuitive layout.",
  positive:
    "Customers highly recommend this store due to excellent customer service, high-quality products, and a clean, well-organized environment.",
  negative:
    "Some customers expressed concerns about staff rudeness, slow checkout, high prices, limited product variety, and a non-intuitive store layout.",
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
      <div className="comments">
        <h2>Comments</h2>
        <div>
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
        <button className="button__Summarize" onClick={handleSummarize}>
          Summarize
        </button>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        {summary ? (
          <div>
            <div className="summary__types">
              <button onClick={() => setActiveSummary("total")}>
                Total Summary
              </button>
              <button onClick={() => setActiveSummary("positive")}>
                Positive Summary
              </button>
              <button onClick={() => setActiveSummary("negative")}>
                Negative Summary
              </button>
            </div>
            <div style={{ marginTop: "0.625rem" }}>
              <p>{summary[activeSummary]}</p>
            </div>
          </div>
        ) : (
          <p>Click "Summarize" to see the summary of comments.</p>
        )}
      </div>

      <div className="button__AI">
        <button>How to Build with AI</button>
      </div>
    </div>
  );
};

export default Demo;
