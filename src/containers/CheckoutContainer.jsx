import React from 'react';
import { connect } from 'react-redux';
import { updateUserName, updateUserEmail } from '../actions/UserActions.jsx';

import Checkout from '../components/Checkout.jsx';

const mapStateToProps = (state) => {
    return {
        gameId: state.gameInfo.selectedGameId, // gonna need to get game here
        category: state.categoryInfo.selectedCategory,
        tickets: state.ticketInfo.selectedTickets,
        userInfo: state.userInfo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: (tickets, fanInfo) => {
            console.log("clicked purchase")
        },
        updateName: (e) => {
            dispatch(updateUserName(e.target.value))
        },
        updateEmail: (e) => {
            dispatch(updateUserEmail(e.target.value))
        }
    }
};

const CheckoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);

export default CheckoutContainer
