import thunk from "redux-thunk";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { questionsReducer } from "./reducers/questions.reducers";

const reducers = combineReducers({
  questions: questionsReducer
});

export const store = configureStore({
  reducer: reducers, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;