import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setSelectedCategory } from '../actions/index.jsx';

import CategorySelectionList from '../components/CategorySelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        categories: state.categoryInfo[state.gameInfo.selectedGameId].categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryClick: (category) => {
            dispatch(setSelectedCategory(category));
            browserHistory.push('/categoryShow');
        }
    }
};

const CategorySelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategorySelectionList);

export default CategorySelector;
