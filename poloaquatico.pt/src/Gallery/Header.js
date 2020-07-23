import React from "react";

const Header = () => {
  return (
    <header className="text-center mt-5 mb-5">
      <div className="container">
        <h1 className="text-uppercase text-center text-secondary">Galeria</h1>
        <hr className="star-dark mb-5"></hr>
        <h2 className="font-weight-light mb-0">
          Este espaço é dedicado às melhores fotografias enviadas pelos nossos
          seguidores (enviar para{" "}
          <a href="mailto:poloaquatico.pt@gmail.com">
            poloaquatico.pt@gmail.com
          </a>
          )
        </h2>
      </div>
    </header>
  );
};

export default Header;
