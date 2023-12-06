import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { getQuestionsReducer } from "./reducers/getQuestions.reducer";
import { likeQuestionReducer } from "./reducers/likeQuestion.reducer";
import { saveQuestionReducer } from "./reducers/saveQuestion.reducer";
import { getMyQuestionsReducer } from "./reducers/getMyQuestions.reducer.";
import { deleteQuestionReducer } from "./reducers/deleteQuestion.reducer";

const reducers = combineReducers({
  getQuestions: getQuestionsReducer,
  likeQuestion: likeQuestionReducer,
  saveQuestion: saveQuestionReducer,
  getMyQuestions: getMyQuestionsReducer,
  deleteQuestion: deleteQuestionReducer
});

export const store = configureStore({
  reducer: reducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;