import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-primary text-white mb-0">
      <div className="container">
        <h2 className="text-uppercase text-center text-white">Sobre nós</h2>
        <hr className="star-light mb-5" />
        <div className="row">
          <div className="col-lg-4 ml-auto">
            <p className="lead">
              Somos um grupo de apaixonados por pólo aquático que se juntou para
              formar o mais que necessário website dedicado ao pólo aquático
              português.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Pretendemos que este espaço seja de e para toda a comunidade do
              pólo aquático em Portugal. É nosso objetivo elevar a dimensão do
              pólo aquático em Portugal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
