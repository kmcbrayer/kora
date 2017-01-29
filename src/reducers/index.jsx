import { combineReducers } from 'redux'
import gameInfo from './GameReducer.jsx'
import categoryInfo from './CategoryReducer.jsx'

const gameApp = combineReducers({
    gameInfo,
    categoryInfo
});

export default gameApp;
