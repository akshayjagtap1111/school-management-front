import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, LOG_OUT } from "./action";

const init_state = {
  isloading: false,
  error: false,
  token: "",
  isAuthenticated: false,
  user:{}
};

export const admin_reducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isloading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: false,
        token: payload.token,
        isAuthenticated: true,
        user:payload.user_data
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isloading: false,
        error: true,
        token: "",
        isAuthenticated: false,
        user:{}
      };
      case LOG_OUT:
        return{
          ...state,
        isloading: false,
        error: false,
        token: "",
        isAuthenticated: false,
        user:{}
        }
    default:
        return state;
  }
};