import { Button } from "@mui/material";

const ButtonStyled = ({ ...props }) => {
  const { buttonColor, buttonBorder } = props;
  return (
    <>
      <Button
        variant="outlined"
        {...props}
        sx={{
          width: { xs: "100%" },
          display: 'flex',
          alignItems: 'flex-start',
          backgroundColor: buttonColor,
          borderRadius: 50,
          borderColor: buttonBorder,
          color: "vma.darkGrey",
          padding: "10px 30px",
          textTransform: "capitalize",
          margin: 1,
          fontWeight: props.fontWeight,
          fontSize: "0.8rem",
          "&: hover": {
            backgroundColor: buttonColor,
            borderColor: buttonBorder,
          },
        }}
      >
        {props.children}
      </Button>
    </>
  );
};

export default ButtonStyled;
