import React, { useCallback, useState, useEffect } from "react";

import "./styles.css";

function Editar({ usuario }) {
  console.log(usuario);
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    _id: "",
  });

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

  return (
    <div className="modal">
      <span>E-mail</span>
      <input
        type="text"
        onChange={handleChange}
        name="email"
        value={user.email}
        readOnly
      />

      <span>Name</span>
      <input onChange={handleChange} name="name" value={user.name} />

      <span>Username</span>
      <input onChange={handleChange} name="username" value={user.username} />
    </div>
  );
}

export default Editar;
