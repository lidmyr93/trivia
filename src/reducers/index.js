

import {combineReducers} from "redux";
import categoriesReducer from "./categoryReducer";
import questionReducer from "./questionReducer";

export const initialState = {
  pending: false,
  categories: [],
  error: null,
  questions : []
}



export const rootReducer = combineReducers({categories : categoriesReducer, questions: questionReducer})