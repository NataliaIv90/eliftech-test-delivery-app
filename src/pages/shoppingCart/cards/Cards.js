import { useContext } from "react";
import { CartContext } from "../../app/App";
import { CardsWrapper } from "./Cards.styled";
import { CartCard } from "../cartCard/CartCard";

export const Cards = () => {
  const { cart, setCart } = useContext(CartContext);
  const cartKeys = Object.keys(cart);

  const reduceItemsAmount = (key) => {
    if (cart[key].amount > 0) {
      setCart({
        ...cart,
        [key]: {
          ...cart[key],
          amount: cart[key].amount - 1
        }
      });
    }
  };

  const increaseItemsAmount = (key) => {
    setCart({
      ...cart,
      [key]: {
        ...cart[key],
        amount: cart[key].amount + 1
      }
    });
  };

  if (cartKeys.length === 0) {
    return <CardsWrapper>There are no items in the cart</CardsWrapper>
  }

  return (
    <CardsWrapper>
      {cartKeys.map((el) => <CartCard
        data={cart[el]}
        key={el}
        reduceItemAmount={() => reduceItemsAmount(el)}
        increaseItemAmount={() => increaseItemsAmount(el)}
      />)}
    </CardsWrapper>
  )
}