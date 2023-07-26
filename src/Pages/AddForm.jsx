import CommonForm from "./CommonForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInstuite } from "../Stores/toolkits/AddInstitutSlice";

const AddForm = () => {

  const dispatch = useDispatch();
  const [initialValues, setInitialValues] = useState({
    university: "",
    institute: "",
    tpo_name: "",
    tpo_email: "",
    tpo_phone_number: ""
  });
 
  const onSubmit = async (values, { resetForm }) => {
  
    const payload = {
      university: values.university,
      institute: values.institute,
      tpo_name: values.tpo_name,
      tpo_email: values.tpo_email,
      tpo_phone_number: values.tpo_phone_number,
      qualification: values.qualification,
    };
    dispatch(addInstuite(payload));
  };
  return (
    <>
      <CommonForm
        lable="Submit"
        onSubmit={onSubmit}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        head="Add"
      />
    </>
  );
};

export default AddForm;
