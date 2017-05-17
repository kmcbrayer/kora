import React from 'react';
import { connect } from 'react-redux';

import Category from '../components/Category.jsx';
import { checkoutCategory } from '../actions/CategoryActions.jsx';
import { fetchSeatLocation } from '../actions/index.jsx';

const mapStateToProps = (state) => {
    return {
        gameId: state.gameInfo.selectedGameId,
        groupSize: 2,
        category: state.categoryInfo.selectedCategory,
        ticketBucket: state.ticketInfo.bucket && state.ticketInfo.bucket.ticketBucket,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckoutClick: (tickets) => {
            dispatch(checkoutCategory(tickets));
        },
        onSeatRefresh: (category, gameId) => {
            dispatch(fetchSeatLocation(category.id, gameId, 2));
        }
    }
};

const CategoryShowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export default CategoryShowContainer
