import React from 'react';

export default class Checkout extends React.Component {
    render() {
        const tickets = this.props.tickets;
        return (
            <div> { tickets ? (<div>
                <h1>Checkout</h1>
                <div>
                    Game Details: gameID: {this.props.gameId}
                </div>
                <div>
                    Ticket Details:
                <div>Category: {this.props.category.name}</div>
                    <span>Seat Location: {tickets.section}, {tickets.row}, {tickets.seat}</span>
                </div>
            </div>) : (
                <div>Loading...</div>
            )}</div>
        )
    }
}
