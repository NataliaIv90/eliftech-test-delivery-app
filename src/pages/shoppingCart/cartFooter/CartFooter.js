import { Button } from "@mui/material"
import { CartFooterWrapper } from "./CartFooter.styled"

export const CartFooter = ({ price = 0, sendOrder }) => {

  return (
    <CartFooterWrapper>
      <p>
        <span>Total price: $</span>
        <span>{price.toFixed(2)}</span>
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