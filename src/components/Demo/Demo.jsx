import React, { useState } from "react";
import "./Demo.scss";

const initialComments = [
  {
    text: "The fabric is so soft and comfortable. It feels like it's made with high-quality materials.",
    user: "Jane Doe",
    date: "2024-08-01",
  },
  {
    text: "I love the color selection. There are so many vibrant options!",
    user: "John Smith",
    date: "2024-08-02",
  },
  {
    text: "The sizing is a bit off. I had to exchange for a different size.",
    user: "Alice Brown",
    date: "2024-08-03",
  },
  {
    text: "The stitching on the seams is very well done, but the buttons feel a bit loose.",
    user: "David Wilson",
    date: "2024-08-04",
  },
  // {
  //   text: "The design is trendy and stylish. I've received so many compliments!",
  //   user: "Megan Taylor",
  //   date: "2024-08-05",
  // },
  // {
  //   text: "I wish the material was more durable. It started to show wear after a few washes.",
  //   user: "Chris Johnson",
  //   date: "2024-08-06",
  // },
  // {
  //   text: "The price is reasonable for the quality, but I would love to see more discounts.",
  //   user: "Emily Davis",
  //   date: "2024-08-07",
  // },
];

const initialSummary = {
  summary: (
    <p>
      Customers appreciate the <span className="keyword">soft</span> and{" "}
      <span className="keyword">comfortable fabric</span>,{" "}
      <span className="keyword">vibrant color options</span>, and{" "}
      <span className="keyword">trendy design</span> of the clothing. The{" "}
      <span className="keyword">stitching</span> is generally praised, though
      there are some concerns about the{" "}
      <span className="keyword">durability of materials</span> and the{" "}
      <span className="keyword">accuracy of sizing</span>. Overall, the product
      is seen as <span className="keyword">stylish</span> and{" "}
      <span className="keyword">reasonably priced</span>.
    </p>
  ),
};

export const Demo = () => {
  const [comments, setComments] = useState(initialComments);
  const [summary, setSummary] = useState(null);

  const handleSummarize = () => {
    setSummary(initialSummary);
  };

  return (
    <div className="container">
      <h2 className="comments__header">TRY IT OUT YOURSELF</h2>
      <div className="content-row">
        <div className="comments">
          <div>
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                <div className="comment__body">
                  <h4 className="comment__user">{comment.user}</h4>
                  <p className="comment__text">{comment.text}</p>
                  <p className="comment__date">{comment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary">
          <h2 className="summary__header">Feedback Summary</h2>
          {summary ? (
            <div>{summary.summary}</div>
          ) : (
            <p>Click "SUMMARIZE" to see the summary of customer feedback.</p>
          )}
          <div className="comment-button__container">
            {!summary && (
              <button className="button__Summarize" onClick={handleSummarize}>
                SUMMARIZE
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
