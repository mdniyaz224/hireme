import { Outlet,Navigate } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayout";
import LocalStorageService from "../Services/LocalStorage";
const PublicGurad = () => {
  let token=LocalStorageService.getAccessToken('access_token');
  return (token!==null&&token!==undefined) ? (
    <Navigate to="/institutes" />
  ) : (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );


  // return (
  //   <>
  //     <PublicLayout>
  //       <Outlet />
  //     </PublicLayout>
  //   </>
  // );
};

export default PublicGurad;
