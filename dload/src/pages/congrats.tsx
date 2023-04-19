import { Box } from '@mui/material';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Secured from "@/components/Secured/Secured";
import SucessfullVerified from "@/components/SucessFullVerified/SucessFullVerified";
import SucessfullVerifiedCard from "@/components/SucessFullVerified/SucessFullVerifiedCard";
import Title from '@/components/Title';
import Subtitle from '@/components/Subtitle';



const CongratsPage = () => {
     const description = `You’ll be automatically verified for all future orders. Your order swill be dispatched without delay.`

    return (
        <>
        <Box sx={{marginBottom: 8}}>
        <Image
        src={Logo}
        alt="logo verifymy"
        width={135}
        height={25.5}        
        />
        </Box>
        <Box sx={{marginBottom: 8, display: {xs: 'none', lg: 'block'}}}>
        <Title>Congrats</Title>
        <Subtitle sx={{
            width: {lg: 400},
            fontWeight: 100,
        }}>{description}</Subtitle>
        </Box>

        <SucessfullVerified/>
        <SucessfullVerifiedCard text={description}/>
        <Secured/>

        
        
        </>
    )
}

export default CongratsPage;