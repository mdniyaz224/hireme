import { InputLabel } from "@mui/material";
import React from "react";

const MUIInputLabel = (props) => {
  const { children, ...rest } = props;
  return <InputLabel {...rest}>{children}</InputLabel>;
};

export default MUIInputLabel;
