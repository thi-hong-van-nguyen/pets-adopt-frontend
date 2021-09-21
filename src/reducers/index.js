import { combineReducers } from 'redux';
import catReducer from './catReducer';
import dogReducer from './dogReducer';

export default combineReducers({
    catData: catReducer,
    dogData: dogReducer
})