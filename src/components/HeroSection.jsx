import React from "react";
import LightImg from "../assets/lampLight.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <h1>Welcome to Mentoons Quiz</h1>
        <p style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          Discover, learn, and have fun with our interactive quizzes on
          inventions, inventors, and murder mysteries.
        </p>
        <button style={{ margin: "2rem" }} className="button-50" role="button">
          Start Quizzing Now
        </button>
      </div>
      <img style={{width:"200px",height:"300px"}} src={LightImg} />
    </section>
  );
};

export default HeroSection;
