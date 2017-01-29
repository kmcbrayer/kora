import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { setSelectedGame, fetchCategories } from '../actions/index.jsx';
import GameSelectionList from '../components/GameSelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        games: state.gameInfo.games
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGameClick: (gameId) => {
            dispatch(setSelectedGame(gameId));
            dispatch(fetchCategories(gameId));
            browserHistory.push('/categories')
        }
    }
};

const GameSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameSelectionList);

export default GameSelector;
