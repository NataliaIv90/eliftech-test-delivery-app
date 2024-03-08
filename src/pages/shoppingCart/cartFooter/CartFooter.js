import { Button } from "@mui/material"
import { CartFooterWrapper } from "./CartFooter.styled"
import { useContext } from "react";
import { CartContext } from "../../app/App";

export const CartFooter = ({ sendOrder }) => {
  const { cart } = useContext(CartContext);
  const keys = Object.keys(cart);
  const price = 5;
  const totalPrice = Object.keys(cart).reduce((acc, key) => {
    const item = cart[key];
    return acc + (price * item.amount);
  }, 0);

  return (
    <CartFooterWrapper>
      <p>
        <span>Total price: {totalPrice.toFixed(2)}$</span>
      </p>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={sendOrder}
      >Submit order</Button>
    </CartFooterWrapper>
  );
}