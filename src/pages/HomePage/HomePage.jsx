import React from "react";
import "./Homepage.scss";

export const HomePage = () => {
  return (
    <>
      <div className="hero">
        <div>
          <h3>MICROSOFT LEARN</h3>
          <h1>AI learning hub</h1>
        </div>
        <p>
          Microsoft Learn is your trusted source to help you get skilled up and
          ready to power AI transformation with the Microsoft Cloud.
        </p>
      </div>
      <div className="navigation-section">
        <a href="#ai-by-industry" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">AI by Industry</span>
        </a>
        <a
          href="#skills-for-organizations"
          className="navigation-section__item"
        >
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">
            Skills for organizations
          </span>
        </a>
        <a href="#training-events" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">Training events</span>
        </a>
        <a
          href="#training-services-partners"
          className="navigation-section__item"
        >
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">
            Training Services Partners
          </span>
        </a>
        <a href="#official-plans" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">Official Plans</span>
        </a>
        <a href="#ai-by-technology" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">AI by technology</span>
        </a>
        <a href="#ai-by-role" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">AI by role</span>
        </a>
        <a href="#credentials" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">Credentials</span>
        </a>
        <a href="#featured-documentation" className="navigation-section__item">
          <img
            src="../../../src/assets/images/icon.png"
            alt=""
            className="navigation-section__icon"
          />
          <span className="navigation-section__text">
            Featured documentation
          </span>
        </a>
      </div>

      <div className="spotlight">
        <h1 className="spotlight__title">
          Spotlight selections: discover our top picks
        </h1>
        <div className="spotlight__wrapper">
          <div className="spotlight__card">
            <div>
              <img
                src="../../../src/assets/images/plan.svg"
                alt=""
                className="spotlight__icon"
              />{" "}
              <div>
                {" "}
                <span>Plan</span>
                <span>Learn the basics of Azure: AI Fundamentals</span>
              </div>
              <div>
                <p>
                  "Learn about many areas of AI, including machine learning,
                  computer vision, natural language processing, and
                  conversational AI in this curated set of content and prepare
                  for Exam AI-900."
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="spotlight__card">
            <div>
              <img
                src="../../../src/assets/images/azure-openai-icon.svg"
                alt=""
                className="spotlight__icon"
              />
              <span>Plan</span>
              <span>Learn the basics of Azure: AI Fundamentals</span>
              <div>
                <p>
                  "Learn about many areas of AI, including machine learning,
                  computer vision, natural language processing, and
                  conversational AI in this curated set of content and prepare
                  for Exam AI-900."
                </p>
              </div>
            </div>
          </div>
          <div className="spotlight__card">
            <div>
              {" "}
              <img
                src="../../../src/assets/images/copilot-icon.png"
                alt=""
                className="spotlight__icon"
              />
              <span>Plan</span>
              <span>Learn the basics of Azure: AI Fundamentals</span>
              <div>
                <p>
                  "Learn about many areas of AI, including machine learning,
                  computer vision, natural language processing, and
                  conversational AI in this curated set of content and prepare
                  for Exam AI-900."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
