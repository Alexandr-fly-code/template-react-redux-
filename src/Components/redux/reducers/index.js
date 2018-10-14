import {combineReducers} from 'redux';
import getItemsReducer from './getItemsReducer';

const rootReducer = combineReducers({
    getItemsReducer,
});

export default rootReducer;