import styled from "styled-components"

export const TitleStyled = styled.h1`
    font-weight: 600;
    font-size: 1.18rem;
    @media screen and (min-width: 1024px){
        font-size: 2.25rem;
    }
`

export const Title = ({...props}) =>  {
    return <TitleStyled> {props.children} </TitleStyled>
}


export default Title;