import React from "react";
import "./CommentSummarizerPage.scss";
import Demo from "../../components/Demo/Demo";

const CommentSummarizerPage = () => {
  return (
    <>
      <div className="comment-hero">
        <div className="comment-hero__info">
          <h4 className="comment-hero__heading">AI TOOLS FOR YOUR BUSINESS</h4>
          <h2>Customer Feedback Summarizer</h2>
          <p>
            A customer feedback summarizer is a tool that helps you quickly
            understand what your customers are saying. It takes all the feedback
            you receive—whether it’s from reviews, emails, or surveys—and
            condenses it into a simple summary. This way, you can get the main
            points without having to read through every single comment.
          </p>
        </div>
        <div className="comment-hero__card">
          <h3>How can it help your business?</h3>
          <h4>SAVE TIME</h4>
          <p>
            Display summarized customer feedback directly on your business
            dashboard. This gives you and your team a quick overview of what
            customers are saying, without digging through pages of text.
          </p>
          <h4>FILTER AND SEARCH</h4>
          <p>
            Provide your customers with the ability to filter feedback summaries
            by category (e.g., product quality, customer service) or search for
            specific keywords. This helps them find relevant information more
            efficiently.
          </p>
        </div>
      </div>
      <Demo />
      {/* Real storefront examples */}
      {/* Button that links to a resource how to build this using AI */}
    </>
  );
};

export default CommentSummarizerPage;
