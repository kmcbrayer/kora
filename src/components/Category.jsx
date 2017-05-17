import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category, ticketBucket, groupSize, gameId, onCheckoutClick, onSeatRefresh }) => (
    <div>{ category ? (<div>
        <h3>{category.name}</h3>
        <p>{category.description}</p>
        <div className="cat-line-item">
            Seats: { ticketBucket ? (
                <div className="full-width">
                    <span>{ticketBucket.ticket.section}, {ticketBucket.ticket.row}, {ticketBucket.ticket.seat}</span>
                    <span className="seat-refresh" onClick={() => onSeatRefresh(category, gameId)}>Refresh</span>
                </div>
            ) : (
                <div>
                    <span>Finding Seats</span>
                </div>
            )}
        </div>
        <div className="cat-line-item">
            Quantity: {groupSize}
        </div>
        <div className="cat-line-item">
            Price: {category.fixedPrice / 100} / Seat
        </div>
        <Link to={`/checkout`}>
            <button className="checkoutButton" onClick={() => onCheckoutClick(ticketBucket.ticket)}>Checkout</button>
        </Link>
    </div>) : (
        <div>Loading...</div>
    )}</div>
);

export default Category;
