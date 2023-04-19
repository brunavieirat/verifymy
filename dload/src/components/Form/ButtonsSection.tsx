import LockIcon from "@mui/icons-material/Lock";
import ButtonStyled from "../Button";
import { Box } from "@mui/material";


const ButtonsSection = () => {
    return (
        <Box sx={{
          display:{xs: 'block', lg: 'flex'},
          background: 'vma.white',
          borderTop: {xs: '0.06rem solid', lg: 'none'},
          borderColor: {xs: 'vma.lightGrey'},
        }}>
            <ButtonStyled buttonColor="vma.lightYellow" fontWeight={300} type="submit">
              <LockIcon sx={{ fontSize: 15, marginRight: 1 }} /> Save
            </ButtonStyled>
            <ButtonStyled buttonBorder="vma.darkGrey" fontWeight={200}>
              Got a VerifyMyAge account? Sign in
            </ButtonStyled>
          </Box>

    )
}
export default ButtonsSection;