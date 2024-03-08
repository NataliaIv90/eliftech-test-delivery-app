import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledHeader = styled('header')(({ theme }) => ({
  height: '15%',
  backgroundColor: theme.palette.background.dark,
  padding: '1%',
  color: theme.palette.text.light
}));

export const StyledDivider = styled('span')({
  margin: '0 2%',
});

export const HeaderBtn = styled(Button)(({ theme, underlined }) => ({
  color: theme.palette.text.light,
  textDecoration: underlined === 1 ? 'underline' : 'none',
  textTransform: 'capitalize',
  fontSize: '1.1rem',

  '&:hover': {
    textDecoration: 'underline',
  }
}));
