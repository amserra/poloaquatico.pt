import React from "react";
import Header from "./Header";
import BestBetters from "./BestBetters";
import About from "./About";
import ContactForm from "./ContactForm";
import Footer from "../Layout/Footer";
import "../style/homePage.css";
// rafce
const HomePage = () => {
  return (
    <div>
      <Header></Header>
      <BestBetters></BestBetters>
      <About></About>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
