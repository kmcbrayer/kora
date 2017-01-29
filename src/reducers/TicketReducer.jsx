const ticketInfo = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_SEAT_LOCATION':
            return Object.assign({}, state, {
                [action.gameId]: {
                    isFetching: true,
                }
            });
        case 'RECEIVE_SEAT_LOCATION':
            return Object.assign({}, state, {
                [action.categoryId]: {
                    isFetching: false,
                    seats: action.seats
                }
            });
        default:
            return state
    }
};

export default ticketInfo;
