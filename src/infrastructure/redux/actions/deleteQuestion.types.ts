import { Question } from "../../../domain/entities/question.entity";

export enum ActionType {
  DELETE_QUESTION_PENDING = "DELETE_QUESTION_PENDING",
  DELETE_QUESTION_SUCCESS = "DELETE_QUESTION_SUCCESS",
  DELETE_QUESTION_FAIL = "DELETE_QUESTION_FAIL"
}

interface actionPending {
  type: ActionType.DELETE_QUESTION_PENDING;
}

interface actionSuccess {
  type: ActionType.DELETE_QUESTION_SUCCESS;
  payload: Question;
}

interface actionFail {
  type: ActionType.DELETE_QUESTION_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
