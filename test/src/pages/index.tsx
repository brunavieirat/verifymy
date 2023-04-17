import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/default";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import InputPassword from "@/components/InputPassword";
import Input from "@/components/Input";
import AcceptTerms from "@/components/AcceptTerms";
import ButtonStyled from "@/components/Button";
import LockIcon from "@mui/icons-material/Lock";
import InputPhone from "@/components/InputPhone";
import BackButton from "@/components/BackButton/BackButton";
import Secured from "@/components/Secured/Secured";

const HeaderStyled = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    align-items: baseline;
  }
`;
const DescriptionStyled = styled.div`
  @media screen and (max-width: 1023px) {
    width: 11.56rem;
    margin: 0 0.6rem;
  }
  width: 100vw;
`;

const SectionButtons = styled.div`
 @media screen and (max-width: 1023px) {
  border-top: 0.06rem solid ${(props) => props.theme.lightGrey};
  margin-left: -25px;
  padding: 8px;
 
 }
  width: 100%;
  position: fixed;
  @media screen and (min-width: 1024px) {
    display: flex;
  }
 
  background-color: ${props => props.theme.white};  
  
`;

export default function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div style={{ padding: "20px", backgroundColor: "#F8F8F8" }}>
        <HeaderStyled>
          <BackButton />
          <DescriptionStyled>
            <Title> Join VerifyMyAge </Title>
            <Subtitle> Let's start by setting up your login details. </Subtitle>
          </DescriptionStyled>
        </HeaderStyled>

        <AcceptTerms />

        <Secured />
        <SectionButtons>
          {" "}
          <ButtonStyled type="primary">
            {" "}
            <LockIcon sx={{fontSize: 15, marginRight: 1}}/> Save
          </ButtonStyled>
          <ButtonStyled type="secondary">
            {" "}
            Got a VerifyMyAge account? Sign in
          </ButtonStyled>
        </SectionButtons>
      </div>
    </ThemeProvider>
  );
}
