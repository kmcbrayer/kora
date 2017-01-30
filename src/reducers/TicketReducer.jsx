const ticketInfo = (state = {}, action) => {
    switch (action.type) {
        case 'REQUEST_SEAT_LOCATION':
            return Object.assign({}, state, {
                bucket: {
                    isFetching: true
                }
            });
        case 'RECEIVE_SEAT_LOCATION':
            return Object.assign({}, state, {
                bucket: {
                    isFetching: false,
                    ticketBucket: action.ticketBucketJson
                }
            });
        case 'CHECKOUT_FOR_CATEGORY':
            return Object.assign({}, state, {
                selectedTickets: action.tickets
            });
        default:
            return state
    }
};

export default ticketInfo;
