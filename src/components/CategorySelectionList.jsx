import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelectionList = ({ categories, gameId, onCategoryClick }) => (
    <ul>
        { categories ? (
            categories.map(category =>
                <Link key={category.id} to={`/categoryShow`}>
                    <li
                        key={category.id}
                        className="list-item"
                        onClick={() => onCategoryClick(category, gameId)}
                    >
                        {category.name}
                    </li>
                </Link>
            )
        ) : (
            <div>Loading Categories...</div>
        )}
    </ul>
);

export default CategorySelectionList;
