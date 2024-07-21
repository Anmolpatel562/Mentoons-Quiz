import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Categories from "./components/Categories";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import camera from "./assets/camera.jpg";
import clock from "./assets/clock.jpg";
import fan from "./assets/fan.jpg";
import joyStick from "./assets/joyStick.jpg";
import knife from "./assets/knife.jpg";
import light from "./assets/light.jpg";
import mic from "./assets/mic.jpg";
import printer from "./assets/printer.jpg";
import sanatary from "./assets/sanatary.jpg";
import specs from "./assets/specs.jpg";
import telephone from "./assets/telephone.jpg";
import tv from "./assets/tv.jpg";

const items = [
  {
    id: 1,
    name: "Camera",
    frontImg: camera,
  },
  {
    id: 2,
    name: "Clock",
    frontImg: clock,
  },
  {
    id: 3,
    name: "Fan",
    frontImg: fan,
  },
  {
    id: 4,
    name: "Joy Stick",
    frontImg: joyStick,
  },
  {
    id: 5,
    name: "Knife",
    frontImg: knife,
  },
  {
    id: 6,
    name: "Light",
    frontImg: light,
  },
  {
    id: 7,
    name: "Mic",
    frontImg: mic,
  },
  {
    id: 8,
    name: "Printer",
    frontImg: printer,
  },
  {
    id: 9,
    name: "Sanitary",
    frontImg: sanatary,
  },
  {
    id: 10,
    name: "Specs",
    frontImg: specs,
  },
  {
    id: 11,
    name: "Telephone",
    frontImg: telephone,
  },
  {
    id: 12,
    name: "TV",
    frontImg: tv,
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div id="about-section">
        <About />
      </div>
      <div id="categories-section">
        <Categories items={items} />
      </div>
      <div id="how-it-works-section">
        <HowItWorks />
      </div>
      <div id="benefits-section">
        <Benefits />
      </div>
      <div id="testimonials-section">
        <Testimonials />
      </div>
      <div id="call-to-action-section">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default App;
