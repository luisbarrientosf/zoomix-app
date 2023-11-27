import { Question } from "../../../domain/entities/question.entity";
import { Action as GetQuestionAction, ActionType as GetQuestionsActionType } from "../actions/getQuestions.types";
import { Action as LikeQuestionAction, ActionType as LikeQuestionActionType } from "../actions/likeQuestion.types";
import { Action as SaveQuestionAction, ActionType as SaveQuestionActionType } from "../actions/saveQuestion.types";
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

type Action = GetQuestionAction | LikeQuestionAction | SaveQuestionAction;


export const getQuestionsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
  case GetQuestionsActionType.GET_QUESTIONS_PENDING: {
    return {
      ...state,
      loading: true,
    };
  }
  case GetQuestionsActionType.GET_QUESTIONS_SUCCESS: {
    return {
      ...state,
      loading: false,
      value: action.payload,
    };
  }
  case GetQuestionsActionType.GET_QUESTIONS_FAIL: {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  case LikeQuestionActionType.LIKE_QUESTION_SUCCESS: {
    if(state.value?.length) {
      return {
        ...state,
        value: state.value.map((question) => {
          if(question.id !== action.payload.id) {
            return question;
          }
          return action.payload;
        })
      };
    }
    return state;
  }
  
  case SaveQuestionActionType.SAVE_QUESTION_SUCCESS: {
    if(state.value?.length) {
      return {
        ...state,
        value: state.value.map((question) => {
          if(question.id !== action.payload.id) {
            return question;
          }
          return action.payload;
        })
      };
    }
    return state;
  }

  default:
    return state;
  }
};