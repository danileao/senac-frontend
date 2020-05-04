import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const valorInicial = {
    nome: "",
    email: "",
    usuario: "",
  };
  const [aluno, setAluno] = useState(valorInicial);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    // populaAluno();

    function populaAluno() {
      setAluno({
        nome: "Daniele",
        usuario: "daniele",
        email: "dani.leao89@gmail.com",
      });
    }
  }, []);

  //map => recebe um array, transforma esse array, ele retorna um novo array
  // const alunos = [
  //   {id: 1, nome: 'Jose'},
  //   {id: 2, nome: 'Manuel'}
  // ];

  // // O aluno 1 tem o nome Jose
  // alunos.map(aluno => {
  //   // return "O aluno " + aluno.id + " tem o nome " + aluno.nome
  //   return `O aluno ${aluno.id} tem o nome ${aluno.nome}`
  // })
  // console.log(alunos)

  /* 
  Filter 

  */

  //  const alunosMapp = [
  //      {id: 1, nome: 'Jose'},
  //      {id: 2, nome: 'Manuel'}
  //    ];

  //    alunosMapp.filter(aluno => )

  function handleCadastrar(e) {
    e.preventDefault();
    // console.log(aluno);
    const alunosMap = [...alunos, aluno];
    setAlunos(alunosMap);

    // Limpar variavel aluno

    setAluno(valorInicial);
  }

  function handleChange(event) {
    setAluno({
      ...aluno,
      [event.target.name]: event.target.value,
    });
  }

  function editarAluno(aluno) {
    setAluno(aluno);
  }

  function editarNovoAluno() {
    console.log(aluno);
    const indexAluno = alunos.findIndex((a) => a.email === aluno.email);

    alunos[indexAluno] = aluno;
    setAlunos([...alunos]);
  }

  return (
    <>
      <form className="formulario" onSubmit={handleCadastrar}>
        <h3>Cadastro de Aluno</h3>
        <div className="row">
          <span>Nome</span>
          <input
            type="text"
            name="nome"
            value={aluno.nome}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <span>Usuário</span>
          <input
            type="text"
            name="usuario"
            value={aluno.usuario}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <span>E-mail</span>
          <input
            type="text"
            name="email"
            // readOnly // if email preenchido deixar readonly
            value={aluno.email}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <button>Cadastrar </button>
          <button type="button" onClick={editarNovoAluno}>
            Editar
          </button>
        </div>
      </form>

      <hr />
      <h2>Listagem de alunos</h2>

      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.email}>
            <span>Nome:</span> {aluno.nome}
            <br />
            <span>Usuário:</span> {aluno.usuario}
            <br />
            <span>E-mail:</span> {aluno.email}
            <br />
            <button onClick={() => editarAluno(aluno)}>Editar Aluno</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
