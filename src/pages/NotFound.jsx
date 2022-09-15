import React from 'react';
import CustomLink from '../components/customLink/CustomLink';

const NotFound = () => {
  return (
      <div>
          <div>
              <CustomLink to={'/'} >Home</CustomLink>
          </div>

          (404) Кажется, мы потерялись... Вернитесь <a href="\">на начальную страницу</a> и начните навигацию снова.
      </div>
  )
};

export default NotFound;