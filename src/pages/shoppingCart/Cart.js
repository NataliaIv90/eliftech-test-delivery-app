import { useState } from 'react';
import { CartWrapper } from './Cart.styled';
import { CartFooter } from './cartFooter/CartFooter';
import { CartForm } from './cartForm/CartForm';
import { Cards } from './cards/Cards';

export const Cart = () => {
  const [formValues, setFormValues] = useState(
    {
      'name': '',
      'email': '',
      'phone': '',
      'adress': '',
    }
  );

  const sendOrder = () => alert(`adress: ${JSON.stringify(formValues)}`);

  return (
    <CartWrapper>
      <CartForm formValues={formValues} setFormValues={setFormValues} />
      <Cards />
      <CartFooter sendOrder={sendOrder} />
    </CartWrapper>
  )
}