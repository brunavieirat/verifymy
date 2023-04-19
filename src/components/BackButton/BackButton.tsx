import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Box } from "@mui/material";


const ArrowBack = styled(KeyboardArrowLeftIcon)`
  font-size: 1.25rem;
`;
const BackButton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "vma.grey",
        borderRadius: "50%",
        width: "1.5rem",
        height: "1.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center'
      }}
    >
      <ArrowBack />
    </Box>
  );
};

export default BackButton;
