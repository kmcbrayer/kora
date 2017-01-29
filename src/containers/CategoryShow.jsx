import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Category from '../components/Category.jsx';

const mapStateToProps = (state) => {
    return {
        groupSize: 2,
        category: state.categoryInfo.selectedCategory
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGroupSizeChange: (category) => {
            console.log("group size change click")
            //dispatch(groupSizeChangeForCategory(category));
        },
        onPurchaseClick: (category) => {
            console.log("purchase click")
            //dispatch(purchaseCategory(category));
        }
    }
};

const CategoryShow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Category);

export default CategoryShow
