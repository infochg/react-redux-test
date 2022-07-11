import { SET_USER_DATA } from "../constants/actions";

export default function userData(state = null, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return action.payload;
    default:
      return state;
  }
}
