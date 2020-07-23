import React from "react";
import Header from "./Header";
import Annoucements from "./Annoucements";
import About from "./About";
import ContactForm from "./ContactForm";
import Footer from "../Layout/Footer";
import "../style/homePage.css";
// rafce
const HomePage = () => {
  return (
    <div className="page">
      <Header></Header>
      <Annoucements></Annoucements>
      <About></About>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
