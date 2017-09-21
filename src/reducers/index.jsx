import { combineReducers } from 'redux'
import gameInfo from './GameReducer.jsx'
import categoryInfo from './CategoryReducer.jsx'
import ticketInfo from './TicketReducer.jsx'
import userInfo from './UserReducer.jsx'
import { reducer as formReducer } from 'redux-form'

const gameApp = combineReducers({
    categoryInfo,
    gameInfo,
    ticketInfo,
    userInfo,
    form: formReducer
});

export default gameApp;
