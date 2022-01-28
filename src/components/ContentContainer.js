import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AllQuotes from '../components/AllQuotes.js'

export default function ContentContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
      sx={{ 
            bgcolor: '#cfe8fc', 
            height: '100vh',
            display: 'inline-flex',
            flexGrow:1
        }} >
      <AllQuotes />
      </Container>
    </React.Fragment>
  );
}
