import React from "react";
import "../style/page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div id="main" className="page">
      <div className="fof">
        <h1 className="fof-h1-1 font-weight-light">
          Erro 404 - Página não encontrada
        </h1>
        <Link to="/" className="text-decoration-none">
          <h1 className="fof-h1-2 font-weight-light mt-5">Home</h1>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
