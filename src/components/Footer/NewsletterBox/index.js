import { useState } from "react";
import { FlexColumnContainer } from "../styles";
import { NewsletterContainer } from "./styles";

const NewsletterBox = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscrito como ${name} e ${email}`);
    setName("");
    setEmail("");
  };

  return (
    <NewsletterContainer>
      <FlexColumnContainer>
        <h1>Cadastre-se e receba nossa newsletter!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </FlexColumnContainer>
    </NewsletterContainer>
  );
};

export default NewsletterBox;
