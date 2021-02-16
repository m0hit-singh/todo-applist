import axios from 'axios';

export const GET_USERS_LIST = 'USERS: GET_USERS_LIST';

export function getUsers() {

    const request = axios.get(`/api/person/`);

    return dispatch =>
        request
            .then(res =>
                dispatch({
                    type: GET_USERS_LIST,
                    payload: res.data
                })
            );
}
