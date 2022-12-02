import { Button, Typography } from '@mui/material';
import * as React from 'react';
import ProductHeroLayout from '../components/HeroLayout';

const backgroundImage = '/fireLake.jpg'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Uncover The Secrets
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        True Stories from Hotel Graveyard Shifts
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="https://www.amazon.com/Hotel-Hell-Beverly-Hills-Beyond-ebook/dp/B07FX6KL3T/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1669950057&sr=1-7"
        sx={{ minWidth: 200 }}
      >
        download now
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Buckle Up
      </Typography>
    </ProductHeroLayout>
  );
}
