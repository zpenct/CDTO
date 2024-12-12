import { Outlet, Navigate } from "react-router-dom";
import NavbarHeader from "../components/layout/navbar";

const ProtectedRoutes = () => {
  const loggedUser = localStorage.getItem("user");
  return loggedUser ? (
    <>
      <NavbarHeader />
      <Outlet />
    </>
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoutes;
