const initialState = {
    games: window.loadInfo.games,
    selectedGameId: window.loadInfo.games[0].id
};

const gameInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_GAME':
            return Object.assign({}, state, {
                selectedGameId: action.gameId
            });

        default:
            return state
    }
};

export default gameInfo;
