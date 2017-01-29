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
        default:
            return state
    }
};

export default ticketInfo;
