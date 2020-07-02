import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from "../actions/category";
import {
  fetchQuestionsError,
  fetchQuestionsPending,
  fetchQuestionsSuccess
} from "../actions/question"

export function fetchCategories() {
  return (dispatch) => {
    dispatch(fetchCategoriesPending());

    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchCategoriesSuccess(res.trivia_categories));

        return res.trivia_categories;
      })
      .catch((error) => dispatch(fetchCategoriesError(error)));
  };
}


export function fetchQuestions(category, amount){
  console.log(category, amount)
  return (dispatch) => {
    dispatch(fetchQuestionsPending());

    fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((res) => {
      console.log(res.results)
      dispatch(fetchQuestionsSuccess(res.results))
      return res.results;
    })
    .catch((error) => dispatch(fetchQuestionsError(error)))
  }
}
