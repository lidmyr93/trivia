//questions

export const FETCH_QUESTIONS_PENDING = "FETCH_QUESTIONS_PENDING";
export const FETCH_QUESTIONS_SUCCESS = "FETCH_QUESTIONS_SUCCESS";
export const FETCH_QUESTIONS_ERROR = "FETCH_QUESTIONS_ERROR";

export function fetchQuestionsPending() {
  return {
    type: FETCH_QUESTIONS_PENDING,
  };
}
export function fetchQuestionsSuccess(questions) {
  return {
    type: FETCH_QUESTIONS_SUCCESS,
    payload: questions,
  };
}
export function fetchQuestionsError(error) {
  return {
    type: FETCH_QUESTIONS_ERROR,
    error: error,
  };
}


