import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Category from '../components/Category.jsx';

const mapStateToProps = (state) => {
    return {
        groupSize: 2,
        category: state.categoryInfo.selectedCategory,
        seats: state.ticketInfo.seats || "Finding Seats",
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
        }
    }
};

const CategoryShow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export default CategoryShow
