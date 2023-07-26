import { Formik, Form } from "formik";
import * as Yup from "yup";
import Formikcontrol from "../Components/Common/FormikControl";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { loginSuccess } from "../Stores/toolkits/authSlice";
import { useTranslation } from "react-i18next";
import {
  MUIBox,
  MUIButton,
  MUITypography,
} from "../Components/MUI-Component/index";
import { emailRegex, passwordRegex } from "../Regex";
import { Link } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [initialValues] = useState({
    email: "amankukreti@yopmail.com",
    password: "Admin@12345",
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .matches(emailRegex, "Invalid email")
      .required("Email is Required!"),
    password: Yup.string()
      .matches(passwordRegex, "Invalid password")
      .required("Password is Required!"),
  });

  const onSubmit = async (values) => {
    dispatch(loginSuccess(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => {
          return (
            <MUIBox className="form-container">
              <MUIBox className="form-header">
                <MUITypography variant="h5" className="head-font">
                  {t("Login to Your Account")}
                </MUITypography>
                <MUITypography variant="subtitle2" className="subtitle">
                  {t("Login Your registered email and password")}
                </MUITypography>
              </MUIBox>
              <Form>
                <Formikcontrol
                  control="input"
                  type="email"
                  name="email"
                  label={t("Email")}
                  className="form-control"
                />

                <Formikcontrol
                  control="input"
                  type="password"
                  name="password"
                  className="form-control"
                  label={t("Password")}
                />
                <MUIBox className="page-redirect">
                  <Link to="/forget-password">{t("Forgot Password?")}</Link>
                </MUIBox>
                <MUIBox className="submitBtn">
                  <MUIButton
                    type="submit"
                    variant="contained"
                    onSubmit={onSubmit}
                  >
                    Login
                  </MUIButton>
                </MUIBox>
              </Form>
            </MUIBox>
          );
        }}
      </Formik>
      <ToastContainer />
    </>
  );
};

export default Login;
