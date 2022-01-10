const initialState = {
  question_number: 1,
  username: (e) => e.target.value,
  category: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "QUESTION_NUMBER":
      return {
        ...state,
        question_number: state.question_number + 1,
      };
    case "USER_NAME":
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
