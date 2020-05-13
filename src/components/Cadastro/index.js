import React, { useState, useRef, useEffect, useCallback } from "react";

import { useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";
/**
 * history => react-router-dom
 */

/**
 * useState => criar um estado
 * useEffect => função chama no início e quando quiser
 * atualizar alguma variável
 * useRef => Referencia de um componente HTML
 *
 * useCallback => Memorizar função
 */

function Cadastro() {
  const valorInicial = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const [user, setUser] = useState(valorInicial);
  const [messageError, setMessageError] = useState(null);
  const [responseError, setResponseError] = useState(null);

  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    console.log(ref);
    if (ref.current) {
      ref.current.focus();
    }

    const input = document.getElementsByName("name")[0];
    input.focus();
  }, []);

  const handleChange = useCallback(
    (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );

  const verificaSenha = useCallback(() => {
    if (user.confirm_password !== user.password) {
      setMessageError("Senhas diferentes!");
    } else {
      setMessageError(null);
    }
  }, [user.confirm_password, user.password]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      api
        .post("users", user)
        .then((response) => history.push("/listagem"))
        .catch((error) => {
          console.log(error.response);
          setResponseError(error.response.data);
        });
    },
    [history, user]
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Cadastro de Usuário</h3>

        <span className="errorResponse">{responseError}</span>

        <div className="row">
          <input
            name="name"
            autoFocus
            value={user.name}
            onChange={handleChange}
            placeholder="Nome"
          />
        </div>
        <div className="row">
          <input
            name="username"
            onChange={handleChange}
            value={user.username}
            placeholder="Username"
          />
        </div>
        <div className="row">
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
            placeholder="E-mail"
          />
        </div>
        <div className="row">
          <input
            name="password"
            autoComplete="new-password"
            type="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Senha"
          />
        </div>
        <div className="row">
          <input
            name="confirm_password"
            type="password"
            className={messageError && "errorMessage"}
            onChange={handleChange}
            onBlur={verificaSenha}
            value={user.confirm_password}
            placeholder="Confirme a senha"
          />
        </div>
        {messageError && (
          <div className="row">
            <strong>{messageError}</strong>
          </div>
        )}
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
