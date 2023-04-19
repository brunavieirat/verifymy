import { MuiPhoneNumberProps } from "material-ui-phone-number";

export type PhoneFieldProps = Omit<MuiPhoneNumberProps, "onChange">;
