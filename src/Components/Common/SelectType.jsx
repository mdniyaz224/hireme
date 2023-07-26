/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import MUIInputLabel from "../MUI-Component/MUIInputLabel";
import TextError from "./TextError";

const SelectType = (props) => {
  const { name,label,options, ...rest } = props;
  return (
    <div className="mb-4">
         <MUIInputLabel className="input-label">{label}</MUIInputLabel>
      <Field as="select" name={name} id={name} {...rest}  >
        
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default SelectType;
