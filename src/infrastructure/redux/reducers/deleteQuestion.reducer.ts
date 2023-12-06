import { Question } from "../../../domain/entities/question.entity";
import { Action, ActionType } from "../actions/deleteQuestion.types";

export interface State {
  value: Question | null;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  value: null,
  loading: false,
  error: null
};

export const deleteQuestionReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case ActionType.DELETE_QUESTION_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case ActionType.DELETE_QUESTION_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: action.payload,
    };
  }
  case ActionType.DELETE_QUESTION_FAIL: {
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