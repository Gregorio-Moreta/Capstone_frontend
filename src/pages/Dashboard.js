import * as React from 'react';
import ButtonAppBar from '../components/Appbar.js'
import { Container } from '@mui/material';
import ContentContainer from '../components/ContentContainer';
import {Box} from '@mui/material';

export default function Dashboard({quotes}) {
  console.log(quotes)
  return (
    <>
        <ButtonAppBar />
        <Container
            maxWidth='100vw'
            sx={{ 
                backgroundColor:"blue",
                display:"inline-flex"
            }}
        >
        <Box sx={{display:"inline-flex", flexGrow:1}} >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_2.jpg/599px-L%27Image_et_le_Pouvoir_-_Buste_cuirass%C3%A9_de_Marc_Aur%C3%A8le_ag%C3%A9_-_2.jpg"
        width="100%" height="976px"
        alt="stoic"
        position="sticky"
        />
        </Box>
        <ContentContainer quotes={quotes} />
        </Container>

    </>
  );
}