import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Formikcontrol from "../Components/Common/FormikControl";
import {
  MUIBox,
  MUIButton,
  MUITypography,
} from "../Components/MUI-Component/index";
import { useDispatch } from "react-redux";
import { forgotSuccess } from "../Stores/toolkits/forgotSlice";
import { emailRegex } from "../Regex";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Forgot = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const initialValues = {
    email: "amankukreti@yopmail.com",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .matches(emailRegex, "Invalid email")
      .required("Email is Required!"),
  });

  const onSubmit = async (values) => {
    
    dispatch(forgotSuccess(values));
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
                <MUITypography variant="h5">{t("Forget Password")}</MUITypography>
                <MUITypography variant="subtitle2">
                  {t("Please enter your registered e-mail to reset your password")}
                </MUITypography>
              </MUIBox>
              <Form>
                <Formikcontrol
                  control="input"
                  type="email"
                  placeholder="Email"
                  name="email"
                 label= {t("Enter your email address")}
                  className="form-control"
                />
                <MUIBox className="submitBtn">
                  <MUIButton
                    type="submit"
                    variant="contained"
                    onSubmit={onSubmit}
                  >
                    
                    {t("Submit")}
                  </MUIButton>
                </MUIBox>
                <MUIBox className="page-redirect text-center">
                  <Link to="/login">{t("Back to login")}</Link>
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

export default Forgot;
