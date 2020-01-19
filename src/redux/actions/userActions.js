import axios from 'axios';
import { returnErrors } from './errorActions';
import { GET_USERS, USERS_LOADING } from './types';

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

export const setUsersLoading = () => {
  return {
    type: USERS_LOADING
  };
};