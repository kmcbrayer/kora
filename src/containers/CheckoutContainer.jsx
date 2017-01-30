import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Checkout from '../components/Checkout.jsx';

const mapStateToProps = (state) => {
    return {
        gameId: state.gameInfo.selectedGameId, // gonna need to get game here
        category: state.categoryInfo.selectedCategory,
        tickets: state.ticketInfo.selectedTickets,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPurchaseClick: (tickets, fanInfo) => {
            console.log("purchase click")
        }
    }
};

const CheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);

export default CheckoutContainer
