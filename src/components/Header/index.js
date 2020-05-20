import React from "react";

import "./styles.css";

import userHooks from "../../hooks/userHooks";

function Header() {
  const { usuario } = userHooks();

  return (
    <header>
      <nav>
        <a href="/home">Home</a>
        <a href="/cadastro">Cadastro</a>
        <a href="/listagem">Listagem</a>
      </nav>

      <span>Seja bem vindo(a) {usuario} </span>
    </header>
  );
}

export default Header;
