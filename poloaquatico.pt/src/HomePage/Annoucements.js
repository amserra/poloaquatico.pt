import React from "react";
import Container from "react-bootstrap/Container";

const Annoucements = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Container>
        <h2 className="text-uppercase text-center text-secondary">Anúncios</h2>
        <hr className="star-dark mb-5" />
        <h5 className="text-center font-weight-light">
          <p>Procuram-se colaboradores para lançar notícias e artigos.</p>
          <p>Envie-nos as suas melhores fotografias!</p>
          <p>
            Aceitam-se sugestões de melhoria e de novas funcionalidades, assim
            como reportar de erros.
          </p>
          <p>Contacte-nos através do formulário abaixo!</p>
        </h5>
      </Container>
    </section>
  );
};

export default Annoucements;
