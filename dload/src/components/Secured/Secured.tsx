import LockIcon from "@mui/icons-material/Lock";
import LogoGrey from "@/assets/greylogo.png";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const Secured = () => {
  return (
    <Box
      sx={{
        color: "vma.mediumGrey",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0",
        marginTop: "2rem",
        borderColor: "vma.lightGrey ",
        borderTop: "0.06rem solid",
        display: { xs: "flex", lg: "none" },
        alignItems: "flex-start",
      }}
    >
      <LockIcon sx={{ fontSize: 15 }} />{" "}
      <Typography
        sx={{
          fontWeight: 200,
          margin: "0 0.4rem",
          fontSize: "0.8rem",
        }}
      >
        {" "}
        Secured by
      </Typography>
      <Image
        src={LogoGrey}
        alt="grey-logo"
        width={75}
        height={20}
        quality={100}
      />
    </Box>
  );
};
export default Secured;
