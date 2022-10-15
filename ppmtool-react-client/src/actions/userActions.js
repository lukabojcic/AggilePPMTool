import axios from "axios";
import { GET_ERRORS } from "./types";


export const createUser = (user, history) => async dispatch => {
    try {
      await axios.post("/api/user", user);
      history.push("/dashboard");
      dispatch({
        type: GET_ERRORS,
        payload: {}
      });
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };