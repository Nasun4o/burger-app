// import { addIngredient } from "../actions";
import * as actionTypes from "../actions/actionTypes";
import { updatedOnject } from "../../shared/utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const addIngredient = (state, action) => {
  const updatedIngredient = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
  };
  const updatedIngredients = updatedOnject(
    state.ingredients,
    updatedIngredient
  );
  const updatedState = {
    ingredients: updatedIngredients,
    totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updatedOnject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updatedIngr = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
  };
  const updatedIngrs = updatedOnject(state.ingredients, updatedIngr);
  const updatedSt = {
    ingredients: updatedIngrs,
    totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
    building: true
  };
  return updatedOnject(state, updatedSt);
};
const setIngredient = (state, action) => {
  return updatedOnject(state, {
    ingredients: action.ingredients,
    error: false,
    totalPrice: 4,
    building: false
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredient(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updatedOnject(state, { error: true });
    default:
      return state;
  }
};

export default reducer;
