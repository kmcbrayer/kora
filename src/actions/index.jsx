import fetch from 'isomorphic-fetch'
import EXP_API_KEY from '../secrets.jsx'

export function setSelectedGame(gameId) {
    return {
        type: 'SET_SELECTED_GAME',
        gameId
    }
}

export function setSelectedCategory(category) {
    return {
        type: 'SET_SELECTED_CATEGORY',
        category: category
    }
}

function requestCategories(gameId) {
    return {
        type: 'REQUEST_CATEGORIES_FOR_GAMEID',
        gameId
    }
}

function receiveCategories(gameId, categories) {
    return {
        type: 'RECEIVE_CATEGORIES_FOR_GAMEID',
        gameId,
        categoriesJson: categories
    }
}

export function fetchCategories(gameId) {
    const url = 'http://localhost:8082/ticket-service/v2/game/' + gameId + '/categories';
    return dispatch => {
        dispatch(requestCategories(gameId));
        return fetch(url, {
                headers: {
                    'X-EXP-API-KEY': EXP_API_KEY
                }
            }).then(response => response.json())
            .then(json => dispatch(receiveCategories(gameId, json)))
    };
}
