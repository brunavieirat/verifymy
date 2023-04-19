import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import CheckIcon from "../../assets/success.png";
import Image from "next/image";
import Subtitle from "../Subtitle";

const SucessfullVerifiedCard = ({ text }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 325,
        border: "1px solid",
        borderColor: "vma.lightGrey",
        borderRadius: 5,
        borderTop: "none",
        display: { xs: "flex", lg: "none" },
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop: "-25px",
        boxShadow: "0px 2px 3px rgba(148, 146, 146, 0.25)",
        flexDirection: { xs: "column", lg: "row" },
      }}
    >
      <Box
        sx={{
          padding: "55px 15px 30px 15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Subtitle>{text}</Subtitle>
      </Box>
    </Box>
  );
};

export default SucessfullVerifiedCard;
