import { Question } from "../../../domain/entities/question.entity";

export enum ActionType {
  GET_MY_QUESTIONS_PENDING = "GET_MY_QUESTIONS_PENDING",
  GET_MY_QUESTIONS_SUCCESS = "GET_MY_QUESTIONS_SUCCESS",
  GET_MY_QUESTIONS_FAIL = "GET_MY_QUESTIONS_FAIL"
}

interface actionPending {
  type: ActionType.GET_MY_QUESTIONS_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_MY_QUESTIONS_SUCCESS;
  payload: Question[];
}

interface actionFail {
  type: ActionType.GET_MY_QUESTIONS_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
