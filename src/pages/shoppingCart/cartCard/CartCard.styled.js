import { Button, styled } from "@mui/material";

export const CardWrapper = styled('div')(({ theme }) => ({
  border: `0.5px solid ${theme.palette.text.dark}55`,
  boxShadow: `2px 2px ${theme.palette.text.dark}55`,
  padding: '10px',
  display: 'grid',
  gridTemplateColumns: '1fr 0.7fr',
  gap: '20px',
  marginBottom: '30px',
  borderRadius: '10px'
}));

export const ItemImg = styled('img')({
  height: '100%',
  width: '100%',
  aspectRatio: '100/60',
  objectFit: 'cover',
  borderRadius: '10px'
});

export const ItemContent = styled('div')({
  textAlign: 'center',
  padding: '20px 5px 5px'
});

export const CartCardAmountBtn = styled(Button)({
  padding: '5px',
  width: '25px',
  height: '25px',
  borderRadius: '50px',
  minWidth: 'auto',
  margin: '0 20px',
})