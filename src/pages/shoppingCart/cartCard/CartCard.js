import { Typography } from '@mui/material';
import { CardWrapper, ItemImg, ItemContent, CartCardAmountBtn } from './CartCard.styled';

export const CartCard = ({ data, reduceItemAmount, increaseItemAmount }) => {
  const { img, title, amount } = data;
  const price = 5;
  console.log(data);
  return (
    <CardWrapper>
      <ItemImg src={img} alt={title} />
      <ItemContent>
        <Typography variant='h5' >
          {title}
        </Typography>
        <p>Price: <span>{price}</span>$</p>
        <p>
          <CartCardAmountBtn
            size='small'
            variant='contained'
            color='success'
            onClick={reduceItemAmount}
          >-</CartCardAmountBtn>
          <span>{amount}</span>
          <CartCardAmountBtn
            size='small'
            variant='contained'
            color='success'
            onClick={increaseItemAmount}
          >+</CartCardAmountBtn>
        </p>
      </ItemContent>
    </CardWrapper>
  )
}