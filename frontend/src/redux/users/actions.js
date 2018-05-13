import { getIdToken } from '../auth/selectors';
import { getUserById } from './selectors';
import sampleData from '../sampleData';

const { USER_DATA } = sampleData;
const USER_ENDPOINT = 'http://127.0.0.1:5000/userlist/';

export function getUserSuccess(userId, user) {
  return {
    type: 'GET_USER_SUCCESS',
    payload: {
      userId,
      user,
    },
  };
}

export function getUserFail() {
  return {
    type: 'GET_USER_FAIL',
  };
}

export function getUserListSuccess(userList) {
  return {
    type: 'GET_USER_LIST_SUCCESS',
    payload: {
      userList,
    },
  };
}

export function getUserListFail() {
  return {
    type: 'GET_USER_LIST_FAIL',
  };
}

export function loadUserList(boolean) {
  return {
    type: 'LOAD_USER_LIST',
    payload: boolean,
  };
}

export function fetchUser(userId) {
  return (dispatch) => {
    setTimeout(() => {
      if (USER_DATA[userId]) {
        const user = USER_DATA[userId];
        dispatch(getUserSuccess(userId, user));
      } else {
        dispatch(getUserFail());
      }
    }, 2000);
  };
}

export function getUser(userId) {
  return (dispatch, getState) => {
    const state = getState();
    const { userList } = state.usersReducer;
    if (userList[userId]) {
      const user = userList[userId];
      dispatch(getUserSuccess(userId, user));
    } else {
      dispatch(fetchUser(userId));
    }
  };
}

export function getUserList(googleIds) {
  return (dispatch, getState) => {
    //third GET request using google tokens to get user objects
    const state = getState();
    const urlDest = USER_ENDPOINT + googleIds;
    const requestUsers = new XMLHttpRequest();
    requestUsers.open('GET', urlDest);
    const idToken = getIdToken(state);
    requestUsers.setRequestHeader("Content-Type", "application/json");
    requestUsers.setRequestHeader("Authorization", `Bearer ${idToken}`);
    requestUsers.responseType = "json";
    requestUsers.send(urlDest);
    requestUsers.onload = () => {
      const userObjs = requestUsers.response;
      if (userObjs) {
        if (userObjs.users) {
          const userList = userObjs.users;
          dispatch(getUserListSuccess(userList));
        }
      }
    };
  };
}
