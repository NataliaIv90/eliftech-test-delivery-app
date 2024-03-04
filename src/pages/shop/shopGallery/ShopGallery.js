import { ShopGalleryWrapper } from './ShopGallery.styled';
import { MediaCard } from '../card/Card';

export const ShopGallery = ({ menuData }) => {
  return (
    <ShopGalleryWrapper>
      {Array.isArray(menuData) && menuData.length > 0
        ? menuData.map((el) =>
          <MediaCard
            key={el.idMeal}
            data={el}
          />
        )
        : null}
    </ShopGalleryWrapper>
  )
}
