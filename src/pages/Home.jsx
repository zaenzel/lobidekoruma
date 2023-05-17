import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Service from "../components/Service/Service";
import WhyUs from "../components/WhyUs/WhyUs";
import Footer from "../components/Footer/Footer";
import Hero2 from "../components/Hero/Hero2";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Service />
      <WhyUs />
      <Footer />
    </>
  );
};

export default Home;
