import styled, { ThemeProvider } from "styled-components";
import { useRouter } from "next/router";
import { defaultTheme } from "@/styles/themes/default";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import AcceptTerms from "@/components/AcceptTerms";
import ButtonStyled from "@/components/Button";
import LockIcon from "@mui/icons-material/Lock";
import BackButton from "@/components/BackButton/BackButton";
import Secured from "@/components/Secured/Secured";
import Image from "next/image";
import BackgroundImage from "../assets/background.png";
import Form from "@/components/Form/Form";

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
  /* position: fixed; */
  @media screen and (min-width: 1024px) {
    display: flex;
  }
  background-color: ${(props) => props.theme.white};
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
export default function Home() {
  let router = useRouter();

  const redirect = () => {
    router.push("/congrats");
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container style={{ padding: "20px", backgroundColor: "#F8F8F8" }}>
        <ImageStyled
          src={BackgroundImage}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          style={{ height: "100%", width: "100%" }}
          alt="background-desktop"
        />
        <div>
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
          <AcceptTerms />

          <Secured />
          <SectionButtons>
            {" "}
            <ButtonStyled typeButton="primary" type="submit" onClick={() => redirect()}>
              <LockIcon sx={{ fontSize: 15, marginRight: 1 }} /> Save
            </ButtonStyled>
            <ButtonStyled typeButton="secondary">
              {" "}
              Got a VerifyMyAge account? Sign in
            </ButtonStyled>
          </SectionButtons>
        </div>
      </Container>
    </ThemeProvider>
  );
}
