import { CartWrapper, DeliveryInfo, ItemsInCart } from './Cart.styled';

export const Cart = () => {
  return (
    <CartWrapper>
      <DeliveryInfo>Delivery</DeliveryInfo>
      <ItemsInCart>Items</ItemsInCart>
    </CartWrapper>
  )
}