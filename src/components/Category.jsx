import React from 'react';

const Category = ({ category, seats, groupSize, onCheckoutClick, onGroupSizeChange }) => (
    <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <div className="cat-line-item">
            Seats: {seats.location}
        </div>
        <div className="cat-line-item">
            Quantity: {groupSize}
        </div>
        <div className="cat-line-item">
            Price: {category.fixedPrice / 100} / Seat
        </div>

        <button onClick={onCheckoutClick(category)}>Checkout</button>
    </div>
);

export default Category;
