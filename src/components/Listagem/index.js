import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";

import api from "../../services/api";

import Editar from "../Editar";

import { UserContext } from "../Context/UserContext";

function Listagem() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const userContext = useContext(UserContext);
  console.log(userContext);

  /**
   * useMemo => memorizar um valor
   * users.length => Tamanho do array
   */

  const loadUsers = useCallback(() => {
    api
      .get("/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const callBackEdit = (dataFromChild) => {
    const { tipoAcao } = dataFromChild;

    if (tipoAcao === "sucessoEdit") {
      loadUsers();
      setCurrentUser(null);
    } else if (tipoAcao === "closeModal") {
      setCurrentUser(null);
    }
  };

  const memoUserLength = useMemo(() => {
    return users.length;
  }, [users]);

  return (
    <div>
      <h3>Listagem de usuários</h3>
      <h1>Quantidade de usuários {memoUserLength}</h1>

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

      {currentUser && <Editar usuario={currentUser} callBack={callBackEdit} />}
    </div>
  );
}

export default Listagem;
