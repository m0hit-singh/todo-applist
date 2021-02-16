import AuthService from '../../auth-service.security';
import history from '../../../../store/history';

export const LOGIN_SUCCESS = 'AUTH: LOGIN_SUCCESS';
export const LOGGED_OUT = 'AUTH: LOGGED_OUT';

export function login({ username, password }) {

    return (dispatch) => {
        AuthService
            .login(username, password)
            .then(user => {
                history.push('/home');
                dispatch(setUser(user));
            })
            .catch(error => {
                window.location.replace('/');
            });
    };
}


export function setUser(user) {
    return (dispatch) => {
        dispatch({ type: LOGIN_SUCCESS, payload: user });
    };
}

export function logout() {
    return dispatch => {
        AuthService.logout();

        window.location.replace('/')

        dispatch({ type: LOGGED_OUT });
    };
}
