import React from 'react';

const Category = ({ category, onGameClick }) => (
    <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
    </div>
);

export default Category;
