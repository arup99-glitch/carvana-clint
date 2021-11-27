import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
/* useAuth hooks, to used in all over the site */

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
