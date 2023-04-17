import { TextField } from "@mui/material"
import { useEffect, useState } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import styled from "styled-components";

const FlagStyled = styled(PhoneInput)`
  border-radius: 50px;
`

const InputPhone = ({...props}) => {
  const [value, setValue] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target.value)
  };
    return (
      <>
      <FlagStyled style={{borderRadius: '30px'}} international placeholder="Enter phone number" defaultCountry="US"
  value={value}
  onChange={(e: any) => console.log(e)}/>
    
      </>
    )
}

export default InputPhone