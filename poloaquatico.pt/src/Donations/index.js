import React from "react";

const Donations = () => {
  return (
    <div className="page container">
      <h1 className="text-center mt-5">Porquê doar?</h1>
      <hr className="star-dark" />
      <h3 className="font-weight-light text-left">
        Não é necessário fazer uma doação para poder utilizar este website.
        Todas as funcionalidades estão disponíveis de forma gratuita.
      </h3>
      <h3 className="font-weight-light text-left mt-2">
        As doações servem para apoiar este projeto. De uma forma transparente,
        estas serão alocadas aos seguintes pontos:
      </h3>
      <h4 className="font-weight-light text-left mt-4">
        <ul>
          <li>Manutenção do domínio do website (poloaquatico.pt)</li>
          <li>
            Pagamento da base de dados e tecnologias associadas (é utilizada a
            Firebase no plano
            <a href="https://firebase.google.com/pricing/"> Blaze</a>)
          </li>
          <li>
            Incentivo ao criador do projeto para continuar a introduzir
            melhorias e novas funcionalidades
          </li>
        </ul>
      </h4>
      <h3 className="font-weight-light text-left mt-2">
        Para os interessados, as doações poderão ser feitas com PayPal,
        acessível através do botão abaixo. Qualquer montante é aceite e
        bem-vindo!
      </h3>

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
        className="text-center mt-5 mb-4"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="J5Y6J53C2GQ5L" />
        <input
          type="image"
          src="https://www.paypalobjects.com/pt_PT/PT/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Faça donativos com o botão PayPal"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/pt_PT/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </div>
  );
};

export default Donations;
