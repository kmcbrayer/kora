import React from 'react';
import { Link } from 'react-router';

const CategorySelectionList = ({ categories, gameId, onCategoryClick }) => (
    <ul>
        { categories ? (
            categories.map(category =>
                <li
                    key={category.id}
                    className="list-item"
                    onClick={() => onCategoryClick(category, gameId)}
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
