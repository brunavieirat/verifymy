import styled, { ThemeProvider } from "styled-components";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

import BackButton from "@/components/BackButton/BackButton";
import Image from "next/image";
import BackgroundImage from "../assets/background.png";
import Form from "@/components/Form/Form";
import { Box } from "@mui/material";

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



const Container = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
`;
const ImageStyled = styled(Image)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export default function SignUp() {



  return (
      <Container style={{ padding: "20px", backgroundColor: "#F8F8F8", display: 'flex', width: '100%' }}>
        <ImageStyled
          src={BackgroundImage}
          // sizes="
          //     (min-width: 1000px) 10vw,
          //     "
          style={{ height: "100%", width: '50%' }}
          alt="background-desktop"
        />
        <Box sx={{
          width: {xs: '100%', lg: '50%'}
        }}>
          <HeaderStyled>
            <BackButton />
            <DescriptionStyled>
              <Title> Join VerifyMyAge </Title>
              <Subtitle>
                {" "}
                Let's start by setting up your login details.{" "}
              </Subtitle>
            </DescriptionStyled>
          </HeaderStyled>

          <Form />
          
        </Box>
      </Container>
  );
}
