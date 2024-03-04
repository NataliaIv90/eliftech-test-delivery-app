import { StyledHeader, StyledDivider, HeaderBtn } from './Header.styled';

export const Header = () => {
  const location = window.location.pathname;
  console.log(location);

  return (
    <StyledHeader>
      <HeaderBtn
        underlined={location.includes("shop") ? 1 : 0}
        variant="text"
      >Shop</HeaderBtn>
      <StyledDivider >|</StyledDivider>
      <HeaderBtn
        underlined={location.includes("cart") ? 1 : 0}
        variant="text"
      >Shoping Cart</HeaderBtn>
    </StyledHeader>
  )
}