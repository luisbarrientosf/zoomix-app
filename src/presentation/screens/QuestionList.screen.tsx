import { Button, Text, View } from "react-native";
import { getQuestions } from "../../infrastructure/redux/actions/getQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";


export const QuestionListScreen = () => {
  const questions = useAppSelector(state => state.questions.value);
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>QuestionList Screen</Text>
      <Text>{JSON.stringify(questions)}</Text>
      <Button
        title="Reload questions"
        onPress={() => dispatch(getQuestions())}
      />
    </View>
  );
};