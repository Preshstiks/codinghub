const authState = {
  isAuthenticated: false,
  Loading: false,
  user: "",
};

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        ...state,
        Loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        Loading: false,
        isAuthenticated: true,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        Loading: false,
        isAuthenticated: false,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        Loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        Loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        Loading: false,
        isAuthenticated: false,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        Loading: true,
      };
    case "LOGOUT":
      return {
        ...state,
        Loading: false,
        isAuthenticated: false,
        user: "",
      };

    default:
      return state;
  }
};
