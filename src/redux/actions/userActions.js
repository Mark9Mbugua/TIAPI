import axios from 'axios';
import { history } from '../../helpers/history';
import { returnErrors } from './errorActions';
import { 
  GET_USERS, 
  UPDATE_USER, 
  USERS_LOADING
} from './types';

//get users action
export const getUsers = () => (dispatch) => {
  dispatch(setUsersLoading());
  axios
    .get('https://ti-react-test.herokuapp.com/users')
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//update user action
export const updateUser = (user, id) => (dispatch) => {
  axios
    .patch(`https://ti-react-test.herokuapp.com/users/${id}`, user)
    .then(res =>
      dispatch({
        type: UPDATE_USER,
        payload: res.data
      }),
      history.push('/')
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};