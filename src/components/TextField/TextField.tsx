import React, { forwardRef } from "react";

import { TextField as MuiTextField } from "@mui/material";

import { TextFieldProps } from "./TextField.types";

function RootTextField(
  { sx, InputLabelProps, ...rest }: TextFieldProps,
  ref: React.Ref<any>
) {
  return (
    <MuiTextField
      {...rest}
      inputRef={ref}
      InputLabelProps={{ shrink: true, ...InputLabelProps }}
      sx={{
        ".MuiFormLabel-root": {
          color: "vma.darkGrey",
        },
        ".MuiInputBase-root": {
          borderRadius: "50px",
        },
        ".MuiInputBase-input": {
          color: "vma.darkGrey",
          fontFamily: "typography.fontFamily",
          fontWeight: "200",
          fontStyle: "normal",
          fontSize: "1rem",
          height: "1rem",
          paddingX: "20px",
          paddingY: "17px",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "1px solid vma.lightYellow",
          borderColor: "vma.sonicSilver",
        },
        ".MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "vma.darkGrey",
        },
        ".MuiFormLabel-root.Mui-focused": {
          color: "vma.darkGrey",
        },
        ...sx,
      }}
    />
  );
}

export const TextField = forwardRef(RootTextField);
