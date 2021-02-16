import * as Actions from '../actions';

const initialState = {
    users: [],
};

const userReducer = function (state = initialState, action) {

    switch (action.type) {
        case Actions.GET_USERS_LIST: {
            return {
                ...state,
                users: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export default userReducer;

