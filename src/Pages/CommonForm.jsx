/* eslint-disable react/prop-types */
import "./Form.css";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { ToastContainer } from "react-toastify";
import { emailRegex, phoneNumberRegex } from "../Regex";
import DropZon from "../Components/UI-Components/DropZon";
import Formikcontrol from "../Components/Common/FormikControl";
import { useTranslation } from "react-i18next";
import {
  MUIBox,
  MUIButton,
  MUIGrid,
  MUITypography,
} from "../Components/MUI-Component/index";

const CommonForm = (props) => {
  const { t } = useTranslation();
  const colleges = [
    { key: "select an option", value: "" },
    { key: "LPU", value: "LPU" },
    { key: " CU", value: "CU" },
    { key: " DU", value: "DU" },
    { key: " AMU", value: "AMU" },
    { key: "JNU", value: "JNU" },
    { key: "BHU", value: "BHU" },
    { key: "BNMUU", value: "BNMU" },
  ];
  const Qualification = ["PHD", " PG", "Graduation", "12th", "10th"];

  const { initialValues, onSubmit, setInitialValues } = props;
  const getValue = () => {
    if (initialValues && initialValues.qualification) {
      return initialValues.qualification;
    } else {
      return [];
    }
  };
  const onChangeHandle = (event) => {
    const {
      target: { value, name },
    } = event;

    setInitialValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  console.log(initialValues, "inititalValues");
  const validationSchema = Yup.object({
    tpo_email: Yup.string()
      .email("Invalid email")
      .matches(emailRegex, "Invalid email")
      .required("Email is Required!"),
    university: Yup.string().required("University name is required"),
    institute: Yup.string().required("Institute name is required"),
    tpo_phone_number: Yup.string()
      .min(10, "Invalid number")
      .matches(phoneNumberRegex, "Only number allowed")
      .required("Phone Number is required"),
    tpo_name: Yup.string()
      .min(3, "Enter atleast 3 Characters!")
      .max(50, "Enter max 50 Characters!")
      .required("Tpo_name Name is required"),
    qualification: Yup.array().min(1, "Qualification is required"),
  });

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
      enableReinitialize={true}
    >
      {(onBlur) => {
        return (
          <MUIBox className="add-form-container">
            <MUITypography variant="h6" sx={{ marginTop: "-20px" }}>
              {t("Institutes")}
            </MUITypography>
            <MUIBox className="bg-white head-form-box mb-2">
              <MUITypography variant="body1" className="body-text">
                {t("Institutes")} &gt;{t(props.head)}
              </MUITypography>
            </MUIBox>
            <Form>
              <MUIBox className="bg-color form-containers">
                <MUIGrid container className="form-grid-container" spacing={5}>
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      control="input"
                      type="text"
                      name="university"
                      label={t("Name of University")}
                      className="add-form-control pl-2"
                      onChange={onChangeHandle}
                    />
                  </MUIGrid>
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      control="select"
                      label={t("Name of Institute")}
                      name="institute"
                      options={colleges}
                      className="add-form-control pl-2"
                      onChange={onChangeHandle}
                    />
                  </MUIGrid>
                </MUIGrid>
                {/* --------------------------- */}
                <MUIGrid
                  container
                  className="form-grid-container"
                  spacing={5}
                  sx={{ marginTop: "10px" }}
                >
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      control="input"
                      type="text"
                      name="tpo_name"
                      label={t("Name of TPO")}
                      className="add-form-control  pl-2"
                      onChange={onChangeHandle}
                    />
                  </MUIGrid>
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      control="input"
                      type="email"
                      name="tpo_email"
                      label={t("TPO Email")}
                      className="add-form-control  pl-2"
                      onChange={onChangeHandle}
                    />
                  </MUIGrid>
                </MUIGrid>
                <MUIGrid
                  container
                  className="form-grid-container"
                  spacing={5}
                  sx={{ marginTop: "20px" }}
                >
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      control="input"
                      type="text"
                      name="tpo_phone_number"
                      label={t("TPO Phone Number")}
                      className="add-form-control  pl-2"
                    />
                  </MUIGrid>
                  <MUIGrid itme xs={12} sm={6}>
                    <Formikcontrol
                      options={Qualification}
                      control="multiselect"
                      label={t("Qualification")}
                      name="qualification"
                      className="add-form-control multi-select-drop-down  pl-2"
                    
                      onChange={onChangeHandle}
                      onBlur={onBlur}
                      value={getValue()}
                    />
                  </MUIGrid>
                </MUIGrid>
                {/* ------------------ */}
                <MUIGrid
                  container
                  className="form-grid-container "
                  spacing={5}
                  sx={{ marginTop: "20px" }}
                >
                  <MUIGrid itme xs={10}>
                    <DropZon />
                  </MUIGrid>
                </MUIGrid>
                <MUIBox className="button-container  mb-4">
                  <MUIButton
                    variant="contained"
                    type="submit"
                    onClick={() => onSubmit}
                  >
                    {t(props.lable)}
                  </MUIButton>
                  <MUIButton
                    type="reset"
                    variant="outlined"
                    sx={{ marginLeft: "15px" }}
                  >
                    {t("Cancel")}
                  </MUIButton>
                </MUIBox>
              </MUIBox>
            </Form>
            <ToastContainer />
          </MUIBox>
        );
      }}
    </Formik>
  );
};

export default CommonForm;
