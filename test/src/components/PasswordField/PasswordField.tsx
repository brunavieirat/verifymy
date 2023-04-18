import { IconButton } from "@mui/material";
import { TextField } from "../TextField";
import { forwardRef, useCallback, useState } from "react";
import { PasswordFieldProps } from "./PasswordField.types";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function RootPasswordField(
  { InputProps, ...rest }: PasswordFieldProps,
  ref: React.Ref<any>
) {
  const [visible, setVisible] = useState(false);

  const handleClickAdornment = useCallback(() => {
    setVisible((currentVisible) => !currentVisible);
  }, []);

  return (
    <TextField
      autoComplete="off"
      {...rest}
      ref={ref}
      InputProps={{
        endAdornment: (
          <IconButton
            aria-label={visible ? "Hide password" : "Show password"}
            onClick={handleClickAdornment}
          >
            {visible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        ),
        ...InputProps,
      }}
      label="Password"
      placeholder="Please type in..."
      type={visible ? "text" : "password"}
    />
  );
}

export const PasswordField = forwardRef(RootPasswordField);
