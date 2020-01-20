import { 
    GET_USERS,
    UPDATE_USER, 
    USERS_LOADING } from '../actions/types';
  
const initialState = {
    users: [],
    loading: false
};
  
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
        return {
            ...state,
            users: action.payload,
            loading: false
        };
        case UPDATE_USER:
        return {
            ...state,
            users: state.users.map(user =>
                user.id === action.payload.id
                    ? (user = action.payload)
                    : user
                )
        };
        case USERS_LOADING:
        return {
            ...state,
            loading: true
        };
        default:
        return state;
    }
}