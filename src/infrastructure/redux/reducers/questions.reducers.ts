import { Question } from "../../../domain/entities/question.entity";
import { Action, ActionType } from "../actions/getQuestions.types";

export interface State {
  value: Question[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  value: null,
  loading: false,
  error: null
};

export const questionsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.GET_QUESTIONS_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case ActionType.GET_QUESTIONS_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: action.payload,
    };
  }
  case ActionType.GET_QUESTIONS_FAIL: {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }
  default:
    return state;
  }
};