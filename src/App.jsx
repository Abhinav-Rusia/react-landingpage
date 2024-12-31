import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import RocketMan from "../src/assets/rocketman.png";
import heroImg from "../src/assets/hero.png";

const App = () => {
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
        style = {'translate-x-[-40px]'}
      />

      <Services />

      <Hero
        reverse={true}
        image={RocketMan}
        h1={"Launch your website faster with a new logo from "}
        p={
          "Bring your brand to life with a custom-designed logo that speaks volumes.Whether you're starting fresh or redesigning, we've got you covered."
        }
        aboutlabel={"Llama Logo"}
        placeholder="Stay in the loop! Enter your email..."
        style = {'translate-x-[20px]'}

      />
    </>
  );
};

export default App;
