const categoryInfo = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SELECTED_CATEGORY':
            return Object.assign({}, state, {
                selectedCategory: action.category
            });
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

export default categoryInfo;
