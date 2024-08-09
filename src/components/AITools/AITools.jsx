import React from "react";
import "./AITools.scss";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import { Link } from "react-router-dom";

export const AITools = () => {
  const cardList = [
    {
      title: "Customer Feedback Summarizer",
      image: card1,
      info: "A Customer Feedback Summarizer is a tool that helps you quickly understand what your customers are saying. It takes all the feedback you receive—whether it’s from reviews, emails, or surveys—and condenses it into a simple summary. This way, you can get the main points without having to read through every single comment.",
      button: "Get Started",
      buttonLink: "/demo",
    },
    {
      title: "Personalized Customer Recommentations",
      image: card2,
      info: "Boost engagement with AI-powered, tailored suggestions that drive conversions and enhance satisfaction. Elevate customer interactions with personalized, impactful recommendations.",
      button: "Read the paper",
      buttonLink: "/",
    },
    {
      title: "Copilot for executives Plan",
      image: card3,
      info: "Discover how Microsoft Copilot for Microsoft 365 elevates workplace productivity and innovation through this experience tailored for the modern business leader.",
      button: "Start now",
      buttonLink: "/",
    },
    {
      title: "Microsoft Learn for Organizations",
      image: card4,
      info: "Drive success and innovate with AI by boosting your team's technical skills. Find curated resources to support your learning culture, jump-start your team training, and propel your business forward.",
      button: "Explore today",
      buttonLink: "/",
    },
  ];

  return (
    <div>
      <section className="ai-tools">
        <div className="hero">
          <div className="hero__details">
            <h2 className="hero__title">Build Retail AI Tools</h2>
            <p className="hero__info">
              Retail AI Tools leverage artificial intelligence to transform
              retail operations. They offer predictive analytics for inventory,
              personalized recommendations, and smart chatbots, optimizing
              supply chain management and enhancing customer experiences.
              Explore how to build the skills needed to accelerate AI
              implementation at scale.
            </p>
          </div>
        </div>

        <ul className="card__list">
          {cardList.map((card) => (
            <li className="card">
              <img className="card__image" src={card.image} alt="" />
              <h3 className="card__title">{card.title}</h3>
              <p className="card__info">{card.info}</p>
              <Link to={card.buttonLink} className="card__button">
                {card.button}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
