import React from 'react';
import { Link } from 'react-router-dom';

const CategorySelectionList = ({ categories, gameId, onCategoryClick }) => (
    <ul>
        { categories ? (
            categories.map(category =>
                <Link to={`/categoryShow`}>
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
            <div>No Categories Found</div>
        )}
    </ul>
);

export default CategorySelectionList;
