import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startEdit } from "../Stores/toolkits/editInstitutSlice";
import { fetchData } from "../Stores/toolkits/getEditSlice";
import {  useParams } from "react-router-dom";
import CommonForm from "./CommonForm";
import { useTranslation } from "react-i18next";
const EditForm = () => {
  const { t } = useTranslation();
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();

  const getEditData = useSelector(
    (state) => state.getEditRedcure.getEditInstitute.data
  );

  const [initialValues, setInitialValues] = useState({
    university: "",
    institute: "",
    tpo_name: "",
    tpo_email: "",
    tpo_phone_number: "",
    qualification: [],
  });

  useEffect(() => {
    dispatch(fetchData(id)); // Dispatch the fetchData action when the component mounts
  }, [dispatch, id]);

  useEffect(() => {
    if (getEditData) {
      setInitialValues({
        university: getEditData?.university?.value || "",
        institute: getEditData?.institute?.value || "",
        tpo_name: getEditData.tpo_name || "",
        tpo_email: getEditData.tpo_email || "",
        tpo_phone_number: getEditData.tpo_phone_number || "",
        qualification: getEditData.qualification || [],
      });
    }
  }, [getEditData]);

  const onSubmit = async (values, { resetForm }) => {
    const formData = {
      university: values.university,
      institute: values.institute,
      tpo_name: values.tpo_name,
      tpo_email: values.tpo_email,
      tpo_phone_number: values.tpo_phone_number,
      qualification: JSON.stringify(values.qualification),
    };

    dispatch(startEdit({ id, formData }));
  };

  return (
    <>
      <CommonForm
        lable={t("Update")}
        // lable="Update"
        // {t("Institutes")}
        onSubmit={onSubmit}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        head={t("Edit")}
      />
    </>
  );
};

export default EditForm;
