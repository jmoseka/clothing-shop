import React from 'react';

import PropTypes from 'prop-types';
import CategoryItem from '../category-item/category-item-component';

function Directory({ categories }) {
  const cat = categories;
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

Directory.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Directory;
