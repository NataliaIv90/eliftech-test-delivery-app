import { styled } from "@mui/system";

export const CartWrapper = styled('main')({
  display: 'grid',
  gridTemplateColumns: '1fr 1.2fr',
  padding: '2%'
});

export const DeliveryInfo = styled('div')({
  width: '100%',
});

export const ItemsInCart = styled('div')({
  height: '84vh',
  overflowY: 'scroll',
})