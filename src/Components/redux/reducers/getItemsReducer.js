import {FETCH_SUCCESS} from '../constants';
export default function getItemsReducer(state = [], action) {
    switch (action.type){
        case FETCH_SUCCESS:
            return action.data;
        default: return state;
    }
}