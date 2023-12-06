import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getMyQuestions } from "../../infrastructure/redux/actions/getMyQuestions.actions";
import { useAppDispatch, useAppSelector } from "../../infrastructure/redux/hooks";
import QuestionList from "../components/QuestionList/QuestionList";

type MyQuestionsScreenParams = {
  route: any;
}

export const MyQuestionsScreen = ({ route } : MyQuestionsScreenParams) => {
  const loading = useAppSelector(state => state.getMyQuestions.loading);
  const questions = useAppSelector(state => state.getMyQuestions.value);
  const dispatch = useAppDispatch();

  useEffect(()=> {
    if(questions === null) {
      dispatch(getMyQuestions("userId"));
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      { loading && <Text>Loading...</Text> }
      { !loading && (questions !== null && questions.length > 0) && (
        <>
          <Text style={styles.title}>My Questions</Text>
          <QuestionList data={questions}/>
        </>
      )}
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