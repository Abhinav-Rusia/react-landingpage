import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import RocketMan from "../src/assets/rocketman.png";
import heroImg from "../src/assets/hero.png";
import Team from "../src/assets/team.png";
import clock from "../src/assets/clock.png";
import browsing from "../src/assets/browsing.png";
import rocket from "../src/assets/rocket.png";
import lego from "../src/assets/lego.png";
import font from "../src/assets/font.png";
import diamond from "../src/assets/diamond.png";

const App = () => {
  const servicesData = [
    {
      id: 1,
      image: clock,
      title: "Real logo, Real fast",
      description:
        "From concept to reality in no time. Logos that make an impact.",
    },
    {
      id: 2,
      image: browsing,
      title: "Do it yourself",
      description:
        "Take control of your brand's identity—create your perfect logo effortlessly and on your terms.",
    },
    {
      id: 3,
      image: rocket,
      title: "Get website-ready logos",
      description:
        "Design logos that look stunning on any website—quick, easy, and tailored for your brand.",
    },
  ];
  const servicesData2 = [
    {
      id: 1,
      image: lego,
      title: "Easy To Use",
      description:
        "Craft countless unique logos that perfectly represent your brand, designed to seamlessly align with your identity and vision.",
    },
    {
      id: 2,
      image: font,
      title: "Quality Fonts",
      description:
        "Transform your logo with premium fonts that perfectly capture your brand's essence and make a lasting impression.",
    },
    {
      id: 3,
      image: diamond,
      title: "Quality Icons",
      description:
        "Enhance your logo with meticulously crafted icons that speak volumes about your brand’s identity.",
    },
  ];
  return (
    <>
      <Navbar />

      <Hero
        image={heroImg}
        h1={" Build your brand story with a custom logo."}
        p={
          " A delightful new way to make logos for your internet startup. It's time to stand out and create a lasting impression."
        }
        h2={"Coming"}
        span={"Soon"}
        placeholder="Enter your email..."
        style={"translate-x-[-40px]"}
        button={"Notify Me"}
        showInput={true}
      />

      <Services servicesData={servicesData} />

      <Hero
        reverse={true}
        image={RocketMan}
        h1={"Launch your website faster with a new logo from "}
        p={
          "Bring your brand to life with a custom-designed logo that speaks volumes.Whether you're starting fresh or redesigning, we've got you covered."
        }
        aboutlabel={"Llama Logo"}
        placeholder="Stay in the loop! Enter your email..."
        style={"translate-x-[20px]"}
        button={"Notify Me"}
        showInput={true}
      />

      <Services servicesData={servicesData2} />

      <Hero
        reverse={false}
        image={Team}
        h1={`Save time\n Save Money\n Do it your way!`}
        p={
          "Save time and money while staying in control. Create your way, effortlessly and effectively."
        }
        style={"translate-x-[-40px]"}
        button={"Know More"}
        showInput={false}
      />
    </>
  );
};

export default App;
