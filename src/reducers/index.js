import {combineReducers} from 'redux'
import {monsterReducer} from '../game-option-II/monster/monsterRedux'

const rootReducer = combineReducers({
    monster:monsterReducer
});

export default rootReducer;

