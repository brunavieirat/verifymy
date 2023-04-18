import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import CheckIcon from "../../assets/success.png";
import Image from "next/image";

const ImageStyled = styled(Image)`
  @media screen and (max-width: 1023px) {
    width: 50;
    height: 50;
  }
  width: 75;
  height: 75;
`;
const SucessfullVerified = () => {
  return (
    <Box
      sx={{
        width: 325,
        height: 183,
        background: "#FBC81D",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "column",
        "@media (min-width: 1024px)": {
          flexDirection: "row",
        },
      }}
    >
      <ImageStyled src={CheckIcon} alt="successfully" />
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 600,
          width: 100,
          marginTop: 1,
          "@media (min-width: 1024px)": {
            textAlign: "left",
            marginLeft: 2,
          },
        }}
      >
        You’ve been successfully verified!
      </Typography>
    </Box>
  );
};

export default SucessfullVerified;
