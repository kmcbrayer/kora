import { combineReducers } from 'redux'
import gameInfo from './GameReducer.jsx'
import categoryInfo from './CategoryReducer.jsx'
import ticketInfo from './TicketReducer.jsx'
import userInfo from './UserReducer.jsx'

const gameApp = combineReducers({
    categoryInfo,
    gameInfo,
    ticketInfo,
    userInfo
});

export default gameApp;
