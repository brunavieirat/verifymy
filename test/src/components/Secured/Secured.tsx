import styled from "styled-components"
import LockIcon from '@mui/icons-material/Lock';
import LogoGrey from '../../assets/greylogo.png';
import Image from "next/image";

const TextSyled = styled.p`
    font-weight: 300;
    margin: 0 0.4rem;
`
const Container = styled.div`
    color: ${props => props.theme.mediumGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 0.63rem;
    padding: 1rem 0 ;
    margin-top: 2rem;
    border-top:  0.06rem solid  ${props => props.theme.lightGrey}; 
    @media screen and (min-width: 1023px) {
        display: none;
    }
    
`
const Secured = () => {
    return (
        <Container>
            <LockIcon sx={{fontSize: 15}}/> <TextSyled> Secured by</TextSyled>
            <Image
            src={LogoGrey} alt="grey-logo"
            width={75}
            height={20}
            quality={100}/>
        </Container>
    )
}
export default Secured;