import { call, put, all,takeEvery, } from 'redux-saga/effects';
import axios from "axios";
import {getItems} from '../actions/getItemsAction';
import {FETCH_REQUEST} from '../constants';

export function* fetchData() {
    try {
        const data = yield call(() => {
                return axios.get(`https://jsonplaceholder.typicode.com/posts`)
                    .then(data => data.status === 200 ? data.data : [])
            }
        );
        yield put(getItems(data));
    } catch (error) {
        yield put(error => console.log(error));
    }
}

export default function* watchFetch() {
    yield takeEvery(FETCH_REQUEST, fetchData);
}


//     try {
//
//         const [posts, users, comments] = yield all([
//             call(() => {
//                 return axios.get(urlPosts)
//                     .then(data => data.status === 200 ? data.data : [])
//
//             }),
//             call(() => {
//                 return axios.get(urlUsers)
//                     .then(data => data.status === 200 ? data.data : [])
//
//             }),
//             call(() => {
//                 return axios.get(urlComments)
//                     .then(data => data.status === 200 ? data.data : [])
//
//             }),
//         ]);
//         yield put(addPost(posts));
//         yield put(addUsers(users));
//         yield put(addComments(comments));
//
//     }catch (error) {
//         yield put(() => {console.log('Getting data from server error: ' + error)})
//     }
// }
//
//