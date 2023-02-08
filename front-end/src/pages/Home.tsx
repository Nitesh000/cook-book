import React from "react";
import Hero from "../components/Hero";
import Header from "./Header";

const Home = () => {
  return (
    <React.Fragment>
      <Header current="home" />
      <section id="hero" className="h-screen">
        <Hero />
      </section>
      <section id="recipies" className="h-screen">
        Featured Recipes section
      </section>
      <section id="about" className="h-screen">
        About Section
      </section>
      <section id="contact" className="h-screen">
        Contact section
      </section>
    </React.Fragment>
  );
};

export default Home;
