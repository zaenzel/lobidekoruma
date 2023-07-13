import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Service from "../components/Service/Service";
import WhyUs from "../components/WhyUs/WhyUs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Carousel from "../components/Carousel/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <WhyUs />
      <Carousel />
      <Footer />
    </>
  );
};

export default Home;
