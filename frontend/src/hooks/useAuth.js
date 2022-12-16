import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import EmployeeContext from "../context/EmployeeContext";

const useAuth = () => {
  const { user, token, employee } = useContext(AuthContext, EmployeeContext);
  return [ user, token, employee ];
};

export default useAuth;
