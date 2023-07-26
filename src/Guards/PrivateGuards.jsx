import { Outlet,Navigate } from "react-router-dom";
import LocalStorageService from "../Services/LocalStorage";
import PrivateLayout from "../Layouts/PrivateLayout";
const PrivateGuard = () => {
 let token = LocalStorageService.getAccessToken('access_token');
 return (
  (token===null)?
  <Navigate to="/login"/>:
  <PrivateLayout>
  <Outlet/>
</PrivateLayout>
)
};

export default PrivateGuard;
