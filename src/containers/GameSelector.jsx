import React from 'react';
import { connect } from 'react-redux';

import { setSelectedGame } from '../actions/index.jsx';
import { fetchCategories } from '../actions/CategoryActions.jsx';
import GameSelectionList from '../components/GameSelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        games: state.gameInfo.games
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGameClick: (gameId) => {
            dispatch(setSelectedGame(gameId));
            dispatch(fetchCategories(gameId));
            console.log(this)
        }
    }
};

const GameSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameSelectionList);

export default GameSelector;
