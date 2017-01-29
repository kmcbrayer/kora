import React from 'react';
import { Link } from 'react-router';

const CategorySelectionList = ({ categories, onCategoryClick }) => (
    <ul>
        { categories ? (
            categories.map(category =>
                <li
                    key={category.id}
                    className="list-item"
                    onClick={() => onCategoryClick(category.id)}
                >
                    {category.name}
                </li>
            )
        ) : (
            <div>No Categories Found</div>
        )}
    </ul>
);

export default CategorySelectionList;
