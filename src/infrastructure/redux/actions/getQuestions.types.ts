import { Question } from "../../../domain/entities/question.entity";

export enum ActionType {
    GET_QUESTIONS_PENDING = "GET_QUESTIONS_PENDING",
    GET_QUESTIONS_SUCCESS = "GET_QUESTIONS_SUCCESS",
    GET_QUESTIONS_FAIL = "GET_QUESTIONS_FAIL"
}

interface actionPending {
    type: ActionType.GET_QUESTIONS_PENDING;
}

interface actionSuccess {
    type: ActionType.GET_QUESTIONS_SUCCESS;
    payload: Question[];
}

interface actionFail {
    type: ActionType.GET_QUESTIONS_FAIL;
    payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
