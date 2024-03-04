import { Button } from '@mui/material';
import { MediaCard } from './card/Card';
import { ShopContentWrapper, ShopBtnsConainer, ShopGallery, StyledHeader } from './Shop.styled';
import { useState, useEffect } from 'react';

const categories = ['Seafood', 'Dessert', 'Pasta', 'Pork', 'Vegan', 'Breakfast'];

export const Shop = () => {
  const [menuData, setMenuData] = useState([]);
  const [category, setCategory] = useState('Seafood');

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setMenuData(data.meals));
  }, [category]);

  return (
    <ShopContentWrapper>

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

      <ShopGallery>
        {Array.isArray(menuData) && menuData.length > 0
          ? menuData.map((el) => <MediaCard key={el.idMeal} data={el} />)
          : null}
      </ShopGallery>

    </ShopContentWrapper>
  )
}