import * as React from 'react';
import {Box, Grid, Container, Typography} from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="rain.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', height: 'auto', top: -180, left: -180, opacity: .1, objectFit: 'fill' }}
        />
        <Grid container spacing={5}>
        <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/search.png"
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Discover Firsthand Drama
              </Typography>
              <Typography variant="h5">
                Christie's experiences in Beverly Hill Hotels have brought her face to face with celebrities, billionairs, scam artists, mobsters, crazies... and the ocassional dead body or two.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/id.png"
                alt="suitcase"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                20+ years in the Industry
              </Typography>
              <Typography variant="h5">
                Christie Smith has seen it all. With over 20 years experience in high end hotels, you'll get to follow her throughout the many wacky, wierd, and outright horrifying experiences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src="/donut.png"
                alt="graph"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Bite Sized Stories
              </Typography>
              <Typography variant="h5">
                This book is comprized of all the juicy bits of a long career. Its easy to pick up, put down, or outwrite bing. Being comprised of smaller stories this book has a little bit for everyone.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
