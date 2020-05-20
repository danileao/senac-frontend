import { useContext } from "react";

import { UserContext } from "../components/Context/UserContext";

const UserHook = () => {
  const context = useContext(UserContext);

  return context;
};

export default UserHook;
