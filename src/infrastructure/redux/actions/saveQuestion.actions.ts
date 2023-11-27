import { Dispatch } from "redux";
import { ActionType, Action } from "./saveQuestion.types";
import { SaveQuestion } from "../../../application/usecases/saveQuestion";
import { QuestionApi } from "../../repositories/question.api";


export const saveQuestion = (questionId: string, userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SAVE_QUESTION_PENDING
    });

    try {
      const questionRepository = new QuestionApi();
      const saveQuestion = new SaveQuestion(questionRepository);
      const question = await saveQuestion.run(questionId, userId);

      dispatch({
        type: ActionType.SAVE_QUESTION_SUCCESS,
        payload: question
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.SAVE_QUESTION_FAIL,
        payload: "Error liking questions"
      });
    }
  };
}; 