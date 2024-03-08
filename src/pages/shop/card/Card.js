import { useContext } from 'react';
import { CardContent, CardMedia } from '@mui/material';
import { StyledCardActions, StyledCardTitle, StyledCardSubtitle, StyledCard, StyledButton } from './Card.styled';
import { CartContext } from '../../app/App';

export const MediaCard = ({ data }) => {
  const { strMealThumb, strMeal, idMeal } = data;
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (key, img, title) => {
    const updatedCart = { ...cart };

    if (updatedCart.hasOwnProperty(key)) {
      updatedCart[key].amount += 1;
    } else {
      updatedCart[key] = {
        img: img,
        title: title,
        amount: 1
      };

      setCart(updatedCart);
    }
  }

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
          onClick={() => addToCart(idMeal, strMealThumb, strMeal)}
        // onClick={() => console.log(idMeal)}
        >Add to Cart</StyledButton>
      </StyledCardActions>
    </StyledCard>
  );
}
