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
              <div className="spotlight__description">
                <img
                  src="../../../src/assets/images/plan.svg"
                  alt=""
                  className="spotlight__icon"
                />
                <div>
                  <h3>Plan</h3>
                  <span>Learn the basics of Azure: AI Fundamentals</span>
                </div>
              </div>
              <div>
                <p>
                  "Learn about many areas of AI, including machine learning,
                  computer vision, natural language processing, and
                  conversational AI in this curated set of content and prepare
                  for Exam AI-900."
                </p>
                <a href="" className="spotlight__link">
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div className="spotlight__card">
            <div>
              <div className="spotlight__description">
                <img
                  src="../../../src/assets/images/azure-openai-icon.svg"
                  alt=""
                  className="spotlight__icon"
                />
                <div>
                  <h3>AI Empowerment Hub</h3>
                  <span>Explore AI Use Cases</span>
                </div>
              </div>
              <div>
                <p>
                  Discover tailored AI solutions for your industry. Learn how to
                  integrate AI into your business processes with easy-to-follow
                  guides and success stories.
                </p>
                <a href="" className="spotlight__link">
                  Get started
                </a>
              </div>
            </div>
          </div>

          <div className="spotlight__card">
            <div>
              <div className="spotlight__description">
                <img
                  src="../../../src/assets/images/copilot-icon.png"
                  alt=""
                  className="spotlight__icon"
                />
                <div>
                  <h3>Copilot learning hub</h3>
                  <span>Learn to use Copilot</span>
                </div>
              </div>
              <div>
                <p>
                  "Explore curated content on Microsoft Copilot for technical
                  professionals to leverage AI technology and enhance
                  productivity."
                </p>
                <a href="" className="spotlight__link">
                  Start your Copilot learning journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
