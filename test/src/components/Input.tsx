import { TextField } from "@mui/material"
import { useContext } from "react"
import { ThemeContext } from "styled-components"
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => {
  console.log(theme, 'dd')
  const focusedColor = '#ACA99F';
  return ({
 
  root: {
    '& fieldset': {
      borderRadius: '30px',
      width: '100%',
    },
    '&:hover fieldset': {
      borderColor: 'red',
    },
    "& label.Mui-focused": {
      color: focusedColor
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: focusedColor
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: focusedColor
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusedColor
      },
    }
  }
})});


const Input = ({...props}) => {
  const theme = useContext(ThemeContext)
  const classes = useStyles(theme);

    return (
      <>
       <TextField
       className={classes.root}
       
        InputLabelProps={{ shrink: true}}
        fullWidth
        placeholder="Please type in..."
        
          {...props}
      />
      </>
    )
}

export default Input