/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from "formik";
import TextError from "./TextError";

const RadioType = (props) => {
  const { label, name, option, ...rest } = props;
  return (
    <div className="mb-4">
      <label className="fw-bold ">{label}&nbsp;&nbsp;</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return option.map((option) => {
            return (
              <>
                <input
                key={option.value}
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value} className="me-2">
                  &nbsp;{option.key}
                </label>
              </>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default RadioType;
