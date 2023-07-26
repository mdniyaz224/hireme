import { Formik, FieldArray, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../Components/Common/FormikControl";
import { AddIcon } from "../Icons/index";
import {
  MUIBox,
  MUIButton,
  MUIGrid,
  MUITypography,
} from "../Components/MUI-Component";
import DatePickers from "../Components/UI-Components/DatePickers";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
const validationSchema = Yup.object().shape({
  testValue: Yup.array().of(
    Yup.object().shape({
      test_category: Yup.string().required("Test category is required"),
      test_time: Yup.date()
        .min(0, "Invalid Time")
        .required("Time is required"),
      testTypeCatagory: Yup.array().of(
        Yup.object().shape({
          test_type: Yup.string().required("Test type is required"),
          no_of_question: Yup.number()
            .typeError("Number of questions must be a valid number")
            .integer("Number of questions must be an integer")
            .min(1, "Number of questions must be at least 1")
            .required("Number of questions is required"),
          test_level: Yup.string().required("Test level is required"),
        })
      ),
    })
  ),
});

const CreateTest = () => {
  const { t } = useTranslation();
  const test_category = [
    { key: "Technical", value: "Technical" },
    { key: "apptitude", value: "Apptitude" },
  ];

  const test_type = [
    { key: "C++", value: "C++" },
    { key: "Java", value: "Java" },
    { key: "CSS", value: "CSS" },
  ];
  const test_level = [
    { key: "Hard", value: "Hard" },
    { key: "Medium", value: "Medium" },
    { key: "Easy", value: "Easy" },
  ];

  const initialValues = {
    testValue: [
      {
        test_category: "",
        test_time: null,
        testTypeCatagory: [
          {
            test_type: "",
            no_of_question: "",
            test_level: "",
          },
        ],
      },
    ],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return (
          <MUIBox className="test-head-box">
            <MUIBox className="add-form-container">
              <MUIBox>
                <MUITypography variant="h6" sx={{ marginTop: "-20px" }}>
                  
                  {t("Institutes")}
                 
                </MUITypography>
                <MUIBox className="bg-white head-form-box mb-2">
                  <MUITypography variant="body1" className="test-body-text">
                  {t("Institutes")} &gt;{t("Assign Test")} &gt;{t("Create Test")}
                  </MUITypography>
                </MUIBox>
              </MUIBox>
              <MUITypography
                sx={{
                  textAlign: "right",
                  paddingTop: "10px",
                  marginRight: "18px",
                  color: "green",
                }}
              >
                {/* Duration of Test-60 mins */}
                {t("Duration of Test-60 mins")}
              </MUITypography>
              <Form autoComplete="off">
                <>
                  <FieldArray name="testValue">
                    {(fieldArrayProps) => {
                      const { form, push } = fieldArrayProps;
                      const { values } = form;
                      const { testValue } = values;

                      return (
                        <>
                          {testValue.map((item, index) => (
                            <MUIGrid
                              container
                              key={index}
                              className="bg-color test-form-containers"
                            >
                              <MUIGrid
                                container
                                className="form-grid-container"
                              >
                                <MUIGrid item md={12} sm={12} xs={12}>
                                  <MUITypography>
                                
                                    {t("Select Category Type")}
                                  </MUITypography>
                                  <FormikControl
                                    control="select"
                                    name={`testValue.${index}.test_category`}
                                    options={test_category}
                                    className="test-add-form-control tech-width"
                                  />
                                </MUIGrid>
                              </MUIGrid>
                              {
                                <FieldArray
                                  name={`testValue.${index}.testTypeCatagory`}
                                >
                                  {(fieldArrayProps) => {
                                    const { push } = fieldArrayProps;
                                    const testType = item.testTypeCatagory;
                                    return (
                                      <>
                                        {testType.map((value, innerIndex) => (
                                          <MUIGrid container key={innerIndex}>
                                            <MUIGrid item md sm={12} xs={12}>
                                              <MUITypography>
                                               
                                                {t("Select Test Type")}
                                              </MUITypography>
                                              <FormikControl
                                                control="select"
                                                name={`testValue.${index}.testTypeCatagory.${innerIndex}.test_type`}
                                                options={test_type}
                                                className="test-add-form-control t-width"
                                              />
                                            </MUIGrid>
                                            <MUIGrid item md sm={12} xs={12}>
                                              <MUITypography>
                                              
                                                {t("Number of Questions")}
                                              </MUITypography>
                                              <FormikControl
                                                className="test-add-form-control t-width"
                                                control="input"
                                                type="number"
                                                name={`testValue.${index}.testTypeCatagory.${innerIndex}.no_of_question`}
                                              />
                                            </MUIGrid>
                                            <MUIGrid item md sm={12} xs={12}>
                                              <MUITypography>
                                              
                                                {t("Select Level")}
                                              </MUITypography>
                                              <FormikControl
                                                control="select"
                                                name={`testValue.${index}.testTypeCatagory.${innerIndex}.test_level`}
                                                options={test_level}
                                                className="test-add-form-control t-width"
                                              />
                                            </MUIGrid>
                                          </MUIGrid>
                                        ))}
                                        <MUIGrid
                                          container
                                          className="add-type-head"
                                        >
                                          <MUIGrid item>
                                            <MUIButton
                                              className="add-test-type"
                                              sx={{ marginTop: "-50px" }}
                                              startIcon={<AddIcon />}
                                              onClick={() =>
                                                push({
                                                  test_type: "",
                                                  no_of_question: "",
                                                  test_level: "",
                                                })
                                              }
                                            >
                                              
                                              {t("Add Test Type")}
                                            </MUIButton>
                                          </MUIGrid>
                                          <MUIGrid
                                            item
                                            className="time-allocated"
                                          >
                                            <MUITypography
                                              className="add-test-type"
                                              sx={{ marginTop: "10px" }}
                                            >
                                             
                                              {t("Time Alloted (mins)")}
                                            </MUITypography>
                                            <Box className="date-picker-clock">
                                              <DatePickers
                                                name={`testValue.${index}.test_time`}
                                              />
                                            </Box>
                                          </MUIGrid>
                                        </MUIGrid>
                                      </>
                                    );
                                  }}
                                </FieldArray>
                              }
                            </MUIGrid>
                          ))}
                          <MUIBox
                            className="bg-white"
                            sx={{
                              marginTop: "15px",
                              marginBottom: "15px",
                              paddingTop: "10px",
                              paddingBottom: "10px",
                            }}
                          >
                            <MUIButton
                              startIcon={<AddIcon />}
                              label="Select Another Category Type"
                              onClick={() =>
                                push({
                                  test_category: "",
                                  test_time: null,
                                  testTypeCatagory: [
                                    {
                                      test_type: "",
                                      no_of_question: "",
                                      test_level: "",
                                    },
                                  ],
                                })
                              }
                            >
                              
                              {t("Select Another Category Type")}
                            </MUIButton>
                          </MUIBox>
                        </>
                      );
                    }}
                  </FieldArray>
                  <MUIBox>
                    <MUIButton
                      label="Submit"
                      variant="contained"
                      type="submit"
                      sx={{ marginBottom: "20px" }}
                    >
                     
                      {t("Submit")}
                    </MUIButton>
                    <MUIButton
                      sx={{ marginLeft: "50px", marginBottom: "20px" }}
                      label="Cancel"
                      variant="outlined"
                      type="reset"
                    >
                  
                      {t("Cancel")}
                    </MUIButton>
                  </MUIBox>
                </>
              </Form>
            </MUIBox>
          </MUIBox>
        );
      }}
    </Formik>
  );
};

export default CreateTest;
