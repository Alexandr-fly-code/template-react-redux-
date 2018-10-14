import {FETCH_SUCCESS} from '../constants';

export const getItems = (data) => ({
    type: FETCH_SUCCESS,
    data,
});