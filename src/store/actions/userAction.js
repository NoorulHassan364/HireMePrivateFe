import { ActionTypes } from "../action-types/action-types";
import axios from "../../api/axiosConfig";
import { UserAPI } from "../../api";

export const getUser = (_id) => {
  return async (dispatch) => {
    const user = await axios.get(`/user/getUser/${_id}`);
    dispatch({ type: ActionTypes.GET_USER, payload: user?.data });
  };
};
