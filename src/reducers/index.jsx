import { combineReducers } from 'redux'
import gameInfo from './GameReducer.jsx'
import categoryInfo from './CategoryReducer.jsx'
import ticketInfo from './TicketReducer.jsx'

const gameApp = combineReducers({
    gameInfo,
    categoryInfo,
    ticketInfo
});

export default gameApp;
