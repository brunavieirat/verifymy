import { Checkbox } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";

const LinkStyled = styled.a`
    text-decoration: ${props => `underline ${props.theme.sonicSilver}`};
`

const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    color: ${props => props.theme.darkGrey};
    font-weight: 300;
`

const AcceptTerms = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
    };
    return (
        <Container>
        <Checkbox 
        checked={checked}
        onChange={handleChange}
         /> <p>Tick this box to confirm you’ve read and agreed to our <LinkStyled>Terms</LinkStyled> and <LinkStyled>Privacy Policy</LinkStyled>. </p>
        </Container>
    )
}

export default AcceptTerms