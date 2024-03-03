import { styled, CardActions } from '@mui/material';

export const StyledCardActions = styled(CardActions)({
  justifyContent: 'flex-end'
});

export const StyledImage = styled('div')(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  height: '360px',
  width: '100%'
}));