import React, {useState, useRef, useEffect} from "react";

import api from '../../services/api';

import "./styles.css";

function Cadastro() {
  const valorInicial = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  }

  const [user, setUser] = useState(valorInicial)
  const [messageError, setMessageError] = useState(null);
  const [responseError, setResponseError] = useState(null);

  const ref = useRef(null);

  useEffect(() => {
    console.log(ref)
    if(ref.current) {
      ref.current.focus()
    }

    const input = document.getElementsByName('name')[0];
    input.focus();
  }, [])

  function handleChange(e) {
    // ref.current.focus();
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function verificaSenha() {
    if(user.confirm_password !== user.password) {
      setMessageError('Senhas diferentes!')
    }else {
      setMessageError(null)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    api.post('users', user)
    .then(response => console.log(response))
    .catch(error => {
      console.log(error.response)
      setResponseError('Erro ao cadastrar usuário')
    })

  }   

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h3>Cadastro de Usuário</h3>

        <span className="errorResponse">{responseError}</span>

        <div className="row">
          <input name="name" 
          autoFocus
             value={user.name} 
             onChange={handleChange}
             placeholder="Nome" />
        </div>
        <div className="row">
          <input 
            name="username" 
            onChange={handleChange}
            value={user.username} placeholder="Username" />
        </div>
        <div className="row">
          <input name="email" 
            value={user.email} 
            onChange={handleChange}
            placeholder="E-mail" />
        </div>
        <div className="row">
          <input name="password" 
            value={user.password} 
            onChange={handleChange}
            placeholder="Senha" />
        </div>
        <div className="row">
          <input name="confirm_password"
          className={messageError && 'errorMessage'}
            onChange={handleChange}
            onBlur={verificaSenha}
            value={user.confirm_password}
            placeholder="Confirme a senha" />
        </div>
        {messageError && <div className="row">
          <strong>{messageError}</strong>
        </div>}
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
