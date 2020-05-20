import React, { useState } from "react";

import userHook from "../../hooks/userHooks";

import { Container, Input } from "./styles";

function Home() {
  const { adicionaUsuario } = userHook();
  const [nomeUsuario, setNomeUsuario] = useState();

  return (
    <Container>
      <Input
        placeholder="Nome do usuário"
        onChange={(e) => setNomeUsuario(e.target.value)}
      />

      <Input isEmail placeholder="Email do usuario" />

      <button onClick={() => adicionaUsuario(nomeUsuario)}>
        Adicionar nome do usuário
      </button>
    </Container>
  );
}

export default Home;
