import { LOAD_CHATS_SUCCESS } from "./chat.action.type";

export const getChats = chats => {
  return dispatch => {
    dispatch(getDataSuccess(chats));
  };
};

const getDataSuccess = payload => ({
  type: LOAD_CHATS_SUCCESS,
  payload
});
