import axios from "axios";
import {
  ROBOFRIENDS_REQUEST,
  ROBOFRIENDS_REQUEST_SUCCESS,
  ROBOFRIENDS_REQUEST_FAIL,
} from "../contstans/RobotsContasts";

export const fetchRoboFriends = () => async (dispatch) => {
  try {
    dispatch({
      type: ROBOFRIENDS_REQUEST,
    });

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
      type: ROBOFRIENDS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ROBOFRIENDS_REQUEST_FAIL,
      payload: error.message,
    });
  }
};
