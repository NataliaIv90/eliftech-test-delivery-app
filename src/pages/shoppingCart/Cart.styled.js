import { styled } from "@mui/system";

export const CartWrapper = styled('main')({
  display: 'grid',
  gridTemplateAreas: "'form cards''footer footer'",
  padding: '2%',
  gridTemplateColumns: '1fr 1.2fr',
  gap: '30px',
  height: '80vh',
});
