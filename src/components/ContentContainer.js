import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AllQuotes from '../components/AllQuotes.js'

export default function ContentContainer({quotes}) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
      sx={{ 
            bgcolor: '#cfe8fc', 
            display: 'flex',
            flexWrap: 'wrap',
        }} >
      <AllQuotes quotes={quotes}
      />
      </Container>
    </React.Fragment>
  );
}
