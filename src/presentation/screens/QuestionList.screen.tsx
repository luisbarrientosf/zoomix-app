import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getQuestions } from "../../infrastructure/redux/actions/getQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import { QuestionCardCarousel } from "../../presentation/components/QuestionCardCarousel/QuestionCardCarousel";

type QuestionListScreenParams = {
  route: any;
}

export const QuestionListScreen = ({ route } : QuestionListScreenParams) => {
  const { category } = route.params;
  const loading = useAppSelector(state => state.getQuestions.loading);
  const questions = useAppSelector(state => state.getQuestions.value);
  const dispatch = useAppDispatch();

  return (
    <SafeAreaView style={styles.container}>
      { loading && <Text>Loading...</Text> }
      { !loading && (questions !== null && questions.length > 0) && (
        <QuestionCardCarousel data={questions}/>
      )}

      <Button
        title="Reload questions"
        onPress={() => dispatch(getQuestions(category))}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 12
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
    marginTop: 10,
    marginBottom: 30
  }
});