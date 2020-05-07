import React from "react";

import "./styles.css";

function Cadastro() {
  return (
    <div className="container">
      <h3>Cadastro de Aluno</h3>
      <form>
        <div className="row">
          {/* <span>Nome</span> */}
          <input placeholder="Nome" />
        </div>
        <div className="row">
          {/* <span>Matrícula</span> */}
          <input placeholder="Matrícula" />
        </div>
        <div className="row">
          {/* <span>E-mail</span> */}
          <input placeholder="Nome" />
        </div>
        <div className="row">
          {/* <span>Senha</span> */}
          <input placeholder="Senha" />
        </div>
        <div className="row">
          {/* <span>Confirme a senha</span> */}
          <input placeholder="Confirme a senha" />
        </div>
        <div className="row button">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
