import React from "react";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStarted/GetStarted";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Companies from "../components/Companies/Companies";
import Contact from "../components/Contact/Contact";
import MessageForm from "../components/MessageForm/MessageForm";

const LandingPage = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <MessageForm />
      <Footer />
    </div>
  );
};

export default LandingPage;
