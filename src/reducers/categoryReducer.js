import {
  FETCH_CATEGORIES_PENDING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
} from "../actions/category";

import { initialState } from "./index";

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload,
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getCategories = (state) => state.categories.categories;
export const getCategoriesPending = (state) => state.categories.pending;
export const getCategoriesError = (state) => state.categories.error;
