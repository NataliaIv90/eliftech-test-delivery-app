import * as React from 'react';
import { CardContent, CardMedia } from '@mui/material';
import { StyledCardActions, StyledCardTitle, StyledCardSubtitle, StyledCard, StyledButton } from './Card.styled';

export const MediaCard = ({ data }) => {
  const { strMealThumb, strMeal } = data;

  return (
    <StyledCard>
      <div>
        <CardMedia
          component="img"
          height="210"
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
          <StyledCardTitle
            title={strMeal}
            gutterBottom variant="h5"
            component="h2"
          >
            {strMeal}
          </StyledCardTitle>
          <StyledCardSubtitle
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </StyledCardSubtitle>
        </CardContent>
      </div>
      <StyledCardActions>
        <StyledButton
          variant="contained"
          size="small"
          color="success"
        >Add to Cart</StyledButton>
      </StyledCardActions>
    </StyledCard>
  );
}
