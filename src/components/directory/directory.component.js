import React from 'react';
import CategoryItem from '../category-item/category-item-component';
import './directory.styles.scss';

function Directory(props) {
  const p = props;
  const cat = p.categories;
  return (
    <div className="directory-container">
      {
        cat.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))
      }
    </div>

  );
}

export default Directory;
