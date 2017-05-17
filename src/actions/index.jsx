

export function setSelectedGame(gameId) {
    return {
        type: 'SET_SELECTED_GAME',
        gameId
    }
}

function requestSeatLocation(categoryId, gameId) {
    return {
        type: 'REQUEST_SEAT_LOCATION',
        categoryId,
        gameId
    }
}

function receiveSeatLocation(categoryId, gameId, ticketBucketJson) {
    return {
        type: 'RECEIVE_SEAT_LOCATION',
        categoryId,
        gameId,
        ticketBucketJson
    }
}

export function fetchSeatLocation(categoryId, gameId, groupSize) {
    const queryParams = 'seatCategoryId=' + categoryId + '&groupSize=' + groupSize + '&gameId=' + gameId;
    const url = 'http://localhost:8082/ticket-service/v2/game/' + gameId + '/category/' + categoryId + '/ticket' + '?' + queryParams;
    return dispatch => {
        dispatch(requestSeatLocation(categoryId, gameId));
        return fetch(url, {
            headers: {
                'X-EXP-API-KEY': 'TEG3VtfVnfLX6CmoRpox'
            }
        }).then(response => response.json())
            .then(ticketBucketJson => dispatch(receiveSeatLocation(categoryId, gameId, ticketBucketJson)))
        //.catch()
    }
}
