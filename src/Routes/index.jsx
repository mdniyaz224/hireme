import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/Login";
import Reset from "../Pages/Reset";
import Forgot from "../Pages/Forgot";
import PublicGurad from "../Guards/PublicGuards";
import Institutes from "../Pages/Institutes";
import Dashboard from "../Pages/Dashboard";
import PrivateGuard from "../Guards/PrivateGuards";
import AddForm from "../Pages/AddForm";
import EditForm from "../Pages/EditForm";
import Walk_in from "../Pages/Walk_in";

import CreateTest from "../Pages/CreateTest";
import Result from "../Pages/Result";

import PageNotFound from "../Pages/PageNotFound";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route element={<PublicGurad />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<Forgot />} />
          <Route path="/reset-password" element={<Reset />} />
        </Route>
        {/* ----------------------------------------------- */}
        <Route element={<PrivateGuard />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/institutes" element={<Institutes />} />
          <Route path="/add" element={<AddForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
          <Route path="/Walk_in" element={<Walk_in />} />
          <Route path="/Question_bank" element={<CreateTest />} />
          <Route path="/Result" element={<Result />} />
          {/* <Route path="/test" element={<CreateTest />} /> */}
          <Route path="*" element={<PageNotFound/>} />
        </Route>
      </Routes>
    </>
  );
};

export default index;
