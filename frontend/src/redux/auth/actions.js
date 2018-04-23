import parseOneAddress from 'email-addresses';

export function loginSuccess(profileObj, tokenObj) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      tokenObj,
      profileObj,
    },
  };
}

export function loginFail(error) {
  return {
    type: 'LOGIN_FAIL',
    payload: error,
  };
}

export function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS',
  };
}

export function logout() {
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
}

export function login(response) {
  const { profileObj, tokenObj } = response;
  return (dispatch) => {
    const { email, googleId } = profileObj;
    const emailAst = parseOneAddress(email);
    const emailAddress = emailAst.addresses[0];
    const { domain } = emailAddress;
    const isValid = domain === 'whitman.edu';
    if (isValid) {
      dispatch(loginSuccess(profileObj, tokenObj));
    } else {
      dispatch(loginFail(profileObj, tokenObj));
    }
    const requestURL = `http://127.0.0.1:5000/user/${googleId}`;
    const request = new XMLHttpRequest();
    request.open('POST', requestURL);
    request.responseType = "json";
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(profileObj));
  }
}