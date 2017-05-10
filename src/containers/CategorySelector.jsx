import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { setSelectedCategory, fetchSeatLocation } from '../actions/index.jsx';

import CategorySelectionList from '../components/CategorySelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        gameId: state.gameInfo.selectedGameId,
        categories: state.categoryInfo[state.gameInfo.selectedGameId]
            && state.categoryInfo[state.gameInfo.selectedGameId].categories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCategoryClick: (category, gameId) => {
            dispatch(setSelectedCategory(category));
            // 2 == "defaultGroupSize"
            dispatch(fetchSeatLocation(category.id, gameId, 2));
            browserHistory.push('/categoryShow');
        }
    }
};

const CategorySelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategorySelectionList);

export default CategorySelector;
