import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Sidebar";
const PrivateLayout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
