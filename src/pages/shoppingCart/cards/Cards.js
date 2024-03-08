import { useContext } from "react";
import { CartContext } from "../../app/App";
import { CardsWrapper } from "./Cards.styled";
import { CartCard } from "../cartCard/CartCard";

export const Cards = () => {
  const { cart } = useContext(CartContext);
  const cartKeys = Object.keys(cart);

  if (cartKeys.length === 0) {
    return <CardsWrapper>There are no items in the cart</CardsWrapper>
  }

  return (
    <CardsWrapper>
      {cartKeys.map((el) => <CartCard data={cart[el]} key={el} />)}
    </CardsWrapper>
  )
}