import { combineReducers } from 'redux';
import weatherReducer from './red_weather';

const rootReducer = combineReducers({
    weather : weatherReducer
});

export default rootReducer;
