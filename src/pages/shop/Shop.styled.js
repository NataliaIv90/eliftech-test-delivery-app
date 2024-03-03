import { styled } from "@mui/material";

export const ShopContentWrapper = styled('main')({
  display: 'grid',
  gridTemplateColumns: '1fr 3fr',
});

export const ShopBtnsConainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '20px',
});

export const ShopGallery = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  padding: '2%',
  height: '75vh',
  overflowY: 'auto'
});

export const StyledHeader = styled('h2')({
  textAlign: 'center',
})