import { PhoneFieldProps } from "./PhoneField.types";
import PhoneInput from "material-ui-phone-number";

import { useCallback, useState } from "react";

export function PhoneField({ sx, ...rest }: PhoneFieldProps) {
  const [val, setVal] = useState<string>("");

  const handleChange = useCallback((newVal: any) => {
    setVal(newVal);
  }, []);

  return (
    <PhoneInput
      value={val}
      disableAreaCodes
      label="Mobile"
      defaultCountry="us"
      variant="outlined"
      onChange={handleChange}
      sx={{
        ".MuiFormLabel-root": {
          color: "vma.darkGrey",
        },
        ".MuiInputBase-root": {
          borderRadius: "50px",
          paddingLeft: "20px",
        },
        ".MuiInputBase-input": {
          color: "vma.darkGrey",
          fontFamily: "typography.fontFamily",
          fontWeight: "200",
          fontStyle: "normal",
          fontSize: "1rem",
          height: "1rem",
          paddingRight: "20px",
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
