import { Button } from "@mui/material";
import styled from "styled-components";

const ButtonPrimary = styled(Button)`
  @media screen and (max-width: 1023px) {
    width: 90%;
  }
  background-color: ${(props) => props.theme.lightYellow};
  border-radius: 50px;
  
  border: none;
  color: ${(props) => props.theme.darkGrey};
  padding: 10px 30px;
  text-transform: capitalize;
  margin: 10px;
  font-weight: 600;
  font-size: 0.8;
  &:hover {
    background-color: ${(props) => props.theme.lightYellow};
    border: none;
  }
`;
const ButtonSecondary = styled(Button)`
@media screen and (max-width: 1023px) {
    width: 90%;
  }
  border-color: ${(props) => props.theme.darkGrey};
  border-radius: 50px;
  /* width: 90%; */
  color: ${(props) => props.theme.darkGrey};
  padding: 10px 30px;
  text-transform: capitalize;
  margin: 10px;
  &:hover {
    border-color: ${(props) => props.theme.darkGrey};
  }
`;

const ButtonStyled = ({ ...props }) => {
  return (
    <>
      {props.type === "primary" && (
        <ButtonPrimary variant="outlined">{props.children}</ButtonPrimary>
      )}
      {props.type === "secondary" && (
        <ButtonSecondary variant="outlined">{props.children}</ButtonSecondary>
      )}
    </>
  );
};

export default ButtonStyled;
