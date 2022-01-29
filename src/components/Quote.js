import React from "react"
import { Container, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Link } from "react-router-dom"

const Quote = ({message}) => {
    return (
        <Grid rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    bgcolor: (theme) =>
                    theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
                    color: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                    border: '1px solid',
                    borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                    p: 1,
                    borderRadius: 2,
                    fontSize: '0.875rem',
                    fontWeight: '700',
                    m:3,
                    gap:3,
                    width: 300,
                    height: 300,
                }}
                >
            <Link to = {`/message/${message.id}`}>
                <Paper>
                    <Typography
                    sx={{
                        textAlign:"center",
                        width: 282,
                        height: 50,
                        p:1
                    }}
                    >
                        {message.author}
                    </Typography>
                </Paper>
            </Link>
                <Paper>
                    <Typography
                    sx={{
                        textAlign:"center",
                        width: 282,
                        height: 150,
                        p:3,
                    }}>
                            {message.message}
                    </Typography>
                </Paper>
            </Box>
        </Grid>
    )
}

export default Quote