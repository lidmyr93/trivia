import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from "../actions/category";
import {
  fetchQuestionsError,
  fetchQuestionsPending,
  fetchQuestionsSuccess,
} from "../actions/question";
import {
  fetchCheckQuestionsPending,
  fetchCheckQuestionsSuccess,
  fetchCheckQuestionsError,
  gameStartGame,
  fetchSessionTokenPending,
  fetchSessionTokenError,
  fetchSessionTokenSuccess,
} from "../actions/game";

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

export function fetchQuestions(category, amount = 50, difficulty, type) {
  console.log(category, amount);

  return (dispatch, getState) => {
    const { game } = getState();
    const token = game && game.token;
    dispatch(fetchQuestionsPending());
    fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&token=${token}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results);
        dispatch(fetchQuestionsSuccess(res.results));
        dispatch(gameStartGame());
        return res.results;
      })
      .catch((error) => dispatch(fetchQuestionsError(error)));
  };
}

export function fetchCheckQuestions(category) {
  console.log(category);
  return (dispatch) => {
    dispatch(fetchCheckQuestionsPending());

    fetch(`https://opentdb.com/api_count.php?category=${category}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.category_question_count.total_question_count);
        dispatch(
          fetchCheckQuestionsSuccess(
            res.category_question_count.total_question_count
          )
        );
        return res.category_question_count.total_question_count;
      })
      .catch((error) => dispatch(fetchCheckQuestionsError(error)));
  };
}

export function fetchSessionToken() {
  console.log("called");
  return (dispatch) => {
    dispatch(fetchSessionTokenPending());

    fetch("https://opentdb.com/api_token.php?command=request")
      .then((res) => res.json())
      .then((res) => {
        dispatch(fetchSessionTokenSuccess(res.token));
        return res.token;
      })
      .catch((error) => dispatch(fetchSessionTokenError(error)));
  };
}


//retreiving session token
//https://opentdb.com/api_token.php?command=request

//resetting token
//https://opentdb.com/api_token.php?command=reset&token=YOURTOKENHERE
