import { Dispatch } from "redux";
import { ActionType, Action } from "../actions/getQuestions.types";
import { GetQuestionList } from "../../../application/usecases/getQuestionList";
import { QuestionApi } from "../../../infrastructure/repositories/question.api";


export const getQuestions = (category: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_QUESTIONS_PENDING
    });

    try {
      const questionRepository = new QuestionApi();
      const getQuestionList = new GetQuestionList(questionRepository);
      const questions = await getQuestionList.run(category);

      dispatch({
        type: ActionType.GET_QUESTIONS_SUCCESS,
        payload: questions
      });
    } catch(err) {
      console.log(err);

      dispatch({
        type: ActionType.GET_QUESTIONS_FAIL,
        payload: "Error getting questions"
      });
    }
  };
}; 