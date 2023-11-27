import { Question } from "../../../domain/entities/question.entity";

export enum ActionType {
  LIKE_QUESTION_PENDING = "LIKE_QUESTION_PENDING",
  LIKE_QUESTION_SUCCESS = "LIKE_QUESTION_SUCCESS",
  LIKE_QUESTION_FAIL = "LIKE_QUESTION_FAIL"
}

interface actionPending {
  type: ActionType.LIKE_QUESTION_PENDING;
}

interface actionSuccess {
  type: ActionType.LIKE_QUESTION_SUCCESS;
  payload: Question;
}

interface actionFail {
  type: ActionType.LIKE_QUESTION_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
