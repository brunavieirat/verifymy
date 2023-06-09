import styled from 'styled-components';

import Steps from '@/assets/Steps.png';
import { Title, Subtitle } from '@/components';

import Image from 'next/image';
import BackgroundImage from '../assets/background.png';
import Form from '@/components/Form/Form';
import { Box, Container } from '@mui/material';
import BackButton from '@/components/BackButton/BackButton';

const DescriptionStyled = styled.div`
  @media screen and (max-width: 1023px) {
    width: 11.56rem;
    margin: 0 0.6rem;
  }
  width: 100vw;
`;

const ImageStyled = styled(Image)`
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export default function SignUp() {
  return (
    <Box
      style={{
        display: 'flex',
        backgroundColor: '#F8F8F8',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', lg: 'block' },
          width: '50%',
        }}
      >
        <ImageStyled
          src={BackgroundImage}
          style={{ height: '100%', width: '100%' }}
          alt="background-desktop"
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100wv', lg: '50%' },
          padding: 5
        }}
      >
        <Box
          sx={{
            display: { xs: 'flex', lg: 'block' },
            alignItems: 'baseline',
          }}
        >
          <BackButton />
          <Box
            sx={{
              position: 'absolute',
              right: 0,
            }}
          >
            <Image src={Steps} alt="steps" />
          </Box>
          <DescriptionStyled>
            <Title> Join VerifyMyAge </Title>
            <Subtitle> Let's start by setting up your login details. </Subtitle>
          </DescriptionStyled>
        </Box>

        <Form />
      </Box>
    </Box>
  );
}