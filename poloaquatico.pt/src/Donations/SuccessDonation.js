import React, { useState } from "react";
import "../style/successDonation.css";

const SuccessDonation = () => {
  const [count, setCount] = useState(1);
  const names = [
    "Obrigado",
    "Thank you",
    "Gracias",
    "Grazie",
    "Merci",
    "Danke",
    "Dank u",
    "Tak",
    "Hvala",
    "Mahalo",
  ];

  return (
    <div className="page container text-center mt-5 success-donation">
      <h1
        onAnimationIteration={() => setCount((count + 1) % names.length)}
        className="font-weight-light success-donation-thank mt-5"
      >
        {names[count]}
      </h1>
      <h4 className="font-weight-light mt-5">
        Pela sua doação. Vai nos ajudar muito.
      </h4>

      <h2 className="text-primary mt-5">Viva ao pólo aquático português!</h2>
    </div>
  );
};

export default SuccessDonation;
