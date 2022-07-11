import { SET_USER_DATA } from "../constants/actions";

export function setUserData(payload) {
  return { type: SET_USER_DATA, payload };
}

export function clearUserData() {
  return { type: SET_USER_DATA, payload: null };
}
