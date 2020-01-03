import { LOAD_CHATS_SUCCESS } from "./chat.action.type";

const initialState = {
  chats: []
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case LOAD_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.payload
      };
    default:
      return state;
  }
};
