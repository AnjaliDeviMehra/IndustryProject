import React from "react";
import Logo from "../../../public/assets/smallLogo.png";
import image from "../../../public/assets/industryHero.png";
import "./IndustryList.scss";

export const IndustryList = () => {
  const data = [
    {
      name: "Healthcare",
      img: "../../../public/assets/stethoscope.png",
    },
    {
      name: "Finance",
      img: "../../../public/assets/investment.png",
    },
    {
      name: "Retail",
      img: "../../../public/assets/shopping-cart.png",
    },
    {
      name: "Manufacturing",
      img: "../../../public/assets/power-plant.png",
    },
    {
      name: "Education",
      img: "../../../public/assets/graduation.png",
    },
    {
      name: "Legal",
      img: "../../../public/assets/legal.png",
    },
    {
      name: "Transportation",
      img: "../../../public/assets/transportation.png",
    },
    {
      name: "Energy",
      img: "../../../public/assets/solar-energy.png",
    },
    {
      name: "Government",
      img: "../../../public/assets/bank-building.png",
    },
  ];
  return (
    <>
      <section className="hero">
        <div className="hero__section1">
          <h1 className="hero__heading">Explore AI Tools By Industry</h1>
          <p className="hero__description">
            Discover how Microsoft AI tools can transform your industry! Our app
            provides tailored insights into industry-specific AI solutions,
            showcasing how Microsoft's powerful technologies can enhance
            productivity and innovation. Explore practical applications, compare
            tools, and find the best fit for your business. With detailed
            overviews and user-friendly guides, unlock the potential of AI and
            drive success in your field.
          </p>
          <p className="hero__date">Edited on 8/8/2024</p>

          <p className="hero__signature">
            Created By
            <img src={Logo} alt="logo" className="hero__logo" />
            Micosoft
          </p>
        </div>
        <div className="hero__section2">
          <img src={image} alt="graphics" className="hero__image" />
        </div>
      </section>
      <section className="info-section">
        <h2 className="info-section__heading">Items in this collection</h2>
        <h3 className="info-section__subheading">
          Let's Explore our AI tools based on your needs
        </h3>
        <p className="info-section__description">
          Leverage our app to streamline your operations with cutting-edge AI
          tools from Microsoft. Gain a competitive edge by accessing specialized
          solutions designed for your industry’s unique challenges. Improve
          decision-making and efficiency through tailored recommendations. Stay
          ahead with actionable insights that drive growth and innovation in
          your business.
        </p>
      </section>
      <ul className="list">
        {data.map((industry) => (
          <li className="card">
            <img src={industry.img} alt="" className="card__image" />
            <h2 className="card__name">{industry.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};
