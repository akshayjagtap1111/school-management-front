//action types
import axios from "axios"

export const LOGIN_LOADING = "LOGIN_LOADING";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOG_OUT ="LOG_OUT"

//actoion creators

export const login_loading = () => {
  return { type: LOGIN_LOADING };
};

export const login_success = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const login_failure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout=()=>{
  return{
    type:LOG_OUT
  }
}

export const userlogin =(userDetails)=>(dispatch)=>{

    console.log(userDetails)

    dispatch(login_loading());
    axios
      .post("http://localhost:3000/login", userDetails)
      .then((res) => {
        console.log(".then");
        dispatch(login_success(res.data));
      })
      .catch((err) => {
        dispatch(login_failure());
        console.log(".catch");
        alert("please enter valid credentials");
      });

}