import CheckboxType from "./CheckboxType";
import InputType from "./InputType";
import MultiSelect from "./MultiSelect"
import RadioType from "./RadioType";
import SelectType from "./SelectType";

const FormikControl = (props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <InputType type={control} {...rest} />;
    case "select":
      return <SelectType {...rest} />;
    case "multiselect":
      return <MultiSelect {...rest} />;
    case "radio":
      return <RadioType {...rest} />;
    case "checkbox":
      return <CheckboxType {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
