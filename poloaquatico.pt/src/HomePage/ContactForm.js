import React, { useState } from "react";
import Axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [msg, setMsg] = useState(false);

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-poloaquaticopt.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        setMsg(true);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="text-uppercase text-center text-secondary mb-0">
          Sugestões? Diga-nos!
        </h2>
        <hr className="star-dark mb-5" />
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <form id="contactForm" name="sentMessage" onSubmit={handleSubmit}>
              <div className="control-group">
                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    placeholder="Nome (opcional)"
                    onChange={updateInput}
                    value={formData.name || ""}
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
                    onChange={updateInput}
                    value={formData.email || ""}
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
                    onChange={updateInput}
                    value={formData.message || ""}
                  />
                  <small className="form-text text-danger help-block" />
                </div>
                <div
                  style={{
                    display: msg ? "initial" : "none",
                    paddingBottom: 20,
                  }}
                >
                  <p>Obrigado! Mensagem enviada com sucesso.</p>
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
