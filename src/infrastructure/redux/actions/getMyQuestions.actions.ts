import { Dispatch } from "redux";
import { ActionType, Action } from "./getMyQuestions.types";
import { QuestionApi } from "../../repositories/question.api";
import { GetMyQuestions } from "../../../application/usecases/getMyQuestions";

export const getMyQuestions = (userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_MY_QUESTIONS_PENDING
    });

    try {
      const questionRepository = new QuestionApi();
      const getMyQuestions = new GetMyQuestions(questionRepository);
      const questions = await getMyQuestions.run(userId);

      dispatch({
        type: ActionType.GET_MY_QUESTIONS_SUCCESS,
        payload: questions
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.GET_MY_QUESTIONS_FAIL,
        payload: "Error getting my questions"
      });
    }
  };
}; 