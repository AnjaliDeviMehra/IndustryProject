import React from "react";
import "./Homepage.scss";
import Spotlight from "../../components/Spotlight1/Spotlight";
import HomepageNav from "../../components/HomepageNav/HomepageNav";

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
      <HomepageNav />
      <Spotlight />
    </>
  );
};
