import "./Spotlight.scss";

const Spotlight = () => {
  return (
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
                computer vision, natural language processing, and conversational
                AI in this curated set of content and prepare for Exam AI-900."
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
              <a
                href="https://learn.microsoft.com/en-us/plans/5m3sokzk2e383"
                className="spotlight__link"
                target="_blank"
              >
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
      </div>
    </div>
  );
};

export default Spotlight;
