/* eslint-disable react/prop-types */

import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
import MUIInputLabel from "../MUI-Component/MUIInputLabel";

const InputType = (props) => {
  const { name,label, ...rest } = props;
  return (
    <div>
      <MUIInputLabel className="input-label">{label}</MUIInputLabel>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default InputType;
