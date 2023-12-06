import { Dispatch } from "redux";
import { ActionType, Action } from "./deleteQuestion.types";
import { DeleteQuestion } from "../../../application/usecases/deleteQuestion";
import { QuestionApi } from "../../repositories/question.api";

export const deleteQuestion = (questionId: string, userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_QUESTION_PENDING
    });

    try {
      const questionRepository = new QuestionApi();
      const deleteQuestion = new DeleteQuestion(questionRepository);
      const question = await deleteQuestion.run(questionId, userId);

      dispatch({
        type: ActionType.DELETE_QUESTION_SUCCESS,
        payload: question
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.DELETE_QUESTION_FAIL,
        payload: "Error liking questions"
      });
    }
  };
}; 