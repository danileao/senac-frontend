import React from "react";

import "./styles.css";

function Cadastro() {
  return (
    <div className="container">
      <form>
        <h3>Cadastro de Aluno</h3>
        <div className="row">
          <span>Nome</span>
          <input />
        </div>
        <div className="row">
          <span>Matrícula</span>
          <input />
        </div>
        <div className="row">
          <span>E-mail</span>
          <input />
        </div>
        <div className="row">
          <span>Senha</span>
          <input />
        </div>
        <div className="row">
          <span>Confirme a senha</span>
          <input />
        </div>
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
