import * as Actions from '../actions';

const initialState = {
    success: false,
    user: {},
    isLoading: false
};

const authReducer = function (state = initialState, action) {
    switch (action.type) {
        case Actions.LOGIN_SUCCESS: {
            return {
                success: true,
                user: action.payload,
                isLoading: false
            };
        }
        case Actions.LOGGED_OUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
