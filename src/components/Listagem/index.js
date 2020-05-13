import React, { useEffect, useState } from "react";

import api from "../../services/api";

import Editar from "../Editar";

function Listagem() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Listagem de usuários</h3>

      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>Email</th>
            <th>Name</th>
            <th>Username</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => setCurrentUser(user)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {currentUser && <Editar usuario={currentUser} />}
    </div>
  );
}

export default Listagem;
