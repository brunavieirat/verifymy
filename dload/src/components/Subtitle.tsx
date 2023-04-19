import { Typography } from "@mui/material";

export const Subtitle = ({...props}) =>  {
    return <Typography
    sx={{
      fontSize: {xs: 14, lg: 18},      
      fontWeight: 100,
      fontStyle: 'normal'
    }}
    {...props}
  >
    {props.children}
  </Typography>
}


export default Subtitle;