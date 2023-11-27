import { Dispatch } from "redux";
import { ActionType, Action } from "./likeQuestion.types";
import { LikeQuestion } from "../../../application/usecases/likeQuestion";
import { QuestionApi } from "../../repositories/question.api";

export const likeQuestion = (questionId: string, userId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LIKE_QUESTION_PENDING
    });

    try {
      const questionRepository = new QuestionApi();
      const likeQuestion = new LikeQuestion(questionRepository);
      const question = await likeQuestion.run(questionId, userId);

      dispatch({
        type: ActionType.LIKE_QUESTION_SUCCESS,
        payload: question
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.LIKE_QUESTION_FAIL,
        payload: "Error liking questions"
      });
    }
  };
}; 