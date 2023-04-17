import { TextField } from "@mui/material"
import { useState } from "react";


const Input = ({...props}) => {
  const [fullNameValue, setFullNameValue] = useState<string>();
  const [emailValue, setEmailValue] = useState<string>();

    return (
      <>
       {props.type === 'text' &&  <TextField
        id="fullname"
        label="Full Name"
        InputLabelProps={{ shrink: true}}
        fullWidth
        placeholder="Please type in..."
        value={fullNameValue}
        onChange={e => setFullNameValue(e.target.value)}
        sx={{
          '& fieldset': {
            borderRadius: '30px',
          },}}
      />}
      {props.type === 'email' && 
       <TextField
       id="email"
       variant="outlined"
       margin="normal"
       InputLabelProps={{ shrink: true}}
       fullWidth
       label="Email Address"
       name="email"
       placeholder="Please type in..."
       autoComplete="email"  
       value={emailValue}
        onChange={e => setEmailValue(e.target.value)}
        sx={{
          '& fieldset': {
            borderRadius: '30px',
          },}}                      
     />}
      </>
    )
}

export default Input