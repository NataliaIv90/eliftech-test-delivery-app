import styled from "@emotion/styled";
import { Button } from "@mui/material";

const StyledHeader = styled('header')({
  padding: '2%',
});

const StyledDivider = styled('span')({
  margin: '0 3%'
});


export const Header = () => (
  <StyledHeader>
    <Button variant="text">Shop</Button>
    <StyledDivider >|</StyledDivider>
    <Button variant="text">Shoping Cart</Button>
  </StyledHeader>
)