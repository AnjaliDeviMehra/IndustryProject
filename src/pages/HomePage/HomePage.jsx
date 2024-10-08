import React from "react";
import "./Homepage.scss";
import Spotlight from "../../components/Spotlight1/Spotlight";
import HomepageNav from "../../components/HomepageNav/HomepageNav";
  export const HomePage = () => {
  return (
    <>
    <div className="home__hero hero">
      <div>
        <span className="hero__subtitle">MICROSOFT LEARN</span>
        <h1 className="hero__title">AI learning hub</h1>
      </div>
      <p>
        Microsoft Learn is your trusted source to help you get skilled up and
        ready to power AI transformation with the Microsoft Cloud.
      </p>
    </div>
    <div className="home_wrapper">
      <HomepageNav />
      <Spotlight />
    </div>
    </>
  );
};
