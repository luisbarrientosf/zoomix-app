import { Button, Text, View } from "react-native";
import { getQuestions } from "../../infrastructure/redux/actions/getQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import QuestionCardCarousel from "../../presentation/components/QuestionCardCarousel/QuestionCardCarousel";

type QuestionListScreenParams = {
  route: any;
}

export const QuestionListScreen = ({ route } : QuestionListScreenParams) => {
  const { category } = route.params;
  const loading = useAppSelector(state => state.getQuestions.loading);
  const questions = useAppSelector(state => state.getQuestions.value);
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      { loading && <Text>Loading...</Text> }
      { !loading && (questions !== null && questions.length > 0) && (
        <QuestionCardCarousel data={questions}/>
      )}

      <Button
        title="Reload questions"
        onPress={() => dispatch(getQuestions(category))}
      />
    </View>
  );
};