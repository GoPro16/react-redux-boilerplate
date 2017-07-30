import { handleActions, createAction } from "redux-actions";

const base = "auth/";
const INITIAL_STATE = {};

const setError = createAction(`${base}ERROR`);
export default handleActions(
  {
    [setError]: (state, { payload }) => ({
      ...state,
      error: payload
    })
  },
  INITIAL_STATE
);
