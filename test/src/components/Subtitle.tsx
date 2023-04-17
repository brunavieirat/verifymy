import styled from "styled-components";

const SubtitleStyled = styled.p`
    font-weight: 200;
    color: ${props => props.theme.darkGrey};
    font-size: 0.8rem;
`


export const Subtitle = ({...props}) =>  {
    return <SubtitleStyled> {props.children} </SubtitleStyled>
}


export default Subtitle;