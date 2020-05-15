import React, { useCallback, useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

function Editar({ usuario, callBack }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    _id: "",
  });

  const history = useHistory();

  useEffect(() => {
    setUser(usuario);
  }, [usuario]);

  const handleChange = useCallback(
    (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    },
    [user]
  );

  const handleSubmit = useCallback(() => {
    const id = user._id;

    api
      .put(`/users/${id}`, user)
      .then((resolve) => {
        callBack({
          tipoAcao: "sucessoEdit",
        });
      })
      .catch((error) => console.log(error));
  }, [callBack, user]);

  return (
    <div className="modal">
      <span>E-mail</span>
      <input
        className="input"
        type="text"
        onChange={handleChange}
        name="email"
        value={user.email}
        readOnly
      />

      <span>Name</span>
      <input
        className="input"
        onChange={handleChange}
        name="name"
        value={user.name || ""}
      />

      <span>Username</span>
      <input
        className="input"
        onChange={handleChange}
        name="username"
        value={user.username || ""}
      />

      <button type="button" className="button" onClick={handleSubmit}>
        Editar
      </button>
      <button
        type="button"
        className="button"
        onClick={() =>
          callBack({
            tipoAcao: "closeModal",
          })
        }
      >
        Fechar
      </button>
    </div>
  );
}

export default Editar;
