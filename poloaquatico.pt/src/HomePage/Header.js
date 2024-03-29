import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="masthead bg-primary text-white text-center pt-5">
      <div className="container">
        <Logo className="img-fluid d-block mx-auto mb-5"></Logo>
        <h1 className="homePage-title">
          poloaquatico.pt<sup style={{ fontSize: 3 + "vw" }}> BETA</sup>
        </h1>
        <hr className="star-light" />
        <h2 className="font-weight-light mb-0">
          O melhor website sobre pólo aquático em Portugal!
        </h2>
      </div>
    </header>
  );
};

export default Header;
