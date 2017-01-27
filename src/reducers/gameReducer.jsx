const initialState = {
    games: window.loadInfo.games,
    selectedGame: window.loadInfo.games[0]
};

const loadInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_GAME':
            console.log("im here");
            let game = null;
            for(let i = 0; i < state.games; i++) {
                if (state.games[1].id == action.gameId) {
                    game = state.games[i];
                }
            }
            return Object.assign({}, state, {
                selectedGame: game ? game : null
            });
        default:
            return state
    }
};

export default loadInfo;
