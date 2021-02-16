import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import securityReducer from '../../library/security/store/reducers/auth.reducer'

const reducer = combineReducers({
    list: userReducer,
    security: securityReducer
});

export default reducer;
