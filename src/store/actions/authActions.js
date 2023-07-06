export const registerRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};
export const registerSuccess = () => {
  return {
    type: "REGISTER_SUCCESS",
  };
};
export const registerFailure = () => {
  return {
    type: "REGISTER_FAILURE",
  };
};
export const loginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};
export const loginSuccess = ({ data }) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
export const loginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};
export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
