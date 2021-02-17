import * as actionTypes from "../actions/actionTypes";
import { updatedOnject } from "../utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/'
};



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return updatedOnject(state, { error: null, loading: true });
    case actionTypes.AUTH_SUCCESS:
      return updatedOnject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      });
    case actionTypes.AUTH_FAIL:
      return updatedOnject(state, { error: action.error, loading: false });
    case actionTypes.AUTH_LOGOUT:
      return updatedOnject(state, {token: null, userId: null});  
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return updatedOnject(state, {authRedirectPath: action.path});
    default:
      return state;
  }
};

export default reducer;
