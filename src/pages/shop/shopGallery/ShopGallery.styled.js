import { styled } from "@mui/material";

export const ShopGalleryWrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '25px',
  padding: '2%',
  height: '80vh',
  overflowY: 'auto'
});
