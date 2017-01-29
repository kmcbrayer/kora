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

function requestSeatLocation(categoryId, gameId) {
    return {
        type: 'REQUEST_SEAT_LOCATION',
        categoryId,
        gameId
    }
}

function receiveSeatLocation(categoryId, gameId, seats) {
    debugger;
    return {
        type: 'RECEIVE_SEAT_LOCATION',
        categoryId,
        gameId,
        seats
    }
}

export function fetchSeatLocation(categoryId, gameId, groupSize) {
    const url = 'http://localhost:8082/ticket-service/v2/game/' + gameId + '/category' + categoryId + '/ticket';
    return dispatch => {
        dispatch(requestSeatLocation(categoryId, gameId));
        return fetch(url, {
            headers: {
                'X-EXP-API-KEY': EXP_API_KEY
            },
            body: {
                groupSize: groupSize,
                ticketSource: 1 // IDK what this means yet
            }
        }).then(response => response.json())
            .then(json => dispatch(receiveSeatLocation(categoryId, gameId, json)))
    }
}
