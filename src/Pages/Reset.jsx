import { Formik, Form } from "formik";
import * as Yup from "yup";
import Formikcontrol from "../Components/Common/FormikControl";
import {
  MUIBox,
  MUIButton,
  MUITypography,
} from "../Components/MUI-Component/index";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { passwordRegex } from "../Regex";
import { resetSuccess } from "../Stores/toolkits/resetSlice";
const Reset = () => {
  const dispatch = useDispatch();
  const initialValues = {
    password: "Md@12345",
    password_confirmation: "Md@12345",
    email: new URLSearchParams(window.location.search).get("email"),
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(passwordRegex, "Invalid password")
      .required("Password is Required!"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required!"),
  });
  const onSubmit = async (values) => {
    dispatch(resetSuccess(values));
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
                <MUITypography variant="h5">Reset Password</MUITypography>
                <MUITypography variant="subtitle2">
                  Please set your new password
                </MUITypography>
              </MUIBox>
              <Form>
                <Formikcontrol
                  control="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-control"
                  label="Password"
                />
                <Formikcontrol
                  control="input"
                  type="password"
                  placeholder="Confirm password"
                  name="password_confirmation"
                  className="form-control"
                  label="Confirm Password"
                />
                <MUIBox className="submitBtn">
                  <MUIButton
                    type="submit"
                    variant="contained"
                    onSubmit={onSubmit}
                  >
                    Submit
                  </MUIButton>
                </MUIBox>
              </Form>
            </MUIBox>
          );
        }}
      </Formik>
    </>
  );
};

export default Reset;
