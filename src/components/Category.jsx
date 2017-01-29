import React from 'react';

const Category = ({ category, ticketBucket, groupSize, onCheckoutClick, onGroupSizeChange }) => (
    <div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <div className="cat-line-item">
            Seats: { ticketBucket ? (
                <span>{ticketBucket.ticket.section}, {ticketBucket.ticket.row}, {ticketBucket.ticket.seat}</span>
            ) : (
                <span>Finding Seats</span>
            )}
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
