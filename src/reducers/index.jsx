import { combineReducers } from 'redux'
import loadInfo from './gameReducer.jsx'

const gameApp = combineReducers({
    loadInfo
});

export default gameApp;
