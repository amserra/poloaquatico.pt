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
              formar o, mais que necessário, website dedicado ao pólo aquático
              português.
            </p>
          </div>
          <div className="col-lg-4 mr-auto">
            <p className="lead">
              Pretendemos que este espaço seja de e para toda a comunidade do
              pólo aquático em Portugal. Todos se podem juntar e ajudar.
            </p>
          </div>
        </div>

        {/* pode ser para doar? <div className="text-center mt-4">
            <a className="btn btn-outline-light btn-xl" role="button" href="#">
              <i className="fa fa-download mr-2" />
              <span>Download Now!</span>
            </a>
          </div> */}
      </div>
    </section>
  );
};

export default About;
