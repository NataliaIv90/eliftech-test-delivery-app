import { styled, CardActions, Typography, Card, Button } from '@mui/material';

export const StyledCardActions = styled(CardActions)({
  justifyContent: 'flex-end',
});

export const StyledImage = styled('div')(({ img }) => ({
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  height: '360px',
  width: '100%'
}));

export const StyledCardTitle = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  lineHeight: 1.2
})

export const StyledCardSubtitle = styled(StyledCardTitle)({
  lineHeight: 1.1,
});

export const StyledCard = styled(Card)(({ theme }) => ({
  height: '400px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  border: `0.1px solid ${theme.palette.background.main}`
}));

export const StyledButton = styled(Button)({
  textTransform: 'none',
})