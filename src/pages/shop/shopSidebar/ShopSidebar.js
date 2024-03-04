import { Button } from '@mui/material';
import { ShopBtnsConainer, StyledHeader } from './ShopSidebar.styled';

export const ShopSidebar = ({ categories, category, setCategory }) => {
  return (
    <aside>
      <StyledHeader>Shops:</StyledHeader>
      <ShopBtnsConainer>

        {categories.map((el, index) =>
          <Button
            key={index}
            color='success'
            variant={category === el ? 'outlined' : 'text'}
            onClick={() => setCategory(el)}
          >{el}</Button>)}

      </ShopBtnsConainer>
    </aside>
  )
}
