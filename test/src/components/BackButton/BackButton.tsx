import styled from "styled-components"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CircleBack = styled.div`
    background: ${props => props.theme.grey};;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ArrowBack = styled(KeyboardArrowLeftIcon)`
    font-size: 1.25rem;
`
const BackButton = () => {
    return (
        <CircleBack> <ArrowBack/> </CircleBack>
    )
}

export default BackButton