const initialState = {
    games: window.loadInfo.games,
    selectedGameId: window.loadInfo.games[0].id
};

const loadInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SELECTED_GAME':
            return Object.assign({}, state, {
                selectedGameId: action.gameId
            });
        case 'SET_SELECTED_CATEGORY':
            return state;
        case 'REQUEST_CATEGORIES_FOR_GAMEID':
            return Object.assign({}, state, {
                [action.gameId]: {
                    isFetching: true,
                }
            });
        case 'RECEIVE_CATEGORIES_FOR_GAMEID':
            return Object.assign({}, state, {
                [action.gameId]: {
                    isFetching: false,
                    categories: action.categoriesJson.categories
                }
            });
        default:
            return state
    }
};

export default loadInfo;
