import React from "react";

const ContactForm = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary mb-0">
          Sugestões? Diga-nos!
        </h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Nome (opcional)"
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="Email (opcional)"
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-5 pb-2">
                  <textarea
                    className="form-control"
                    id="message"
                    required
                    placeholder="Mensagem"
                    rows={4}
                  />
                  <small className="form-text text-danger help-block" />
                </div>
              </div>
              <div id="success" />
              <div className="form-group">
                <button
                  className="btn btn-primary btn-xl"
                  id="sendMessageButton"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
