import { Typography } from '@mui/material';
import { CardWrapper, ItemImg, ItemContent } from './CartCard.styled';

export const CartCard = ({ data }) => {
  const { img, title, amount } = data;
  const price = 5;

  return (
    <CardWrapper>
      <ItemImg src={img} alt={title} />
      <ItemContent>
        <Typography variant='h5' >
          {title}
        </Typography>
        <p>Price: <span>{price}</span>$</p>
        <p>Amount: <span>{amount}</span></p>
      </ItemContent>
    </CardWrapper>
  )
}