import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Category from '../components/Category.jsx';
import { fetchSeatLocation } from '../actions/index.jsx';

const mapStateToProps = (state) => {
    return {
        gameId: state.gameInfo.selectedGameId,
        groupSize: 2,
        category: state.categoryInfo.selectedCategory,
        ticketBucket: state.ticketInfo.bucket.ticketBucket,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGroupSizeChange: (category) => {
            console.log("group size change click")
            //dispatch(groupSizeChangeForCategory(category));
        },
        onCheckoutClick: (category) => {
            console.log("checkout click")
            //dispatch(checkoutCategory(category));
        },
        onSeatRefresh: (category, gameId) => {
            dispatch(fetchSeatLocation(category.id, gameId, 2));
        }
    }
};

const CategoryShow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export default CategoryShow
