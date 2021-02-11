import * as actionTypes from "../actions/actionTypes";
import { updatedOnject } from "../utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return updatedOnject(state, { purchased: false });
    case actionTypes.PURCHASE_BURGER_START:
      return updatedOnject(state, { loading: true });
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = updatedOnject(action.orderData, {
        id: action.orderId,
      });
      return updatedOnject(state, {
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      });
    case actionTypes.PURCHASE_BURGER_FAIL:
      return updatedOnject(state, { loading: false });
    case actionTypes.FETCH_ORDERS_START:
      return updatedOnject(state, { loading: true });
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return updatedOnject(state, {
        orders: action.orders,
        loading: false,
      });
    case actionTypes.FETCH_ORDERS_FAIL:
      return updatedOnject(state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
