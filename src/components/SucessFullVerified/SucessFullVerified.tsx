import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import CheckIcon from "../../assets/success.png";
import Image from "next/image";

const SucessfullVerified = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 325,
        height: 183,
        background: "#FBC81D",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.25)",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box sx={{ width: { xs: 50, lg: 75 }, height: { xs: 50, lg: 75 } }}>
        <Image layout="responsive" src={CheckIcon} alt="successfully" />
      </Box>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 300,
          width: 100,
          marginTop: { xs: 1 },
          marginLeft: { lg: 2 },
          textAlign: { lg: "left" },
        }}
      >
        You’ve been successfully verified!
      </Typography>
    </Box>
  );
};

export default SucessfullVerified;
