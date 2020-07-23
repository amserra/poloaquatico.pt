import React from "react";
import Container from "react-bootstrap/Container";

const Annoucements = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="text-uppercase text-center text-secondary">Anúncios</h2>
        <hr className="star-dark mb-5" />
        <h5 className="text-center font-weight-light">
          Procuram-se colaboradores!
        </h5>
        <h5 className="text-center font-weight-light">
          Aceitam-se sugestões de melhoria e de novas funcionalidades.
        </h5>
        <h5 className="text-center font-weight-light">
          Contacte-nos através do formulário abaixo.
        </h5>
      </Container>
    </section>
  );
};

export default Annoucements;
