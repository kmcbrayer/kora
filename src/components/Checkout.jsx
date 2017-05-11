import React from 'react';
import UserForm from "./UserForm.jsx";

export default class Checkout extends React.Component {
    render() {
        const tickets = this.props.tickets;
        return (
            <div> { tickets ? (
            <div>
                <h1>Checkout</h1>
                <div>
                    Game Details: gameID: {this.props.gameId}
                </div>
                <div>Category: {this.props.category.name}</div>
                <div>Seat Location: {tickets.section}, {tickets.row}, {tickets.seat}</div>
                <UserForm userInfo={this.props.userInfo} updateName={this.props.updateName} updateEmail={this.props.updateEmail} />
                <button className="checkoutButton" onClick={() => this.props.onPurchaseClick(tickets, this.props.userInfo)}>Purchase</button>
            </div>
            ) : (
                <div>Loading...</div>
            )}</div>
        )
    }
}
