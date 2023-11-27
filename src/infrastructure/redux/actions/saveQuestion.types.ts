import { Question } from "../../../domain/entities/question.entity";

export enum ActionType {
  SAVE_QUESTION_PENDING = "SAVE_QUESTION_PENDING",
  SAVE_QUESTION_SUCCESS = "SAVE_QUESTION_SUCCESS",
  SAVE_QUESTION_FAIL = "SAVE_QUESTION_FAIL"
}

interface actionPending {
  type: ActionType.SAVE_QUESTION_PENDING;
}

interface actionSuccess {
  type: ActionType.SAVE_QUESTION_SUCCESS;
  payload: Question;
}

interface actionFail {
  type: ActionType.SAVE_QUESTION_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
