import axios from 'axios'
import { GET_USERS_STARTED, GET_USERS, GET_USER_DETAIL } from './actionTypes'

export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: GET_USERS_STARTED });
    axios.get('https://api.github.com/users')
      .then(res => {
        console.log("<-- // DATA RECEIVED FROM SERVER // --> ");
        console.log(res.data);
        dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch(({ response }) => {
        console.log("// ERROR RECEIVED FROM SERVER //");
        console.log(response);
      });
  }
};

export const getSpecificUser = (name) => {
  return (dispatch) => {
    dispatch({ type:GET_USERS_STARTED });
    axios.get('https://api.github.com/users'+name+'')
    .then(res=> {
      console.log('Fetch Specific User');
      console.log(res.data);
      dispatch({type: GET_USER_DETAIL, payload:res.data });
    })
    .catch(({ response}) =>{
  console.log("Errors");
console.log(response);
});
  }
};
