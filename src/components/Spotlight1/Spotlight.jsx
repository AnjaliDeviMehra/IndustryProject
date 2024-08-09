import "./Spotlight.scss";
import { Link } from "react-router-dom";

const Spotlight = () => {
  return (
    <div className="spotlight">
      <h2 className="spotlight__title">
        Spotlight selections: discover our top picks
      </h2>
      <div className="spotlight__wrapper">
        <div className="spotlight__card card">
          <div>
            <div className="spotlight__description">
              <img
                src="../../../src/assets/images/plan.svg"
                alt=""
                className="spotlight__icon"
              />
              <div className="spotlight__subtitle">
                <h3>Plan</h3>
                <span className="spotlight__subtitle--2">
                  Learn the basics of Azure: AI Fundamentals
                </span>
              </div>
            </div>
            <div>
              <p className="spotlight__content">
                "Learn about many areas of AI, including machine learning,
                computer vision, natural language processing, and conversational
                AI in this curated set of content and prepare for Exam AI-900."
              </p>
            </div>
          </div>
          <a href="" className="spotlight__link">
            Get started
          </a>
        </div>

        <div className="spotlight__card card">
          <div>
            <div className="spotlight__description">
              <img
                src="../../../src/assets/images/azure-openai-icon.svg"
                alt=""
                className="spotlight__icon"
              />
              <div className="spotlight__subtitle">
                <h3>AI Empowerment Hub</h3>
                <span className="spotlight__subtitle--2">
                  Explore AI Use Cases
                </span>
              </div>
            </div>
            <div>
              <p className="spotlight__content">
                Discover tailored AI solutions for your industry. Learn how to
                integrate AI into your business processes with easy-to-follow
                guides and success stories.
              </p>
            </div>
          </div>
          <Link to="http://localhost:5173/industry" className="spotlight__link">
            Get started
          </Link>
        </div>

        <div className="spotlight__card card">
          <div>
            <div className="spotlight__description">
              <img
                src="../../../src/assets/images/copilot-icon.png"
                alt=""
                className="spotlight__icon"
              />
              <div className="spotlight__subtitle">
                <h3>Copilot learning hub</h3>
                <span className="spotlight__subtitle--2">
                  Learn to use Copilot
                </span>
              </div>
            </div>
            <div>
              <p className="spotlight__content">
                "Explore curated content on Microsoft Copilot for technical
                professionals to leverage AI technology and enhance
                productivity."
              </p>
            </div>
          </div>
          <a
            href="https://learn.microsoft.com/en-us/copilot/"
            target="_blank"
            className="spotlight__link"
          >
            Start your Copilot learning journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
