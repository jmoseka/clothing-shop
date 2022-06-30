import React from 'react';
import PropTypes from 'prop-types';

import './category-item.styles.scss';

function CategoryItem({ category }) {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
}
CategoryItem.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};
export default CategoryItem;
