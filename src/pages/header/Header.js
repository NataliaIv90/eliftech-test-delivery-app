import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledDivider, HeaderBtn } from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();
  const location = window.location.pathname;
  console.log(location);

  return (
    <StyledHeader>
      <HeaderBtn
        underlined={location.includes("shop") ? 1 : 0}
        variant="text"
        onClick={() => navigate('/')}
      >Shop</HeaderBtn>
      <StyledDivider >|</StyledDivider>
      <HeaderBtn
        underlined={location.includes("cart") ? 1 : 0}
        variant="text"
        onClick={() => navigate('/cart')}
      >Shoping Cart</HeaderBtn>
    </StyledHeader>
  )
}