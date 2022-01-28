import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar
            sx={{ justifyContent: 'flex-end' }}
        >
          <Button
            variant="h3" 
            Size="large"
            sx={{
                fontSize:"large",
            }}
            >
            Favorites
          </Button>
          <Button 
          color="inherit"
          >
          <StarIcon 
            fontSize="large"
          />
         </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
