import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <div className="overflow-y-hidden">
      <Navigation />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
