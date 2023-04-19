import { codecPro } from "@/fonts";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints:{
    values:{
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1024, 
      xl: 1920,
    }
  },
  palette: {
    primary: {
      main: "#FBC81D",
    },
    error: {
      main: "#D24340",
    },
    warning: {
      main: "#D24340",
    },
    vma: {
      darkGrey: '#121212',
      white: '#FFFFFF',
      whiteSmoke: '#F8F8F8',
      grey: '#EDEDF1',
      foggyGrey: '#ACA99F',
      sonicSilver: '#777777',
      warning: '#D24340',
      lightYellow: '#FBC81D',
      lightGrey: '#D6D7DD',
      mediumGrey: ' #B9B9B9',
    },
  },
  typography: {
    fontFamily: codecPro.style.fontFamily,
    fontWeightBold: "600",
    fontWeightLight: "200",
    fontWeightMedium: "300",
    fontWeightRegular: "300",
  },
});
