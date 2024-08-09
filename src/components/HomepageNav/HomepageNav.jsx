import "./HomepageNav.scss";

const HomepageNav = () => {
  return (
    <div className="navigation-section">
      <a href="#ai-by-industry" className="navigation-section__item">
        <img
          src="../../../src/assets/images/icon.png"
          alt=""
          className="navigation-section__icon"
        />
        <span className="navigation-section__text">AI by Industry</span>
      </a>
      <a href="#skills-for-organizations" className="navigation-section__item">
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
        <span className="navigation-section__text">Featured documentation</span>
      </a>
    </div>
  );
};

export default HomepageNav;
