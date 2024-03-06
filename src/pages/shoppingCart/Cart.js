import { CartWrapper } from './Cart.styled';
import { CartFooter } from './cartFooter/CartFooter';
import { CartForm } from './cartForm/CartForm';
import { Cards } from './cards/Cards';

const sendOrder = () => alert('order was sent');

export const Cart = () => {
  return (
    <CartWrapper>
      <CartForm />
      <Cards />
      <CartFooter sendOrder={sendOrder} />
    </CartWrapper>
  )
}