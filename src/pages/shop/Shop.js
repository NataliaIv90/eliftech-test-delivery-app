import { ShopContentWrapper } from './Shop.styled';
import { useState, useEffect } from 'react';
import { ShopSidebar } from './shopSidebar/ShopSidebar';
import { ShopGallery } from './shopGallery/ShopGallery';

export const Shop = () => {
  const [category, setCategory] = useState('Seafood');
  const categories = ['Seafood', 'Dessert', 'Pasta', 'Pork', 'Vegan', 'Breakfast'];
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((response) => response.json())
      .then((data) => setMenuData(data.meals));
  }, [category]);

  return (
    <ShopContentWrapper>
      <ShopSidebar categories={categories} category={category} setCategory={setCategory} />
      <ShopGallery menuData={menuData} />
    </ShopContentWrapper>
  )
}
