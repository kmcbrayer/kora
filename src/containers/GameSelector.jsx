import React from 'react';
import { connect } from 'react-redux'
import { setSelectedGame } from '../actions/index.jsx';
import GameSelectionList from '../components/GameSelectionList.jsx';

const mapStateToProps = (state) => {
    return {
        games: state.loadInfo.games
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onGameClick: (gameId) => {
            dispatch(setSelectedGame(gameId))
        }
    }
};

const GameSelector = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameSelectionList);

export default GameSelector;
