import * as React from 'react';
import { Card, CardContent, Button, Typography, CardMedia } from '@mui/material';
import { StyledCardActions } from './Card.styled';

export const MediaCard = ({ data }) => {
  const { strMealThumb, strMeal } = data;

  return (
    <Card sx={{ height: '360px' }}>
      <CardMedia
        component="img"
        height="210"
        image={strMealThumb}
        alt={strMeal}
      />
      <CardContent>
        <Typography
          title={strMeal}
          gutterBottom variant="h5"
          component="h2"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical'
          }}>
          {strMeal}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary
          " sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical'
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button
          variant="contained"
          size="small"
          color="success"
        >Add to Cart</Button>
      </StyledCardActions>
    </Card>
  );
}
