import React from "react";
import inConstruction from "../assets/paginaEmConstrucao.png";

const Bets = () => {
  return (
    <div className="page container">
      <img
        className="img-fluid mx-auto d-block mt-5"
        src={inConstruction}
        alt="Pagina em construcao"
      ></img>
      <h2 className="text-center font-weight-normal mt-5">
        A ideia principal desta secção é ter um sistema de apostas amigáveis. O
        utilizador terá a capacidade de apostar nos jogos da próxima jornada, em
        termos de golos e resultado (inicialmente). Haverá um ranking de
        melhores apostadores e prémios para os melhores.
      </h2>
    </div>
  );
};

export default Bets;
