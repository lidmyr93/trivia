import {
  FETCH_QUESTIONS_ERROR,
  FETCH_QUESTIONS_PENDING,
  FETCH_QUESTIONS_SUCCESS,
} from "../actions/question";
import { initialState } from "./index";

export default function questionReducer(state = [], action) {
  console.log("question");
  switch (action.type) {
    case FETCH_QUESTIONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload,
      };
    case FETCH_QUESTIONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export const getQuestions = (state) => state.questions;
