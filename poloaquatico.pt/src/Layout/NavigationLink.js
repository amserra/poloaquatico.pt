import React from "react";
import { Link } from "react-router-dom";
import NavItem from "react-bootstrap/NavItem";

const NavigationLink = (props) => {
  const { to, active, clickHandler, name } = props;
  return (
    <NavItem className="py-lg-3 py-2 px-0 px-lg-3">
      <Link
        to={to}
        id={active ? "navbar-active" : undefined}
        onClick={clickHandler}
        className="nav-link text-white"
      >
        {name}
      </Link>
    </NavItem>
  );
};

export default NavigationLink;
