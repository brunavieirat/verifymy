import { Typography } from "@mui/material";

export const Title = ({ ...props }) => {
  return (
    <Typography
      sx={{
        fontSize: { xs: 19, lg: 36 },
        fontWeight: 300,
        fontStyle: "normal",
      }}
    >
      {" "}
      {props.children}{" "}
    </Typography>
  );
};

export default Title;
