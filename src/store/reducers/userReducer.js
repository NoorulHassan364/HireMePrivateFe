import { ActionTypes } from "./../action-types/action-types";

const initialState = {
  user: {},
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_USER:
      debugger;
      return { ...state, user: payload?.data };

    default:
      return state;
  }
};
