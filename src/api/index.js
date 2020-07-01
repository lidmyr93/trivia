import {
  fetchCategoriesPending,
  fetchCategoriesSuccess,
  fetchCategoriesError,
} from "../actions";

function fetchCategories() {
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
export default fetchCategories;
