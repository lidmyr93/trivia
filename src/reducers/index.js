const initState = {
  categories: [],
  questions: [],
};

const reducer = (state = initState, action) => {
    console.log('reducer',action)
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
      case "GET_QUESTIONS" :
          return {
              ...state,
              questions: [...action.payload],
          }
      default:
          return {...state};
  }
};

export default reducer;