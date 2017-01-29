import fetch from 'isomorphic-fetch'

export function setSelectedGame(gameId) {
    return {
        type: 'SET_SELECTED_GAME',
        gameId
    }
}

export function setSelectedCategory(categoryId) {
    return {
        type: 'SET_SELECTED_CATEGORY',
        categoryId
    }
}

export function fetchCategories(gameId) {
    return {
        type: 'FETCH_CATEGORIES_FOR_GAMEID',
        gameId
    };
    // url: blah:8082/game/gameId/categories
    //
}
