import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setSelectedCategory } from '../actions/index.jsx';

import CategorySelectionList from '../components/CategorySelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        categories: state.loadInfo[state.loadInfo.selectedGameId].categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryClick: (categoryId) => {
            dispatch(setSelectedCategory(categoryId));
            browserHistory.push('/');
        }
    }
};

const CategorySelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategorySelectionList);

export default CategorySelector;
