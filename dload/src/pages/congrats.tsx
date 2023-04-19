import { Box } from '@mui/material';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import Steps from '@/assets/Steps.png';
import Secured from "@/components/Secured/Secured";
import SucessfullVerified from "@/components/SucessFullVerified/SucessFullVerified";
import SucessfullVerifiedCard from "@/components/SucessFullVerified/SucessFullVerifiedCard";
import {Title} from '@/components';
import Subtitle from '@/components/Subtitle/Subtitle';



const CongratsPage = () => {
     const description = `You’ll be automatically verified for all future orders. Your order swill be dispatched without delay.`

    return (
        <div style={{padding: 20}}>
        <Box sx={{marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image
        src={Logo}
        alt="logo verifymy"
        width={135}
        height={25.5}        
        />
         <Image
        src={Steps}
        alt="steps"
            // width={135}
            // height={25.5}        
        />
        </Box>
        <Box sx={{marginBottom: 8, display: {xs: 'none', lg: 'block'}}}>
        <Title>Congrats</Title>
        <Subtitle sx={{
            width: {lg: 400},
            fontWeight: 100,
        }}>{description}</Subtitle>
        </Box>

        <div style={{margin: '0 auto'}}>
        <SucessfullVerified/>
        <SucessfullVerifiedCard text={description}/>
        </div>
        <Secured/>
        
        </div>
    )
}

export default CongratsPage;